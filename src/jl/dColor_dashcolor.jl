# AUTO GENERATED FILE - DO NOT EDIT

export dColor_dashcolor

"""
    dColor_dashcolor(;kwargs...)

A DashColor component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `Pickerwidth` (String; optional)
- `disableAlpha` (Bool; optional)
- `height` (String; optional)
- `presetColors` (Array of Strings; optional)
- `value` (String; optional): The value displayed in the input.
- `width` (String; optional)
"""
function dColor_dashcolor(; kwargs...)
        available_props = Symbol[:id, :Pickerwidth, :disableAlpha, :height, :presetColors, :value, :width]
        wild_props = Symbol[]
        return Component("dColor_dashcolor", "DashColor", "dash_color", available_props, wild_props; kwargs...)
end

