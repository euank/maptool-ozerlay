[h: h=json.contains(macro.args, "h")]
[r,if(h),code: {
	[h: eval(json.get(macro.args, "h"))]
};{}]
[h: t=json.contains(macro.args, "t")]
[r,if(t),code: {
	[h: expr=json.get(macro.args, "t")]
	[t: eval(expr)]
};{}]
[h: r=json.contains(macro.args, "r")]
[r,if(r),code: {
	[h: expr=json.get(macro.args, "r")]
	[r: eval(expr)]
};{}]
[h: e=json.contains(macro.args, "e")]
[r,if(e),code: {
	[h: expr=json.get(macro.args, "e")]
	[e: eval(expr)]
};{}]

[h: execmacro=json.contains(macro.args, "execmacro")]
[h,if(execmacro),code: {
  [h: idx = createMacro("tmpEvalMacro", json.get(macro.args, "execmacro"))]
  [r, macro("tmpEvalMacro@TOKEN"): ""]
  [h: removeMacro(idx)]
};{}]
