# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashColor(Component):
    """A DashColor component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- Pickerwidth (string; default "200px")

- disableAlpha (boolean; optional)

- height (string; default "1.2em")

- presetColors (list of strings; optional)

- value (string; optional):
    The value displayed in the input.

- width (string; default "1.2em")"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_color'
    _type = 'DashColor'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, Pickerwidth=Component.UNDEFINED, disableAlpha=Component.UNDEFINED, presetColors=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'Pickerwidth', 'disableAlpha', 'height', 'presetColors', 'value', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'Pickerwidth', 'disableAlpha', 'height', 'presetColors', 'value', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashColor, self).__init__(**args)
