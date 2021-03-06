const { sendinput, doubleinput } = require("node-gyp-build")(__dirname);

// CONSTANTS
const VK = Object.freeze({
    MOUSE_LEFT: 0x01,
    MOUSE_RIGHT: 0x02,
    CANCEL: 0x03,
    MOUSE_MID: 0x04,
    MOUSE_X1: 0x05,
    MOUSE_X2: 0x06,
    BACK: 0x08,
    TAB: 0x09,
    CLEAR: 0x0C,
    RETURN: 0x0D,
    SHIFT: 0x10,
    CONTROL: 0x11,
    MENU: 0x12,
    PAUSE: 0x13,
    CAPITAL: 0x14,
    KANA: 0x15,
    HANGUEL: 0x15,
    HANGUL: 0x15,
    JUNJA: 0x17,
    FINAL: 0x18,
    HANJA: 0x19,
    KANJI: 0x19,
    ESCAPE: 0x1B,
    CONVERT: 0x1C,
    NONCONVERT: 0x1D,
    ACCEPT: 0x1E,
    MODECHANGE: 0x1F,
    SPACE: 0x20,
    PRIOR: 0x21,
    NEXT: 0x22,
    END: 0x23,
    HOME: 0x24,
    ARROW_LEFT: 0x25,
    ARROW_UP: 0x26,
    ARROW_RIGHT: 0x27,
    ARROW_DOWN: 0x28,
    SELECT: 0x29,
    PRINT: 0x2A,
    EXECUTE: 0x2B,
    SNAPSHOT: 0x2C,
    INSERT: 0x2D,
    DELETE: 0x2E,
    HELP: 0x2F,
    0: 0x30,
    1: 0x31,
    2: 0x32,
    3: 0x33,
    4: 0x34,
    5: 0x35,
    6: 0x36,
    7: 0x37,
    8: 0x38,
    9: 0x39,
    A: 0x41,
    B: 0x42,
    C: 0x43,
    D: 0x44,
    E: 0x45,
    F: 0x46,
    G: 0x47,
    H: 0x48,
    I: 0x49,
    J: 0x4A,
    K: 0x4B,
    L: 0x4C,
    M: 0x4D,
    N: 0x4E,
    O: 0x4F,
    P: 0x50,
    Q: 0x51,
    R: 0x52,
    S: 0x53,
    T: 0x54,
    U: 0x55,
    V: 0x56,
    W: 0x57,
    X: 0x58,
    Y: 0x59,
    Z: 0x5A,
    LWIN: 0x5B,
    RWIN: 0x5C,
    APPS: 0x5D,
    SLEEP: 0x5F,
    NUMPAD0: 0x60,
    NUMPAD1: 0x61,
    NUMPAD2: 0x62,
    NUMPAD3: 0x63,
    NUMPAD4: 0x64,
    NUMPAD5: 0x65,
    NUMPAD6: 0x66,
    NUMPAD7: 0x67,
    NUMPAD8: 0x68,
    NUMPAD9: 0x69,
    MULTIPLY: 0x6A,
    ADD: 0x6B,
    SEPARATOR: 0x6C,
    SUBTRACT: 0x6D,
    DECIMAL: 0x6E,
    DIVIDE: 0x6F,
    F1: 0x70,
    F2: 0x71,
    F3: 0x72,
    F4: 0x73,
    F5: 0x74,
    F6: 0x75,
    F7: 0x76,
    F8: 0x77,
    F9: 0x78,
    F10: 0x79,
    F11: 0x7A,
    F12: 0x7B,
    F13: 0x7C,
    F14: 0x7D,
    F15: 0x7E,
    F16: 0x7F,
    F17: 0x80,
    F18: 0x81,
    F19: 0x82,
    F20: 0x83,
    F21: 0x84,
    F22: 0x85,
    F23: 0x86,
    F24: 0x87,
    NUMLOCK: 0x90,
    SCROLL: 0x91,
    LSHIFT: 0xA0,
    RSHIFT: 0xA1,
    LCONTROL: 0xA2,
    RCONTROL: 0xA3,
    LMENU: 0xA4,
    RMENU: 0xA5,
    BROWSER_BACK: 0xA6,
    BROWSER_FORWARD: 0xA7,
    BROWSER_REFRESH: 0xA8,
    BROWSER_STOP: 0xA9,
    BROWSER_SEARCH: 0xAA,
    BROWSER_FAVORITES: 0xAB,
    BROWSER_HOME: 0xAC,
    VOLUME_MUTE: 0xAD,
    VOLUME_DOWN: 0xAE,
    VOLUME_UP: 0xAF,
    MEDIA_NEXT_TRACK: 0xB0,
    MEDIA_PREV_TRACK: 0xB1,
    MEDIA_STOP: 0xB2,
    MEDIA_PLAY_PAUSE: 0xB3,
    LAUNCH_MAIL: 0xB4,
    LAUNCH_MEDIA_SELECT: 0xB5,
    LAUNCH_APP1: 0xB6,
    LAUNCH_APP2: 0xB7,
    OEM1: 0xBA,
    OEM_PLUS: 0xBB,
    OEM_COMMA: 0xBC,
    OEM_MINUS: 0xBD,
    OEM_PERIOD: 0xBE,
    OEM2: 0xBF,
    OEM3: 0xDA,
    OEM4: 0xDB,
    OEM5: 0xDC,
    OEM6: 0xDD,
    OEM7: 0xDE,
    OEM8: 0xDF,
    OEM102: 0xE2,
    PROCESSKEY: 0xE5,
    PACKET: 0xE7,
    ATTN: 0xF6,
    CRSEL: 0xF7,
    EXSEL: 0xF8,
    EREOF: 0xF9,
    PLAY: 0xFA,
    ZOOM: 0xFB,
    NONAME: 0xFC,
    PA1: 0xFD,
    OEM_CLEAR: 0xFE
});
const VK_HEX = new Set(Object.values(VK));

