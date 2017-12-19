'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moveItem = exports.resetItem = exports.setItem = exports.removeItem = exports.addItem = undefined;

var _Editor = require('../Types/Editor');

// Action Creators
var addItem = exports.addItem = function addItem(type, index, parentId) {
    return {
        type: _Editor.ADD_ITEM,
        payload: {
            type: type,
            index: index,
            parentId: parentId
        }
    };
};

var removeItem = exports.removeItem = function removeItem(id) {
    return {
        type: _Editor.REMOVE_ITEM,
        payload: {
            id: id
        }
    };
};

var setItem = exports.setItem = function setItem(id, value) {
    return {
        type: _Editor.SET_ITEM,
        payload: {
            id: id,
            value: value
        }
    };
};

var resetItem = exports.resetItem = function resetItem(id, type) {
    return {
        type: _Editor.RESET_ITEM,
        payload: {
            id: id,
            type: type
        }
    };
};

var moveItem = exports.moveItem = function moveItem(oldIndex, newIndex) {
    return {
        type: _Editor.MOVE_ITEM,
        payload: {
            oldIndex: oldIndex,
            newIndex: newIndex
        }
    };
};