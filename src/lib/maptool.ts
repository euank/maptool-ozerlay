export class MaptoolUtil {
  static exec(expr: string) {
    window.evalMT('execmacro', 'all', expr);
  }
}

export class ExpressionBuilder {
  constructor(public expr = '') {}

  withTooltip(expression: string, tooltip: string): ExpressionBuilder {
    const title = `« ${tooltip} = ${expression} »`;
    const output = `<span title="${ExpressionBuilder.escapeAttr(title)}" style="background-color: #eeeeee">` + 
    `[r: ${expression}]` + 
    `</span>` + "\n";

    this.expr += output;
    return this;
  }

  withText(s: string) {
    this.expr += s + "\n";
    return this
  }

  build(): string {
    return this.expr
  }

  private static escapeAttr(s: string): string {
    return s.replace(/"/g, '&quot;')
  }

}
