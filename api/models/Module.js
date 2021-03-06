/**

Copyright 2016, Cloud Compass Computing, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
/**
 * Module.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: "string",
      required: true,
      enum: ['repo', 'issues', 'wiki']
    },
    config: {
      type: "json"
    },
    widgets: {
      collection: 'widget',
      via: 'module'
    },
    service: {
      model: 'service',
      required: true
    },
    project: {
      model: "project",
      required: true
    },

    //todo icon is a client-side concern and should be refactored.
    getIcon: function() {
      console.log("Looking up icon for", this);
      //<i class="material-icons">face</i>
      var iconMap = {
        'repo': 'archive',
        'issues':'bug report' ,
        'wiki': 'description'
      };

      return iconMap[this.type];
    },

    // Override the default toJSON method so the derived icon is included
    toJSON: function() {
      var obj = this.toObject();
      obj.icon = this.getIcon();
      return obj;
    }
  },

  beforeCreate: function (module, next) {
    var admin = module.config.permissions.admin;
    module.config = _.pick(module.config, ['full_name']);
    sails.log.info('Project.beforeCreate.createWebhook', module);
    var serviceId = _.has(module.service, 'id') ? module.service.id : module.service;
    Service.findOne({id: serviceId})
      .exec(function (err, service) {
        if (service.platform == 'github') {
          if (admin) {
            GithubService.createWebhook(module, next);
          } else {
            next();
          }
        }
      });
  },

  afterDestroy: function (destroyedRecords, cb) {
    Widget.destroy({module: _.pluck(destroyedRecords, 'id')}).exec(cb);
  }

};

