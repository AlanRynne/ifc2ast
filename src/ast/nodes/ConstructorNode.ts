import { ASTType, ASTNode, ASTLocation } from "../index";

export class ConstructorNode extends ASTNode {
    name: string;
    args: Array<ASTNode>;

    /**
     * Constructs a new ASTNode representing a constructor function
     * @param name Name node of the constructor
     * @param loc Location range of the constructor
     * @param args Argument nodes of the constructor
     */
    constructor(name: string, args: Array<ASTNode>, loc: ASTLocation) {
        super(ASTType.Constructor, loc);
        this.name = name;
        this.args = args;
    }
}
