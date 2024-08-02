import { ReactNode } from "react";
type InfoBoxProp = {
    mode:'hint'|'warning';
    severity?:'low'|'medium'|'high'|'undefine';
    children :ReactNode;
}

export default function InfoBox({mode,severity,children}:InfoBoxProp) {
    if(mode === 'hint'){
        return(
           <aside className="infobox infobox-hint">
            <p>
                {children}
            </p>

           </aside>
        );
    }
    return ( <aside className={`infobox infobox-warning warning--${severity}`}>
    <h2> warning  </h2>
    <p> {children} </p>
    </aside>);

}