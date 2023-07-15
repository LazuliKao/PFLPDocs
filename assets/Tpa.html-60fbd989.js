import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,d as a,w as t,e as i,b as e}from"./app-fb5286f1.js";const u={},r={class:"table-of-contents"},d=i(`<hr><h2 id="tpa-gettemp" tabindex="-1"><a class="header-anchor" href="#tpa-gettemp" aria-hidden="true">#</a> Tpa::GetTemp</h2><h3 id="获取指定玩家的tpa缓存-json字符串" tabindex="-1"><a class="header-anchor" href="#获取指定玩家的tpa缓存-json字符串" aria-hidden="true">#</a> 获取指定玩家的Tpa缓存（JSON字符串）</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>playerXuid</td><td>string</td></tr><tr><td colspan="2">返回值类型：string;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string */</span>
<span class="token keyword">const</span> Tpa_GetTemp <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tpa::GetTemp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Tpa_GetTemp</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string</span>
<span class="token keyword">auto</span> Tpa_GetTemp <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span><span class="token function">string</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> playerXuid<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tpa::GetTemp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">Tpa_GetTemp</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string</span>
<span class="token class-name"><span class="token keyword">var</span></span> Tpa_GetTemp <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tpa::GetTemp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token function">Tpa_GetTemp</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string</span>
<span class="token keyword">Dim</span> Tpa_GetTemp <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Func<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tpa::GetTemp&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> result <span class="token operator">=</span> Tpa_GetTemp<span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string</span>
<span class="token keyword">let</span> Tpa_GetTemp <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tpa::GetTemp&quot;</span><span class="token punctuation">)</span>
playerXuid
	<span class="token operator">|&gt;</span>Tpa_GetTemp<span class="token punctuation">.</span>Invoke
	<span class="token operator">|&gt;</span>ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function k(m,v){const s=o("router-link");return c(),l("div",null,[n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#tpa-gettemp"},{default:t(()=>[e("Tpa::GetTemp")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#获取指定玩家的tpa缓存-json字符串"},{default:t(()=>[e("获取指定玩家的Tpa缓存（JSON字符串）")]),_:1})])])])])]),d])}const b=p(u,[["render",k],["__file","Tpa.html.vue"]]);export{b as default};