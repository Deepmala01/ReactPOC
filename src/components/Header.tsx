import { type ReactNode } from "react";

type Headerprop = {
    image: { src: string; alt: string; };
    children: ReactNode;
};

export default function Header ({image,children}:Headerprop){
    return (
	<header>
		<img {...image}/>
		{children}
    </header>
	);
}