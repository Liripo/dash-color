import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import none from 'ramda/src/none';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            value: this.colorToRgba(props.value),
            width: props.width,
            height: props.height
        };
    }
    colorToRgba = (color) => {
        if (/^rgb/gi.test(color)) {
            let [red, green, blue, alpha] = color.match(/\d+(\.\d+)?/g).map(Number);
            alpha = alpha || 1;
            return {r: red, g: green, b: blue, a: alpha};
        } else {
            // hsl 暂不支持
            // hex to rgba
            color = this.hextoRgba(color);
            return color;
        }
    }

    // 点击按钮展示
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    rgbatoString = (rgb) => {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    };
    hextoRgba = (hex) => {
        const rgba = {
            r: parseInt('0x' + hex.slice(1, 3)),
            g: parseInt('0x' + hex.slice(3, 5)),
            b: parseInt('0x' + hex.slice(5, 7)),
            a: 1
        }
        return rgba;
    };

    handleChangeComplete = (color) => {
        const rgb = color.rgb;
        this.setState({ value: rgb });
        this.props.setProps({value: this.rgbatoString(rgb)});
    };

    render() {
        const {id, disableAlpha} = this.props;
        const styles = {
            button: {
                width: this.state.width,
                height: this.state.height,
                backgroundColor: this.rgbatoString(this.state.value),
                borderRadius: "0.15em",
                cursor: "pointer",
                backgroundSize: 0,
                transition: "all 0.3s"
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        }

        return (
            <div id = {id}>
                <div type = "button" style={styles.button} onClick={ this.handleClick }></div>
                { this.state.displayColorPicker ?
                    <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ this.handleClose }></div>
                        <SketchPicker
                            color = {this.state.value}
                            width = {this.props.Pickerwidth}
                            onChange ={ this.handleChangeComplete }
                            disableAlpha = {disableAlpha || false}
                            presetColors = {this.props.presetColors}
                        />
                    </div>
                    : null
                }
            </div>
        );
    }
}

// 组件默认值
// 默认空的预设颜色？
// bootstrap中宽度
DashColor.defaultProps = {
    width: "1.2em",
    height: "1.2em",
    presetColors: [],
    Pickerwidth: "220px"
};

// 组件参数校验规则
DashColor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    width: PropTypes.string,
    height: PropTypes.string,
    Pickerwidth: PropTypes.string,
    disableAlpha: PropTypes.bool,
    presetColors: PropTypes.arrayOf(PropTypes.string),

    /** 
    displayColorPicker: PropTypes.,*/

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
