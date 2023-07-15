import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-fb5286f1.js";const o={},p=t(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><ul><li><code>config.json</code> 全局配置文件</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Menu&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ModuleEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启</span>
    <span class="token property">&quot;SaveFormattedJson&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">//自动保存格式化的json，会导致菜单中的注释消失</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>menu.json</code>具体配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">//key : 菜单ID</span>
  <span class="token property">&quot;MainMenu&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//绑定物品，如钟，这样玩家使用钟右键即可打开菜单</span>
    <span class="token property">&quot;BindItem&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clock&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//绑定命令，如/menu，这样玩家输入/menu即可打开菜单</span>
    <span class="token property">&quot;RegsterCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//命令描述</span>
    <span class="token property">&quot;RegsterCommandDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;§3§lGUI菜单&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单标题</span>
    <span class="token property">&quot;Title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;§7[§6Mc§3play§7]§8--§eGUI菜单&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单内容</span>
    <span class="token property">&quot;Content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;§4§l内容&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//是否需要OP权限</span>
    <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//按钮列表</span>
    <span class="token property">&quot;Buttons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//按钮文本</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§4§l传送菜单§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§c进行各种传送§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮需要OP权限</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮需要的金币数量</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮图标</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/world_glyph_color_2x&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//按钮点击事件，可触发多个回调</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">//按钮点击事件类型</span>
            <span class="token comment">//可选：</span>
            <span class="token comment">//      RunCmd - 在控制台执行命令</span>
            <span class="token comment">//      RunCmdAs - 以玩家身份执行命令</span>
            <span class="token comment">//      RunCmdAsOP - 以玩家OP身份执行命令（类比临时提权）</span>
            <span class="token comment">//      ExecuteCmd - 执行命令，以execute as的方式以玩家身份执行，基本类似RunCmdAsOP</span>
            <span class="token comment">//      OpenForm - 打开表单</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OpenForm&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tpmenu&quot;</span><span class="token punctuation">,</span> <span class="token comment">//菜单ID</span>
            <span class="token comment">//点击关闭后是否返回上一级菜单</span>
            <span class="token property">&quot;BackOnClose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§3§l任务§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§b奠定发展§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/icon_book_writable&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RunCmdAs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/task&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§2§l领地§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§a保护家园§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/absorption_effect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RunCmdAs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/land&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Text&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;►§6§l系统商店§r◄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;§7[§g赚取金币§7]&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RequireOP&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;CostMoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ImageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/ui/village_hero_effect&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RunCmdAs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/shop&quot;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[p];function l(c,u){return s(),a("div",null,e)}const k=n(o,[["render",l],["__file","menu.html.vue"]]);export{k as default};
