import { ASTType, ASTNode, ASTLocation } from "../index";
import { IVisitor } from "../visitor/IVisitor";

export class VariableNode extends ASTNode {

    id: number

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(id: number, location: ASTLocation) {
        super(ASTType.Variable, location);
        this.id = id
    }

    public accept(v: IVisitor) {
        v.visit(this)
    }
}

