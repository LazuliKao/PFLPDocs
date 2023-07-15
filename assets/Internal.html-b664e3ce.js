import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,d as a,w as s,e as r,b as e}from"./app-fb5286f1.js";const p={},u={class:"table-of-contents"},d=r(`<hr><h2 id="internal-cheatpunish" tabindex="-1"><a class="header-anchor" href="#internal-cheatpunish" aria-hidden="true">#</a> Internal::CheatPunish</h2><h3 id="作弊反馈-llanticheat用" tabindex="-1"><a class="header-anchor" href="#作弊反馈-llanticheat用" aria-hidden="true">#</a> 作弊反馈（LLAntiCheat用）</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>PunishLevel</td><td>int</td></tr><tr><td>PunishReason</td><td>int</td></tr><tr><td>playerXuid</td><td>Player</td></tr><tr><td>CheatCount</td><td>int</td></tr><tr><td colspan="2">返回值类型：bool;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 作弊反馈（LLAntiCheat用） 返回值类型：bool */</span>
<span class="token keyword">const</span> Internal_CheatPunish <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Internal::CheatPunish&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Internal_CheatPunish</span><span class="token punctuation">(</span>PunishLevel<span class="token punctuation">,</span>PunishReason<span class="token punctuation">,</span>playerXuid<span class="token punctuation">,</span>CheatCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function h(k,_){const t=o("router-link");return i(),c("div",null,[n("nav",u,[n("ul",null,[n("li",null,[a(t,{to:"#internal-cheatpunish"},{default:s(()=>[e("Internal::CheatPunish")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#作弊反馈-llanticheat用"},{default:s(()=>[e("作弊反馈（LLAntiCheat用）")]),_:1})])])])])]),d])}const f=l(p,[["render",h],["__file","Internal.html.vue"]]);export{f as default};