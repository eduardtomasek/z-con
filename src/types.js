/**
 * @typedef {object} ZelloStreamConfig
 * @property {string} username
 * @property {string} password
 * @property {string} zello_channel
 * @property {string} issuer
 * @property {number} vox_silence_time
 * @property {number} audio_threshold
 * @property {number} input_device_index
 * @property {string} input_pulse_name
 * @property {number} output_device_index
 * @property {string} output_pulse_name
 * @property {nubmer} zello_input_sample_rate
 * @property {number} audio_input_sample_rate
 * @property {string} in_channel_config
 * @property {number} audio_input_channels
 * @property {number} audio_output_sample_rate
 * @property {number} audio_output_channels
 * @property {float}  audio_output_volume
 * @property {string} logging_level
 * @property {boolean} TGID_in_stream
 * @property {number} TGID_to_play
 * @property {number} UDP_PORT
 */

/**
 * @typedef {object} ConfigCredentials
 * @property {string} userName
 * @property {string} userPassword
 * 
 * @typedef {object} ConfigFiles
 * @property {string} configFilePath
 * @property {string} privateKeyPath
 * @property {string} runScriptPath
 * 
 * @typedef {object} ConfigServer
 * @property {number} port
 * 
 * @typedef {ConfigCredentials | ConfigFiles | ConfigServer} Config
 */

module.exports = {}
