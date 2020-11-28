/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/* global AFRAME, THREE */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * enviroGetSettings() - console function for printing out the current ground settings
	 */
	function enviroGetSettings () {
	  document.querySelector('[ground]').components['ground'].logPreset();
	}

	AFRAME.registerComponent('ground', {
	  schema: {
	    active: {default: false},
	    preset: {default: 'default', oneOf: ['none', 'default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris']},
	    seed: {type: 'int', default: 1, min: 0, max: 1000},

	    shadow: {default: false},
	    shadowSize: { default: 10},

	    flatShading: {default: false},
	    playArea: {type: 'float', default: 1, min: 0.5, max: 10},

	    ground: {default: 'hills', oneOf:['none', 'flat', 'hills', 'canyon', 'spikes', 'noise']},
	    groundYScale: {type: 'float', default: 3, min: 0, max: 50},
	    groundXZScale: {type: 'float', default: 1},
	    groundTexture: {default: 'none', oneOf:['none', 'checkerboard', 'squares', 'walkernoise']},
	    groundColor:  {type: 'color', default: '#553e35'},
	    groundColor2: {type: 'color', default: '#694439'},

	    grid: {default:'none', oneOf:['none', '1x1', '2x2', 'crosses', 'dots', 'xlines', 'ylines']},
	    gridColor: {type: 'color', default: '#ccc'},
	    positionY: {type: 'float', default: 0},
	    resolution: {type: 'int', default: 64}
	  },

	  multiple: false,

	  presets: {
	    'none' : {},
	    'default' : {active: true, seed: 1, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: -0.11, y: 1, z: 0.33}, fog: 0.78, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'checkerboard', groundColor: '#454545', groundColor2: '#5d5d5d', dressing: 'none', dressingAmount: 10, dressingColor: '#795449', dressingScale: 1, dressingVariance: { x: 0, y: 0, z: 0}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#ccc', shadow: false},
	    'contact': {active: true, seed: 14, skyType: 'gradient', skyColor: '#478d54', horizonColor: '#b696cb', lighting: 'distant', lightPosition: { x: 0, y: 2.01, z: -1}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.91, groundTexture: 'none', groundColor: '#2e455f', groundColor2: '#694439', dressing: 'apparatus', dressingAmount: 7, dressingColor: '#657067', dressingScale: 20, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: '1x1', gridColor: '#478d54', shadow: false},
	    'egypt': {active: true, seed: 26, skyType: 'gradient', skyColor: '#1b7660', horizonColor: '#e4b676', lighting: 'distant', lightPosition: { x: 0, y: 1.65, z: -1}, fog: 0.75, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 5, groundTexture: 'walkernoise', groundColor: '#664735', groundColor2: '#6c4b39', dressing: 'pyramids', dressingAmount: 10, dressingColor: '#7c5c45', dressingScale: 5, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'spots', gridColor: '#e4b676', shadow: false},
	    'checkerboard': {active: true, seed: 1, skyType: 'gradient', skyColor: '#0d0d0d', horizonColor: '#404040', lighting: 'distant', lightPosition: { x: 0, y: 1, z: -0.2}, fog: 0.81, flatShading: true, playArea: 1, ground: 'hills', groundYScale: 4.81, groundTexture: 'checkerboard', groundColor: '#252525', groundColor2: '#111111', dressing: 'cubes', dressingAmount: 10, dressingColor: '#9f9f9f', dressingScale: 1.51, dressingVariance: { x: 5, y: 20, z: 5}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'dots', gridColor: '#ccc', shadow: false},
	    'forest': {active: true, seed: 8, skyType: 'gradient', skyColor: '#24b59f', horizonColor: '#eff9b7', lighting: 'distant', lightPosition: { x: -1.2, y: 0.88, z: -0.55}, fog: 0.8, flatShading: false, playArea: 1, ground: 'noise', groundYScale: 4.18, groundTexture: 'squares', groundColor: '#937a24', groundColor2: '#987d2e', dressing: 'trees', dressingAmount: 500, dressingColor: '#888b1d', dressingScale: 1, dressingVariance: { x: 10, y: 10, z: 10}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#c5a543', shadow: false},
	    'goaland': {active: true, seed: 17, skyType: 'gradient', skyColor: '#14645f', horizonColor: '#a3dab8', lighting: 'point', lightPosition: { x: 0.1, y: 4, z: 0.56}, fog: 0.73, flatShading: false, playArea: 1, ground: 'noise', groundYScale: 0.81, groundTexture: 'none', groundColor: '#ae3241', groundColor2: '#db4453', dressing: 'mushrooms', dressingAmount: 150, dressingColor: '#a9313d', dressingScale: 5, dressingVariance: { x: 5, y: 10, z: 5}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'dots', gridColor: '#239893', shadow: false},
	    'yavapai': {active: true, seed: 11, skyType: 'gradient', skyColor: '#239849', horizonColor: '#cfe0af', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#C66344', groundColor2: '#c96b4b', dressing: 'stones', dressingAmount: 500, dressingColor: '#C66344', dressingScale: 0.06, dressingVariance: { x: 0.2, y: 0.1, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false},
	    'goldmine': {active: true, seed: 53, skyType: 'gradient', skyColor: '#1e1c1a', horizonColor: '#8c7964', lighting: 'point', lightPosition: { x: -0.09, y: 3, z: 0.33}, fog: 0.43, flatShading: true, playArea: 1.08, ground: 'canyon', groundYScale: 50, groundTexture: 'none', groundColor: '#353535', groundColor2: '#454545', dressing: 'hexagons', dressingAmount: 300, dressingColor: '#fe921b', dressingScale: 0.5, dressingVariance: { x: 2, y: 8, z: 2}, dressingUniformScale: true, dressingOnPlayArea: 0.03, grid: 'none', gridColor: '#ccc', shadow: false},
	    'threetowers': {active: true, seed: 5, skyType: 'gradient', skyColor: '#23a06b', horizonColor: '#f5e170', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.26, groundTexture: 'walkernoise', groundColor: '#273a49', groundColor2: '#2b464f', dressing: 'towers', dressingAmount: 3, dressingColor: '#5f6d94', dressingScale: 50, dressingVariance: { x: 10, y: 100, z: 10}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#239893', shadow: false},
	    'poison': {active: true, seed: 92, skyType: 'gradient', skyColor: '#1ea84a', horizonColor: '#177132', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: false, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'none', groundColor: '#851f31', groundColor2: '#912235', dressing: 'hexagons', dressingAmount: 20, dressingColor: '#c7415b', dressingScale: 20, dressingVariance: { x: 20, y: 200, z: 20}, dressingUniformScale: false, dressingOnPlayArea: 0, grid: 'crosses', gridColor: '#1ea84a', shadow: false},
	    'arches': {active: true, seed: 19, skyType: 'atmosphere', skyColor: '#8cbdc8', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: -0.11, y: 0.16, z: 0.33}, fog: 0.67, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 10, groundTexture: 'walkernoise', groundColor: '#a87d6f', groundColor2: '#795449', dressing: 'arches', dressingAmount: 6, dressingColor: '#795449', dressingScale: 26, dressingVariance: { x: 20, y: 40, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0.04, grid: 'none', gridColor: '#ccc', shadow: false},
	    'tron': {active: true, seed: 14, skyType: 'gradient', skyColor: '#091b39', horizonColor: '#284a9e', lighting: 'distant', lightPosition: { x: -0.72, y: 0.62, z: 0.4}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.91, groundTexture: 'none', groundColor: '#061123', groundColor2: '#694439', dressing: 'towers', dressingAmount: 5, dressingColor: '#fb000e', dressingScale: 15, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: '1x1', gridColor: '#fb000e', shadow: false},
	    'japan': {active: true, seed: 14, skyType: 'gradient', skyColor: '#7e5db5', horizonColor: '#b4adda', lighting: 'distant', lightPosition: { x: 1.33, y: 1, z: 0.24}, fog: 0.9, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 25, groundTexture: 'walkernoise', groundColor: '#7e5db5', groundColor2: '#cabdf5', dressing: 'torii', dressingAmount: 4, dressingColor: '#bc5e7c', dressingScale: 15, dressingVariance: { x: 0, y: 0, z: 0}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'spots', gridColor: '#e4b676', shadow: false},
	    'dream': {active: true, seed: 17, skyType: 'gradient', skyColor: '#87faf4', horizonColor: '#b34093', lighting: 'distant', lightPosition: { x: -0.72, y: 0.53, z: 0.97}, fog: 0.8, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 20, groundTexture: 'checkerboard', groundColor: '#b34093', groundColor2: '#c050a2', dressing: 'mushrooms', dressingAmount: 300, dressingColor: '#3cf7ed', dressingScale: 0.2, dressingVariance: { x: 0.2, y: 0.2, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false},
	    'volcano': {active: true, seed: 92, skyType: 'gradient', skyColor: '#4a070f', horizonColor: '#f62300', lighting: 'point', lightPosition: { x: 0.5, y: 2.25, z: 0}, fog: 0.87, flatShading: false, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#fb0803', groundColor2: '#510000', dressing: 'arches', dressingAmount: 15, dressingColor: '#fb0803', dressingScale: 3, dressingVariance: { x: 10, y: 100, z: 10}, dressingUniformScale: false, dressingOnPlayArea: 0.2, grid: 'none', gridColor: '#fa0e00', shadow: false},
	    'starry': {active: true, seed: 1, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: 0, y: -0.01, z: -0.46}, fog: 0.7, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'none', groundColor: '#553e35', groundColor2: '#694439', dressing: 'none', dressingAmount: 100, dressingColor: '#795449', dressingScale: 5, dressingVariance: { x: 1, y: 1, z: 1}, dressingUniformScale: true, grid: '1x1', dressingOnPlayArea: 0, gridColor: '#39d2f2', shadow: false},
	    'osiris': {active: true, seed: 46, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: 0, y: 0.02, z: -0.46}, fog: 0, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'none', groundColor: '#9e7b47', groundColor2: '#9e7b47', dressing: 'pyramids', dressingAmount: 7, dressingColor: '#9e7b47', dressingScale: 5, dressingVariance: { x: 30, y: 30, z: 30}, dressingUniformScale: true, grid: 'dots', dressingOnPlayArea: 0, gridColor: '#daa452', shadow: false}
	  },

	  init: function () {
	    this.groundData = {};

	    // stage ground diameter (and sky radius)
	    this.STAGE_SIZE = 200;

	    // create ground
	    this.groundMaterial = null;
	    this.ground = document.createElement('a-entity');
	    this.ground.setAttribute('rotation', '-90 0 0');
	    this.ground.setAttribute('position', '0 ' + this.data.positionY + ' 0');
	    this.ground.classList.add('groundGround');
	    this.ground.classList.add('ground');
	    this.groundCanvas = null;
	    this.groundTexture = null;
	    this.groundMaterial = null;
	    this.groundGeometry = null;

	    this.gridCanvas = null;
	    this.gridTexture = null;

	    this.el.appendChild(this.ground);
	  },

	  update: function (oldDataNonPreset) {
	    var oldData;

	    if (!this.data.preset) {
	      oldData = oldDataNonPreset;
	      this.groundData = this.data;
	    } else {
	      oldData = AFRAME.utils.clone(this.groundData);
	      this.groundData = {};
	      Object.assign(this.groundData, this.data);
	      Object.assign(this.groundData, this.presets[this.data.preset]);
	      Object.assign(this.groundData, this.el.components.ground.attrValue);
	      console.log(this.groundData);
	    }

	    // check if ground geometry needs to be calculated
	    var updateGroundGeometry =
	      !this.groundGeometry ||
	      this.groundData.seed != oldData.seed ||
	      this.groundData.ground != oldData.ground ||
	      this.groundData.playArea != oldData.playArea ||
	      this.groundData.flatShading != oldData.flatShading;

	    // check if any parameter of the ground was changed, and update it
	    if (updateGroundGeometry ||
	        this.groundData.groundColor != oldData.groundColor ||
	        this.groundData.groundColor2 != oldData.groundColor2 ||
	        this.groundData.groundYScale != oldData.groundYScale ||
	        this.groundData.groundTexture != oldData.groundTexture ||
	        this.groundData.gridColor != oldData.gridColor ||
	        this.groundData.grid != oldData.grid
	        )
	    {
	      this.updateGround(updateGroundGeometry);
	    }

	    this.el.setAttribute('visible', this.groundData.active);

	    // dump current component settings to console
	    this.dumpParametersDiff();
	  },

	  // logs current parameters to console, for saving to a preset
	  logPreset: function () {
	    var str = '{';
	    for (var i in this.schema){
	      if (i == 'preset') continue;
	      str += i + ': ';
	      var type = this.schema[i].type;
	      if (type == 'vec3') {
	        str += '{ x: ' + this.groundData[i].x + ', y: ' + this.groundData[i].y + ', z: ' + this.groundData[i].z + '}';
	      }
	      else if (type == 'string' || type == 'color') {
	        str += '"' + this.groundData[i] + '"';
	      }
	      else {
	        str += this.groundData[i];
	      }
	      str += ', ';
	    }
	    str += '}';
	    console.log(str);
	  },

	  // dumps current component settings to console.
	  dumpParametersDiff: function () {

	    // trim number to 3 decimals
	    function dec3 (v) {
	      return Math.floor(v * 1000) / 1000;
	    }

	    var params = [];
	    var usingPreset = this.data.preset != 'none' ? this.presets[this.data.preset] : false;

	    if (usingPreset) {
	      params.push('preset: ' + this.data.preset);
	    }

	    for (var i in this.schema) {
	      if (i == 'preset' || (usingPreset && usingPreset[i] === undefined)) {
	        continue;
	      }
	      var def = usingPreset ? usingPreset[i] : this.schema[i].default;
	      var data = this.groundData[i];
	      var type = this.schema[i].type;
	      if (type == 'vec3') {
	        var coords = def;
	        if (typeof(def) == 'string') {
	          def = def.split(' ');
	          coords = {x: def[0], y: def[1], z: def[2]};
	        }
	        if (dec3(coords.x) != dec3(data.x) || dec3(coords.y) != dec3(data.y) || dec3(coords.z) != dec3(data.z)) {
	          params.push(i + ': ' + dec3(data.x) + ' ' + dec3(data.y) + ' ' + dec3(data.z));
	        }
	      }
	      else {
	        if (def != data) {
	          if (this.schema[i].type == 'number') {
	            data = dec3(data);
	          }
	          params.push(i + ': ' + data);
	        }
	      }
	    }
	    console.log('%c' + params.join('; '), 'color: #f48;font-weight:bold');
	  },

	  // Custom Math.random() with seed. Given this.groundData.seed and x, it always returns the same "random" number
	  random: function (x) {
	    return parseFloat('0.' + Math.sin(this.groundData.seed * 9999 * x).toString().substr(7));
	  },


	  // updates ground attributes, and geometry if required
	  updateGround: function (updateGeometry) {

	    var resolution = this.data.resolution; // number of divisions of the ground mesh

	    if (updateGeometry) {
	      var visibleground = this.groundData.ground != 'none';
	      this.ground.setAttribute('visible', visibleground);
	      if (!visibleground) {
	        return;
	      }

	      if (!this.groundGeometry) {
	        this.groundGeometry = new THREE.PlaneGeometry(this.STAGE_SIZE + 2, this.STAGE_SIZE + 2, resolution - 1, resolution - 1);
	      }
	      var perlin = new PerlinNoise();
	      var verts = this.groundGeometry.vertices;
	      var numVerts = this.groundGeometry.vertices.length;
	      var frequency = 10;
	      var inc = frequency / resolution;

	      for (var i = 0, x = 0, y = 0; i < numVerts; i++) {
	        if (this.groundData.ground == 'flat') {
	          verts[i].z = 0;
	          continue;
	        }

	        var h;
	        switch (this.groundData.ground) {
	          case 'hills': {
	            h = Math.max(0, perlin.noise(x, y, 0));
	            break;
	          }
	          case 'canyon': {
	            h = 0.2 + perlin.noise(x, y, 0) * 0.8;
	            h = Math.min(1, Math.pow(h, 2) * 10);
	            break;
	          }
	          case 'spikes': {
	            h = this.random(i) < 0.02 ? this.random(i + 1) : 0;
	            break;
	          }
	          case 'noise': {
	            h = this.random(i) < 0.35 ? this.random(i + 1) : 0;
	            break;
	          }
	        }

	        h += this.random(i + 2) * 0.1; // add some randomness

	        // flat ground in the center
	        var xx = x * 2 / frequency - 1;
	        var yy = y * 2 / frequency - 1;
	        var pa = this.groundData.playArea;
	        xx = Math.max(0, Math.min(1, (Math.abs(xx) - (pa - 0.9)) * (1 / pa) ));
	        yy = Math.max(0, Math.min(1, (Math.abs(yy) - (pa - 0.9)) * (1 / pa) ));
	        h *= xx > yy ? xx : yy;
	        if (h < 0.01) h = 0; // stick to the floor

	        // set height
	        verts[i].z = h;

	        // calculate next x,y ground coordinates
	        x += inc;
	        if (x >= 10) {
	          x = 0;
	          y += inc;
	        }
	      }

	      this.groundGeometry.computeFaceNormals();
	      if (this.groundData.flatShading) {
	        this.groundGeometry.computeFlatVertexNormals();
	      }
	      else {
	        this.groundGeometry.computeVertexNormals();
	      }

	      this.groundGeometry.verticesNeedUpdate = true;
	      this.groundGeometry.normalsNeedUpdate = true;
	    }

	    // apply Y scale. There's no need to recalculate the geometry for this. Just change scale
	    this.ground.setAttribute('scale', {z: this.groundData.groundYScale});

	    this.ground.setAttribute('scale', {x: this.groundData.groundXZScale});
	    this.ground.setAttribute('scale', {y: this.groundData.groundXZScale});


	    // update ground, playarea and grid textures.
	    var groundResolution = 2048;
	    var texMeters = 20; // ground texture of 20 x 20 meters
	    var texRepeat = this.STAGE_SIZE / texMeters;

	    if (!this.groundCanvas || this.groundCanvas.width != groundResolution) {
	      this.gridCanvas = document.createElement('canvas');
	      this.gridCanvas.width = groundResolution;
	      this.gridCanvas.height = groundResolution;
	      this.gridTexture = new THREE.Texture(this.gridCanvas);
	      this.gridTexture.wrapS = THREE.RepeatWrapping;
	      this.gridTexture.wrapT = THREE.RepeatWrapping;
	      this.gridTexture.repeat.set(texRepeat, texRepeat);

	      this.groundCanvas = document.createElement('canvas');
	      this.groundCanvas.width = groundResolution;
	      this.groundCanvas.height = groundResolution;
	      this.groundTexture = new THREE.Texture(this.groundCanvas);
	      this.groundTexture.wrapS = THREE.RepeatWrapping;
	      this.groundTexture.wrapT = THREE.RepeatWrapping;
	      this.groundTexture.repeat.set(texRepeat, texRepeat);

	      // ground material diffuse map is the regular ground texture and the grid texture
	      // is used in the emissive map. This way, the grid is always equally visible, even at night.
	      this.groundMaterialProps = {
	        map: this.groundTexture,
	        emissive: new THREE.Color(0xFFFFFF),
	        emissiveMap: this.gridTexture
	      };

	      // use .shading for A-Frame < 0.7.0 and .flatShading for A-Frame >= 0.7.0
	      if (new THREE.Material().hasOwnProperty('shading')) {
	        this.groundMaterialProps.shading = this.groundData.flatShading ? THREE.FlatShading : THREE.SmoothShading;
	      } else {
	        this.groundMaterialProps.flatShading = this.groundData.flatShading;
	      }

	      this.groundMaterial = new THREE.MeshLambertMaterial(this.groundMaterialProps);
	    }

	    var groundctx = this.groundCanvas.getContext('2d');
	    var gridctx = this.gridCanvas.getContext('2d');

	    this.drawTexture(groundctx, groundResolution, texMeters);

	    gridctx.fillStyle = '#000000';
	    gridctx.fillRect(0, 0, groundResolution, groundResolution);
	    this.drawGrid(gridctx, groundResolution, texMeters);

	    this.groundTexture.needsUpdate = true;
	    this.gridTexture.needsUpdate = true;

	    if (updateGeometry) {
	      var mesh = new THREE.Mesh(this.groundGeometry, this.groundMaterial);
	      this.ground.setObject3D('mesh', mesh);
	    }
	    else {
	      this.ground.getObject3D('mesh').material = this.groundMaterial;
	    }

	    this.ground.setAttribute('shadow', {
	      cast: false,
	      receive: this.groundData.shadow
	    });
	  },

	  // draw grid to a canvas context
	  drawGrid: function (ctx, size, texMeters) {

	    if (this.groundData.grid == 'none') return;

	    // one grid feature each 2 meters

	    var num = Math.floor(texMeters / 2);
	    var step = size / (texMeters / 2); // 2 meters == <step> pixels
	    var i, j, ii;

	    ctx.fillStyle = this.groundData.gridColor;

	    switch (this.groundData.grid) {
	      case '1x1':
	      case '2x2': {
	        if (this.groundData.grid == '1x1') {
	          num = num * 2;
	          step = size / texMeters;
	        }
	        for (i = 0; i < num; i++) {
	          ii = Math.floor(i * step);
	          ctx.fillRect(0, ii, size, 1);
	          ctx.fillRect(ii, 0, 1, size);
	        }
	        break;
	      }
	      case 'crosses': {
	        var l = Math.floor(step / 20);
	        for (i = 0; i < num + 1; i++) {
	          ii = Math.floor(i * step);
	          for (j = 0; j < num + 1; j++) {
	            var jj = Math.floor(-l + j * step);
	            ctx.fillRect(jj, ii, l * 2, 1);
	            ctx.fillRect(ii, jj, 1, l * 2);
	          }
	        }
	        break;
	      }
	      case 'dots': {
	        for (i = 0; i < num + 1; i++) {
	          for (j = 0; j < num + 1; j++) {
	            ctx.beginPath(); ctx.arc(Math.floor(j * step), Math.floor(i * step), 4, 0, Math.PI * 2); ctx.fill();
	          }
	        }
	        break;
	      }
	      case 'xlines': {
	        for (i = 0; i < num; i++) {
	          ctx.fillRect(Math.floor(i * step), 0, 1, size);
	        }
	        break;
	      }
	      case 'ylines': {
	        for (i = 0; i < num; i++) {
	          ctx.fillRect(0, Math.floor(i * step), size, 1);
	        }
	        break;
	      }
	    }
	  },

	  // draw ground texture to a canvas context
	  drawTexture: function(ctx, size, texMeters) {
	    // fill all with ground Color
	    ctx.fillStyle = this.groundData.groundColor;
	    ctx.fillRect(0, 0, size, size);

	    var i, col, col1, col2, im, imdata, numpixels;

	    if (this.groundData.groundTexture == 'none') return;
	    switch(this.groundData.groundTexture) {
	      case 'checkerboard': {
	        ctx.fillStyle = this.groundData.groundColor2;
	        var num = Math.floor(texMeters / 2);
	        var step = size / (texMeters / 2); // 2 meters == <step> pixels
	        for (i = 0; i < num + 1; i += 2) {
	          for (var j = 0; j < num + 1; j ++) {
	            ctx.fillRect(Math.floor((i + j % 2) * step), Math.floor(j * step), Math.floor(step), Math.floor(step));
	          }
	        }
	        break;
	      }
	      case 'squares': {
	        var numSquares = 16;
	        var squareSize = size / numSquares;
	        col1 = new THREE.Color(this.groundData.groundColor);
	        col2 = new THREE.Color(this.groundData.groundColor2);
	        for (i = 0; i < numSquares * numSquares; i++) {
	          col = this.random(i + 3) > 0.5 ? col1.clone() : col2.clone();
	          col.addScalar(this.random(i + 3) * 0.1 - 0.05);
	          ctx.fillStyle = '#' + col.getHexString();
	          ctx.fillRect((i % numSquares) * squareSize, Math.floor(i / numSquares) * squareSize, squareSize, squareSize);
	        }
	        break;
	      }
	      case 'noise': {
	      // TODO: fix
	        imdata = ctx.getImageData(0, 0, size, size);
	        im = imdata.data;
	        col1 = new THREE.Color(this.groundData.groundColor);
	        col2 = new THREE.Color(this.groundData.groundColor2);
	        var diff = new THREE.Color(col2.r - col1.r, col2.g - col1.g, col2.b - col1.b);
	        var perlin = new PerlinNoise();
	        for (i = 0, j = 0, numpixels = im.length; i < numpixels; i += 4, j++){
	          //console.log( (j % size) / size, j / size)
	          var rnd = perlin.noise((j % size) / size * 3, j / size / size * 3, 0);
	          im[i + 0] = Math.floor((col1.r + diff.r * rnd) * 255);
	          im[i + 1] = Math.floor((col1.g + diff.g * rnd) * 255);
	          im[i + 2] = Math.floor((col1.b + diff.b * rnd) * 255);
	        }
	        ctx.putImageData(imdata, 0, 0);
	        break;
	      }
	      case 'walkernoise': {
	        var s = Math.floor(size / 2);
	        var tex = document.createElement('canvas');
	        tex.width = s;
	        tex.height = s;
	        var texctx = tex.getContext('2d');
	        texctx.fillStyle = this.groundData.groundColor;
	        texctx.fillRect(0, 0, s, s);
	        imdata = texctx.getImageData(0, 0, s, s);
	        im = imdata.data;
	        col1 = new THREE.Color(this.groundData.groundColor);
	        col2 = new THREE.Color(this.groundData.groundColor2);
	        var walkers = [];
	        var numwalkers = 1000;
	        for (i = 0; i < numwalkers; i++) {
	          col = col1.clone().lerp(col2, Math.random());
	          walkers.push({
	            x: Math.random() * s,
	            y: Math.random() * s,
	            r: Math.floor(col.r * 255),
	            g: Math.floor(col.g * 255),
	            b: Math.floor(col.b * 255)
	          });
	        }
	        var iterations = 5000;
	        for (var it = 0; it< iterations; it++){
	          for (i = 0; i < numwalkers; i++) {
	            var walker = walkers[i];
	            var pos = Math.floor((walker.y * s + walker.x)) * 4;
	            im[pos + 0] = walker.r;
	            im[pos + 1] = walker.g;
	            im[pos + 2] = walker.b;
	            walker.x += Math.floor(Math.random() * 3) - 1;
	            walker.y += Math.floor(Math.random() * 3) - 1;
	            if (walker.x >= s) walker.x = walker.x - s;
	            if (walker.y >= s) walker.y = walker.y - s;
	            if (walker.x < 0) walker.x = s + walker.x;
	            if (walker.y < 0) walker.y = s + walker.y;
	          }
	        }
	        texctx.putImageData(imdata, 0, 0);
	        ctx.drawImage(tex, 0, 0, size, size);
	        break;
	      }
	    }
	  },
	})

	// perlin noise generator
	// from https://gist.github.com/banksean/304522

	var PerlinNoise = function(r) {
	  if (r == undefined) r = Math;
	  this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
	  this.p = [];
	  var i;
	  for (i=0; i<256; i++) {
	    this.p[i] = Math.floor(r.random(666)*256);
	  }
	  // To remove the need for index wrapping, double the permutation table length
	  this.perm = [];
	  for(i=0; i<512; i++) {
	    this.perm[i]=this.p[i & 255];
	  }
	};

	PerlinNoise.prototype.dot = function(g, x, y, z) {
	  return g[0]*x + g[1]*y + g[2]*z;
	};

	PerlinNoise.prototype.mix = function(a, b, t) {
	  return (1.0-t)*a + t*b;
	};

	PerlinNoise.prototype.fade = function(t) {
	  return t*t*t*(t*(t*6.0-15.0)+10.0);
	};

	// Classic Perlin noise, 3D version
	PerlinNoise.prototype.noise = function(x, y, z) {
	  // Find unit grid cell containing point
	  var X = Math.floor(x);
	  var Y = Math.floor(y);
	  var Z = Math.floor(z);

	  // Get relative xyz coordinates of point within that cell
	  x = x - X;
	  y = y - Y;
	  z = z - Z;

	  // Wrap the integer cells at 255 (smaller integer period can be introduced here)
	  X = X & 255;
	  Y = Y & 255;
	  Z = Z & 255;

	  // Calculate a set of eight hashed gradient indices
	  var gi000 = this.perm[X+this.perm[Y+this.perm[Z]]] % 12;
	  var gi001 = this.perm[X+this.perm[Y+this.perm[Z+1]]] % 12;
	  var gi010 = this.perm[X+this.perm[Y+1+this.perm[Z]]] % 12;
	  var gi011 = this.perm[X+this.perm[Y+1+this.perm[Z+1]]] % 12;
	  var gi100 = this.perm[X+1+this.perm[Y+this.perm[Z]]] % 12;
	  var gi101 = this.perm[X+1+this.perm[Y+this.perm[Z+1]]] % 12;
	  var gi110 = this.perm[X+1+this.perm[Y+1+this.perm[Z]]] % 12;
	  var gi111 = this.perm[X+1+this.perm[Y+1+this.perm[Z+1]]] % 12;

	  // The gradients of each corner are now:
	  // g000 = grad3[gi000];
	  // g001 = grad3[gi001];
	  // g010 = grad3[gi010];
	  // g011 = grad3[gi011];
	  // g100 = grad3[gi100];
	  // g101 = grad3[gi101];
	  // g110 = grad3[gi110];
	  // g111 = grad3[gi111];
	  // Calculate noise contributions from each of the eight corners
	  var n000= this.dot(this.grad3[gi000], x, y, z);
	  var n100= this.dot(this.grad3[gi100], x-1, y, z);
	  var n010= this.dot(this.grad3[gi010], x, y-1, z);
	  var n110= this.dot(this.grad3[gi110], x-1, y-1, z);
	  var n001= this.dot(this.grad3[gi001], x, y, z-1);
	  var n101= this.dot(this.grad3[gi101], x-1, y, z-1);
	  var n011= this.dot(this.grad3[gi011], x, y-1, z-1);
	  var n111= this.dot(this.grad3[gi111], x-1, y-1, z-1);
	  // Compute the fade curve value for each of x, y, z
	  var u = this.fade(x);
	  var v = this.fade(y);
	  var w = this.fade(z);
	   // Interpolate along x the contributions from each of the corners
	  var nx00 = this.mix(n000, n100, u);
	  var nx01 = this.mix(n001, n101, u);
	  var nx10 = this.mix(n010, n110, u);
	  var nx11 = this.mix(n011, n111, u);
	  // Interpolate the four results along y
	  var nxy0 = this.mix(nx00, nx10, v);
	  var nxy1 = this.mix(nx01, nx11, v);
	  // Interpolate the two last results along z
	  var nxyz = this.mix(nxy0, nxy1, w);

	  return nxyz;
	};


/***/ })
/******/ ]);