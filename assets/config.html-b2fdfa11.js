import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as p,a as n,b as s,d as l,e as c}from"./app-fb5286f1.js";const i={},r=n("h2",{id:"基本配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本配置","aria-hidden":"true"},"#"),s(" 基本配置")],-1),u=n("h3",{id:"配置文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置文件","aria-hidden":"true"},"#"),s(" 配置文件")],-1),d=n("li",null,[s("配置文件使用"),n("code",null,"json"),s("格式")],-1),k=n("li",null,[s("配置文件位于"),n("code",null,"[服务端目录]\\plugins\\PixelFaramitaLuminousPolymerization\\config.json")],-1),v={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"Visual Studio Code",-1),b=c(`<h3 id="配置文件基本结构" tabindex="-1"><a class="header-anchor" href="#配置文件基本结构" aria-hidden="true">#</a> 配置文件基本结构</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;全局功能名称&quot;</span><span class="token operator">:</span> <span class="token string">&quot;全局功能值&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;模块名称&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ModuleEnabld&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>|<span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//开启或者关闭模块</span>
    <span class="token property">&quot;功能名称&quot;</span><span class="token operator">:</span><span class="token string">&quot;配置值&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件示例-部分" tabindex="-1"><a class="header-anchor" href="#配置文件示例-部分" aria-hidden="true">#</a> 配置文件示例(部分)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ConsoleLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;WebViewConfig_ConsoleCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pfc&quot;</span><span class="token punctuation">,</span> <span class="token comment">//打开服务端配置工具（依赖webview2网页）的命令</span>
  <span class="token property">&quot;Global_AsyncTeleportWaitTime&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">//全局传送等待时间</span>
  <span class="token property">&quot;WorldLimit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//世界边界模块的配置</span>
    <span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启</span>
    <span class="token property">&quot;Overworld&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;X1&quot;</span><span class="token operator">:</span> <span class="token number">-1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Z1&quot;</span><span class="token operator">:</span> <span class="token number">-1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;X2&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Z2&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Nether&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;The End&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TeleportToSpawnpointIfError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;EnableVisualize&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//边界可视化粒子</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function q(h,_){const a=o("ExternalLinkIcon");return t(),p("div",null,[r,u,n("ul",null,[d,k,n("li",null,[s("请使用专业的编辑工具编辑（而不是祭祀本），如"),n("a",v,[m,l(a)])])]),b])}const y=e(i,[["render",q],["__file","config.html.vue"]]);export{y as default};
