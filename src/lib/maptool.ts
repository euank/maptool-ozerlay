class MaptoolUtil {
  static displayTooltip(expression: string, tooltip: string) {
    const title = `« ${tooltip} = ${expression} »`;
    const output = `<span title="${escape(title)}" style="background-color: #eeeeee">` + 
    `[r: ${expression}]` + 
    `</span>`;
    window.evalMT('execmacro', 'all', output);
  }
}

export { MaptoolUtil };
