var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "yaw": 0.42697624172946114,
        "pitch": 0,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": 2.231137766157854,
          "pitch": 0.4347477411990468,
          "rotation": 0,
          "target": "1-golf-area"
        },
        {
          "yaw": 0.00772120472252702,
          "pitch": 0.20122896361173126,
          "rotation": 0,
          "target": "4-room"
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
    },
    {
      "id": "1-golf-area",
      "name": "Golf Area",
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
          "target": "3-pool-view"
        },
        {
          "yaw": 0.3847026659442001,
          "pitch": 0.19379305983748196,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pool-entrance",
      "name": "Pool Entrance",
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
          "target": "3-pool-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pool-view",
      "name": "Pool View",
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
          "target": "2-pool-entrance"
        },
        {
          "yaw": -2.409539788447285,
          "pitch": 0.17114197638500706,
          "rotation": 0,
          "target": "1-golf-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-room",
      "name": "Room",
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
          "target": "0-entrance"
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
