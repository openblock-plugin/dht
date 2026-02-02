/* eslint-disable quote-props */
/* eslint-disable max-len */
/**
 * Translation file for this resouce.
 *
 * IMPORTANT:
 * - The "en" (English) section is automatically generated from source files.
 *   Do NOT modify the "en" section manually.
 * - Other language sections (e.g., "zh-cn", "zh-tw", "ja", etc.) should be
 *   manually translated by you.
 * - When you run the extraction script again, only the "en" section will be
 *   updated. Your manual translations in other languages will be preserved.
 *
 * Structure:
 * - interface: translations for name/description (used by GUI formatMessage)
 * - extensions: translations for extension blocks (used by VM formatMessage)
 * - blocks: translations for Blockly blocks (used by Blockly.Msg)
 */

export default {
    'interface': {
        'en': {
            'extension.dht.name': 'DHT Sensor',
            'extension.dht.description': 'DHT Temperature and humidity sensor module.'
        },
        'ru': {
            'extension.dht.name': 'DHT Sensor',
            'extension.dht.description': 'DHT Temperature and humidity sensor module.'
        },
        'zh-cn': {
            'extension.dht.name': 'DHT Sensor',
            'extension.dht.description': 'DHT Temperature and humidity sensor module.'
        },
        'zh-tw': {
            'extension.dht.name': 'DHT Sensor',
            'extension.dht.description': 'DHT Temperature and humidity sensor module.'
        }
    },
    'extensions': {
        'en': {},
        'ru': {},
        'zh-cn': {},
        'zh-tw': {}
    },
    'blocks': {
        'en': {
            'DHT_CATEGORY': 'DHT',
            'DHT_INIT': 'init dht %1 pin %2 model %3',
            'DHT_READ_TEMPERATURE': 'dht %1 read temperature %2',
            'DHT_READ_HUMIDITY': 'dht %1 read humidity'
        },
        'ru': {
            'DHT_CATEGORY': 'DHT',
            'DHT_INIT': 'init dht %1 pin %2 model %3',
            'DHT_READ_TEMPERATURE': 'dht %1 read temperature %2',
            'DHT_READ_HUMIDITY': 'dht %1 read humidity'
        },
        'zh-cn': {
            'DHT_CATEGORY': 'DHT',
            'DHT_INIT': 'init dht %1 pin %2 model %3',
            'DHT_READ_TEMPERATURE': 'dht %1 read temperature %2',
            'DHT_READ_HUMIDITY': 'dht %1 read humidity'
        },
        'zh-tw': {
            'DHT_CATEGORY': 'DHT',
            'DHT_INIT': 'init dht %1 pin %2 model %3',
            'DHT_READ_TEMPERATURE': 'dht %1 read temperature %2',
            'DHT_READ_HUMIDITY': 'dht %1 read humidity'
        }
    }
};
