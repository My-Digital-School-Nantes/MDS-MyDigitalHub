'use strict';

/**
 * quizz service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quizz.quizz');
