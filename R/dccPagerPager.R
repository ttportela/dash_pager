# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dccPagerPager <- function(id=NULL, maxValue=NULL, minValue=NULL, style=NULL, symbols=NULL, value=NULL) {
    
    props <- list(id=id, maxValue=maxValue, minValue=minValue, style=style, symbols=symbols, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Pager',
        namespace = 'dash_pager',
        propNames = c('id', 'maxValue', 'minValue', 'style', 'symbols', 'value'),
        package = 'dashPager'
        )

    structure(component, class = c('dash_component', 'list'))
}
