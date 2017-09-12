(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'moment', 'left-pad'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('moment'), require('left-pad'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.moment, global.leftPad);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _moment, _leftPad) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _moment2 = _interopRequireDefault(_moment);

  var _leftPad2 = _interopRequireDefault(_leftPad);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CountdownText = function (_Component) {
    _inherits(CountdownText, _Component);

    function CountdownText(props) {
      _classCallCheck(this, CountdownText);

      var _this = _possibleConstructorReturn(this, (CountdownText.__proto__ || Object.getPrototypeOf(CountdownText)).call(this));

      _this.state = {
        endDate: props.endDate || (0, _moment2.default)(),
        countdown: '00:00:00',
        isExpired: false
      };
      return _this;
    }

    _createClass(CountdownText, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        this.tick();

        this.interval = setInterval(function () {
          _this2.tick();
        }, 1e3);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.clearInterval(this.interval);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        this.setState({
          endDate: props.endDate
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            countdown = _state.countdown,
            isExpired = _state.isExpired;


        return _react2.default.createElement(
          'span',
          { className: 'CountdownText ' + (isExpired ? 'expired' : '') },
          countdown
        );
      }
    }, {
      key: 'tick',
      value: function tick() {
        var endDate = this.state.endDate;


        if (!endDate) {
          this.setState({
            countdown: '00:00:00'
          });
          return false;
        }

        var now = (0, _moment2.default)();
        var diff = endDate.diff(now, 'seconds');

        if (diff <= 0) {
          this.setState({
            countdown: '00:00:00',
            isExpired: true
          });
          return false;
        }

        var dur = _moment2.default.duration(diff, 'seconds');
        var countdown = (0, _leftPad2.default)(dur.hours(), 2, 0) + ':' + (0, _leftPad2.default)(dur.minutes(), 2, 0) + ':' + (0, _leftPad2.default)(dur.seconds(), 2, 0);

        this.setState({
          countdown: countdown,
          isExpired: false
        });
      }
    }]);

    return CountdownText;
  }(_react.Component);

  CountdownText.propTypes = {
    endDate: _propTypes2.default.object
  };

  exports.default = CountdownText;
});