/**
 * @class VKCombo
 */
class VKCombo {
    /**
     * @constructor
     * @param {!Number} firstVk First Virtual Key
     * @param {!Number} secondVk Second vk
     *
     * @throws {Error}
     */
    constructor(firstVk, secondVk) {
        if (!VK_HEX.has(firstVk)) {
            throw new Error(`Unknown virtual key '${firstVk}' for firstVk param`);
        }
        if (!VK_HEX.has(secondVk)) {
            throw new Error(`Unknown virtual key '${secondVk}' for secondVk param`);
        }

        this.first = firstVk;
        this.second = secondVk;
    }
}

const STR_VK = Object.freeze({
    "a": VK.A,
    "b": VK.B,
    "c": VK.C,
    "d": VK.D,
    "e": VK.E,
    "f": VK.F,
    "g": VK.G,
    "h": VK.H,
    "i": VK.I,
    "j": VK.J,
    "k": VK.K,
    "l": VK.L,
    "m": VK.M,
    "o": VK.O,
    "p": VK.P,
    "q": VK.Q,
    "r": VK.R,
    "s": VK.S,
    "t": VK.T,
    "u": VK.U,
    "v": VK.V,
    "w": VK.W,
    "x": VK.X,
    "y": VK.Y,
    "z": VK.Z,
    "A": new VKCombo(VK.CAPITAL, VK.A),
    "B": new VKCombo(VK.CAPITAL, VK.B),
    "C": new VKCombo(VK.CAPITAL, VK.C),
    "D": new VKCombo(VK.CAPITAL, VK.D),
    "E": new VKCombo(VK.CAPITAL, VK.E),
    "F": new VKCombo(VK.CAPITAL, VK.F),
    "G": new VKCombo(VK.CAPITAL, VK.G),
    "H": new VKCombo(VK.CAPITAL, VK.H),
    "I": new VKCombo(VK.CAPITAL, VK.I),
    "J": new VKCombo(VK.CAPITAL, VK.J),
    "K": new VKCombo(VK.CAPITAL, VK.K),
    "L": new VKCombo(VK.CAPITAL, VK.L),
    "M": new VKCombo(VK.CAPITAL, VK.M),
    "O": new VKCombo(VK.CAPITAL, VK.O),
    "P": new VKCombo(VK.CAPITAL, VK.P),
    "Q": new VKCombo(VK.CAPITAL, VK.Q),
    "R": new VKCombo(VK.CAPITAL, VK.R),
    "S": new VKCombo(VK.CAPITAL, VK.S),
    "T": new VKCombo(VK.CAPITAL, VK.T),
    "U": new VKCombo(VK.CAPITAL, VK.U),
    "V": new VKCombo(VK.CAPITAL, VK.V),
    "W": new VKCombo(VK.CAPITAL, VK.W),
    "X": new VKCombo(VK.CAPITAL, VK.X),
    "Y": new VKCombo(VK.CAPITAL, VK.Y),
    "Z": new VKCombo(VK.CAPITAL, VK.Z),
    " ": VK.SPACE,
    "!": VK.OEM8,
    "0": VK["0"],
    "1": VK["1"],
    "2": VK["2"],
    "3": VK["3"],
    "4": VK["4"],
    "5": VK["5"],
    "6": VK["6"],
    "7": VK["7"],
    "8": VK["8"],
    "9": VK["9"]
});

/**
 * @func stringToVirtualKeys
 * @desc Transform a string to virtual keys
 * @param {!String} str string
 * @returns {Array<Number>}
 */
function stringToVirtualKeys(str) {
    const ret = [];
    for (const char of str) {
        if (Reflect.has(STR_VK, char)) {
            ret.push(STR_VK[char]);
        }
    }

    return ret;
}

/**
 * @func sendVirtualKeys
 * @desc Trigger one or many virtual keys
 * @param {Array<Number> | Number} vk virtual key(s)
 * @returns {void}
 */
function sendVirtualKeys(vk) {
    if (Array.isArray(vk)) {
        for (const code of vk) {
            if (code instanceof VKCombo) {
                doubleinput(code.first, code.second);
            }
            else if (VK_HEX.has(code)) {
                sendinput(code);
            }
        }
    }
    else if (vk instanceof VKCombo) {
        doubleinput(vk.first, vk.second);
    }
    else if (VK_HEX.has(vk)) {
        sendinput(vk);
    }
}

module.exports = {
    sendVirtualKeys,
    stringToVirtualKeys,
    VKCombo,
    CONSTANTS: Object.freeze({ VK })
};
