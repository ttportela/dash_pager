# AUTO GENERATED FILE - DO NOT EDIT

export dccPager_pager

"""
    dccPager_pager(;kwargs...)

A Pager component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `maxValue` (Real; required): A label that will be printed when this component is rendered.
- `symbols` (Array of Strings; optional): The text symbols for the buttons.
- `value` (Array of Reals; optional): The value displayed in the input.
"""
function dccPager_pager(; kwargs...)
        available_props = Symbol[:id, :maxValue, :symbols, :value]
        wild_props = Symbol[]
        return Component("dccPager_pager", "Pager", "dash_pager", available_props, wild_props; kwargs...)
end

