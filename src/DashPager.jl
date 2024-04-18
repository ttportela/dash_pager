
module DashPager
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.1.3"

include("jl/dccPager_pager.jl")
include("jl/dccPager_pager.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_pager",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-Pager.js",
    external_url = "https://unpkg.com/dash_pager@0.1.3/dash_pager/async-Pager.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Pager.js.map",
    external_url = "https://unpkg.com/dash_pager@0.1.3/dash_pager/async-Pager.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_pager.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_pager.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
