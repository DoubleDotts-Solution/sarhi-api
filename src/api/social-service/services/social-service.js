'use strict';

/**
 * social-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::social-service.social-service');
