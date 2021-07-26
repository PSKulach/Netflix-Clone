import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact Us</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link href="#">FAQ</Footer.Link>
					<Footer.Link href="#">Corporate Information</Footer.Link>
					<Footer.Link href="#">Contact</Footer.Link>
					<Footer.Link href="#">Book</Footer.Link>
					<Footer.Link href="#">Gallery</Footer.Link>
					<Footer.Link href="#">Relations</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Help Centre</Footer.Link>
					<Footer.Link href="#">Corporate Information</Footer.Link>
					<Footer.Link href="#">Contact</Footer.Link>
					<Footer.Link href="#">Book</Footer.Link>
					<Footer.Link href="#">Gallery</Footer.Link>
					<Footer.Link href="#">Relations</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Help Centre</Footer.Link>
					<Footer.Link href="#">Corporate Information</Footer.Link>
					<Footer.Link href="#">Contact</Footer.Link>
					<Footer.Link href="#">Book</Footer.Link>
					<Footer.Link href="#">Gallery</Footer.Link>
					<Footer.Link href="#">Relations</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Text>Pokoje Gościnne Żonkil</Footer.Text>
		</Footer>
	);
}