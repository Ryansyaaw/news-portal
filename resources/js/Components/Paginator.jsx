import { Link } from "@inertiajs/react";
import React from "react";

const Paginator = ({ meta }) => {
    console.log(meta);
    const prev = meta.links[0].url;
    const current = meta.current_page;
    const next = meta.links[meta.links.length - 1].url;

    return (
        <div className="join">
            {prev &&<Link href={prev} className="join-item btn btn-outline btn-sm">«</Link>}

            <Link className="join-item btn btn-outline btn-sm">{ current }</Link>

            {next &&<Link href={next} className="join-item btn btn-outline btn-sm">»</Link>}
        </div>
    );
};

export default Paginator;
