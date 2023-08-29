# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dColorDashColor <- function(id=NULL, Pickerwidth=NULL, disableAlpha=NULL, height=NULL, presetColors=NULL, value=NULL, width=NULL) {
    
    props <- list(id=id, Pickerwidth=Pickerwidth, disableAlpha=disableAlpha, height=height, presetColors=presetColors, value=value, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashColor',
        namespace = 'dash_color',
        propNames = c('id', 'Pickerwidth', 'disableAlpha', 'height', 'presetColors', 'value', 'width'),
        package = 'dashColor'
        )

    structure(component, class = c('dash_component', 'list'))
}
