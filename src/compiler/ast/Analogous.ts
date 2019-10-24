import ASTNode from "./Node";

class Analogous extends ASTNode {

	private range: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("analogous");
		this.range = this.tokenizer.getNextAndPop();
	}

	evaluate(): void {

	}

}

export default Analogous;