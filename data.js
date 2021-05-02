var APP_DATA = {
  "scenes": [
    {
      "id": "0-alley",
      "name": "alley",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8922788613781272,
          "pitch": 0.2184904096051561,
          "rotation": 0,
          "target": "2-pool_view"
        },
        {
          "yaw": 0.3847026659442001,
          "pitch": 0.19379305983748196,
          "rotation": 0,
          "target": "4-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sea_entrance",
      "name": "sea_entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5858933806086384,
          "pitch": 0.3246779867638878,
          "rotation": 0,
          "target": "2-pool_view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pool_view",
      "name": "pool_view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3999461749830484,
          "pitch": 0.1499035170101326,
          "rotation": 0,
          "target": "1-sea_entrance"
        },
        {
          "yaw": -2.409539788447285,
          "pitch": 0.17114197638500706,
          "rotation": 0,
          "target": "0-alley"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room",
      "name": "room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1718.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.37246576915153184,
          "pitch": 0.3398972481894411,
          "rotation": 0,
          "target": "4-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.04049673621699412,
          "pitch": -0.06751034922535837,
          "title": "Image",
          "text": "This is information about picture."
        }
      ]
    },
    {
      "id": "4-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 2.231137766157854,
          "pitch": 0.4347477411990468,
          "rotation": 0,
          "target": "0-alley"
        },
        {
          "yaw": 0.00772120472252702,
          "pitch": 0.20122896361173126,
          "rotation": 0,
          "target": "3-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7976127465720388,
          "pitch": 3.5544893250971654e-8,
          "title": "Hotel Name",
          "text": "Hotel Description"
        }
      ]
    }
  ],
  "name": "My 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
