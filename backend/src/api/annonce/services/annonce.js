'use strict';

/**
 * annonce service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::annonce.annonce');
