'use strict';

// had enabled by egg
// exports.static = true;

exports.redis = {
    enable: true,
    package: 'egg-redis'
};

exports.cors = {
    enable: true,
    package: 'egg-cors'
};