import React from "react";
import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Lorem ipsum dolor sit amet
					</Feature.Title>
					<Feature.SubTitle>
						hasellus finibus sapien neque, nec vestibulum augue molestie in. 
					</Feature.SubTitle>
					<OptForm>
						<OptForm.Input placeholder="Email address"/>
						<OptForm.Button> Try It Now </OptForm.Button>
						<OptForm.Break />
						<OptForm.Text>Ready to book? Enter your email to create or restart your membership.</OptForm.Text>
					</OptForm>
				</Feature>
			</HeaderContainer>

			<JumbotronContainer /> 
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}