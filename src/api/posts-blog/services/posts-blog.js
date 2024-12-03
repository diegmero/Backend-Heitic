'use strict';

/**
 * posts-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::posts-blog.posts-blog');
