class MaptoolUtil {
  static displayTooltip(expression: string, tooltip: string) {
    const title = `« ${tooltip} = ${expression} »`;
    const output = `<span title="${this.escapeAttr(title)}" style="background-color: #eeeeee">` + 
    `[r: ${expression}]` + 
    `</span>`;
    window.evalMT('execmacro', 'all', output);
  }

  private static escapeAttr(s: string): string {
    return s.replace(/"/g, '&quot;')
  }
}

export { MaptoolUtil };
