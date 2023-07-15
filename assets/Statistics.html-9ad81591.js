import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as s,d as a,w as t,e as l,b as e}from"./app-fb5286f1.js";const u={},r={class:"table-of-contents"},d=l(`<hr><h2 id="statistics-getplayerstatistics" tabindex="-1"><a class="header-anchor" href="#statistics-getplayerstatistics" aria-hidden="true">#</a> Statistics::GetPlayerStatistics</h2><h3 id="获取指定玩家的统计数据-json字符串" tabindex="-1"><a class="header-anchor" href="#获取指定玩家的统计数据-json字符串" aria-hidden="true">#</a> 获取指定玩家的统计数据（JSON字符串）</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>playerXuid</td><td>string</td></tr><tr><td colspan="2">返回值类型：string;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 获取指定玩家的统计数据（JSON字符串） 返回值类型：string */</span>
<span class="token keyword">const</span> Statistics_GetPlayerStatistics <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::GetPlayerStatistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Statistics_GetPlayerStatistics</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string</span>
<span class="token keyword">auto</span> Statistics_GetPlayerStatistics <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span><span class="token function">string</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> playerXuid<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::GetPlayerStatistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">Statistics_GetPlayerStatistics</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string</span>
<span class="token class-name"><span class="token keyword">var</span></span> Statistics_GetPlayerStatistics <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::GetPlayerStatistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token function">Statistics_GetPlayerStatistics</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 获取指定玩家的统计数据（JSON字符串） 返回值类型：string</span>
<span class="token keyword">Dim</span> Statistics_GetPlayerStatistics <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Func<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::GetPlayerStatistics&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">Dim</span> result <span class="token operator">=</span> Statistics_GetPlayerStatistics<span class="token punctuation">(</span>playerXuid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string</span>
<span class="token keyword">let</span> Statistics_GetPlayerStatistics <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::GetPlayerStatistics&quot;</span><span class="token punctuation">)</span>
playerXuid
	<span class="token operator">|&gt;</span>Statistics_GetPlayerStatistics<span class="token punctuation">.</span>Invoke
	<span class="token operator">|&gt;</span>ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="statistics-setplayerstatistics" tabindex="-1"><a class="header-anchor" href="#statistics-setplayerstatistics" aria-hidden="true">#</a> Statistics::SetPlayerStatistics</h2><h3 id="设定指定玩家的统计数据-json字符串" tabindex="-1"><a class="header-anchor" href="#设定指定玩家的统计数据-json字符串" aria-hidden="true">#</a> 设定指定玩家的统计数据（JSON字符串）</h3><table><tr><th>形参</th><th>类型</th></tr><tr><td>playerXuid</td><td>string</td></tr><tr><td>newData</td><td>string</td></tr><tr><td colspan="2">无返回值;</td></tr></table><ul><li>JavaScript</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 设定指定玩家的统计数据（JSON字符串） */</span>
<span class="token keyword">const</span> Statistics_SetPlayerStatistics <span class="token operator">=</span> ll<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::SetPlayerStatistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Statistics_SetPlayerStatistics</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C++</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 设定指定玩家的统计数据（JSON字符串）</span>
<span class="token keyword">auto</span> Statistics_SetPlayerStatistics <span class="token operator">=</span> RemoteCall<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">importAs</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> playerXuid<span class="token punctuation">,</span>std<span class="token double-colon punctuation">::</span>string <span class="token keyword">const</span><span class="token operator">&amp;</span> newData<span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::SetPlayerStatistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Statistics_SetPlayerStatistics</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 设定指定玩家的统计数据（JSON字符串）</span>
<span class="token class-name"><span class="token keyword">var</span></span> Statistics_SetPlayerStatistics <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ImportAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Action<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::SetPlayerStatistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Statistics_SetPlayerStatistics</span><span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Visual Basic .NET</li></ul><div class="language-vb line-numbers-mode" data-ext="vb"><pre class="language-vb"><code><span class="token comment">&#39; 设定指定玩家的统计数据（JSON字符串）</span>
<span class="token keyword">Dim</span> Statistics_SetPlayerStatistics <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token punctuation">(</span><span class="token keyword">Of</span> Action<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">,</span><span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::SetPlayerStatistics&quot;</span><span class="token punctuation">)</span>
Statistics_SetPlayerStatistics<span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>newData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>F#</li></ul><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code><span class="token comment">// 设定指定玩家的统计数据（JSON字符串）</span>
<span class="token keyword">let</span> Statistics_SetPlayerStatistics <span class="token operator">=</span> RemoteCallAPI<span class="token punctuation">.</span>ImportAs<span class="token operator">&lt;</span>Action<span class="token operator">&lt;</span>string<span class="token punctuation">,</span>string<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;PFLP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Statistics::SetPlayerStatistics&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span>playerXuid<span class="token punctuation">,</span>newData<span class="token punctuation">)</span>
	<span class="token operator">|&gt;</span>Statistics_SetPlayerStatistics<span class="token punctuation">.</span>Invoke
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function k(m,v){const n=o("router-link");return c(),i("div",null,[s("nav",r,[s("ul",null,[s("li",null,[a(n,{to:"#statistics-getplayerstatistics"},{default:t(()=>[e("Statistics::GetPlayerStatistics")]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#获取指定玩家的统计数据-json字符串"},{default:t(()=>[e("获取指定玩家的统计数据（JSON字符串）")]),_:1})])])]),s("li",null,[a(n,{to:"#statistics-setplayerstatistics"},{default:t(()=>[e("Statistics::SetPlayerStatistics")]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#设定指定玩家的统计数据-json字符串"},{default:t(()=>[e("设定指定玩家的统计数据（JSON字符串）")]),_:1})])])])])]),d])}const y=p(u,[["render",k],["__file","Statistics.html.vue"]]);export{y as default};
