[h: h=json.contains(macro.args, "h")]
[h,if(h),code: {
	[h: eval(json.get(macro.args, "h"))]
};{}]
[h: t=json.contains(macro.args, "t")]
[t,if(t),code: {
	[h: expr=json.get(macro.args, "t")]
	[t: eval(expr)]
};{}]
[h: r=json.contains(macro.args, "r")]
[r,if(r),code: {
	[h: expr=json.get(macro.args, "r")]
	[r: eval(expr)]
};{}]
[h: e=json.contains(macro.args, "e")]
[e,if(e),code: {
	[h: expr=json.get(macro.args, "e")]
	[e: eval(expr)]
};{}]

[h: execmacro=json.contains(macro.args, "execmacro")]
[r,if(execmacro),code: {
  [h: idx = createMacro("tmpEvalMacro", json.get(macro.args, "execmacro"))]
  [r, macro("tmpEvalMacro@TOKEN"): ""]
  [h: removeMacro(idx)]
};{}]
