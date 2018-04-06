particlesJS('particles-js',
  {
    'particles': {
      'number': {
        'value': 180,
        'density': {
          'enable': true,
          'value_area': 500
        }
      },
      'color': { 'value': '#ffffff' },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': { 'nb_sides': 10 },
        'image': {
          'src': 'img/github.svg',
          'width': 50,
          'height': 50
        }
      },
      'opacity': {
        'value': 1,
        'random': true,
        'anim': {
          'enable': true,
          'speed': 2,
          'opacity_min': 0,
          'sync': false
        }
      },
      'size': {
        'value': 3,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 4,
          'size_min': 0.2,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 120,
        'color': '#ffffff',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 600
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'bubble'
        },
        'onclick': {
          'enable': true,
          'mode': 'repulse'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 300,
          'line_linked': { 'opacity': 1 }
        },
        'bubble': {
          'distance': 250,
          'size': 0, 
          'duration': 1.5,
          'opacity': 0,
          'speed': 2
        },
        'repulse': {
          'distance': 400,
          'duration': 0.3
        },
        'push': { 'particles_nb': 4 },
        'remove': { 'particles_nb': 2 }
      }
    },
    'retina_detect': true
  });
