"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertActions = AlertActions;
exports.AlertContent = AlertContent;
exports.AlertContext = void 0;
exports.AlertIcon = AlertIcon;
exports.AlertTitle = AlertTitle;
exports.default = Alert;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Alert.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Create context
 */
const AlertContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Alert
 * @component
 * @param {Object} params
 * @param {String} params.name
 * @param {Boolean} params.showClose
 * @param {Boolean} params.show
 * @param {Function} params.setShow
 */

exports.AlertContext = AlertContext;

function Alert(_ref) {
  let {
    name,
    showClose = true,
    show,
    setShow,
    children
  } = _ref;

  /**
   * References
   */
  const ref = (0, _react.useRef)(null);
  /**
   * Manage keyboard interaction
   * @param {SyntheticBaseEvent} e 
   */

  const handelKeydown = (0, _react.useCallback)(e => {
    if (e.key === 'Escape') return setShow(false);
  }, [setShow]); // Focus first element focusable

  (0, _react.useEffect)(() => {
    if (show) {
      ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0].focus();
      document.addEventListener('keydown', handelKeydown);
    } else {
      document.removeEventListener('keydown', handelKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handelKeydown);
    };
  }, [show, handelKeydown, ref]);
  /**
   * Render
   */

  return show && /*#__PURE__*/_react.default.createElement(AlertContext.Provider, {
    value: {
      show,
      setShow
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert",
    "aria-labelledby": "".concat(name, "-title"),
    role: "dialog",
    "aria-modal": "true",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-overlay",
    "aria-hidden": "true",
    onClick: () => setShow(!show)
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "alert-spacer",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-modal"
  }, children), showClose && /*#__PURE__*/_react.default.createElement("button", {
    className: "alert-modal-close",
    onClick: () => setShow(!show)
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
  })))))));
} // Props types


Alert.propTypes = {
  name: _propTypes.default.string.isRequired,
  showClose: _propTypes.default.bool,
  show: _propTypes.default.bool.isRequired,
  setShow: _propTypes.default.func.isRequired
};
/**
 * Show title wrapper
 * @component
 */

function AlertTitle(_ref2) {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("h3", {
    className: "alert-modal-title",
    id: "modal-title"
  }, children);
}
/**
 * Show content wrapper
 * @component
 */


function AlertContent(_ref3) {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-modal-content"
  }, children);
}
/**
 * Show icon
 * @component
 * @param {Object} params
 * @param {'primary'|'danger'|'success'|'warning'|'info'} params.color
 */


function AlertIcon(_ref4) {
  let {
    color = 'primary',
    IconComponent
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-modal-icon ".concat(color)
  }, /*#__PURE__*/_react.default.createElement(IconComponent, null));
} // Props types


AlertIcon.propTypes = {
  color: _propTypes.default.string
};
/**
 * Show actions wrapper
 * @component
 */

function AlertActions(_ref5) {
  let {
    children
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-modal-actions"
  }, children);
}