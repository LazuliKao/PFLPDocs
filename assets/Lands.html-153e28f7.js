const l=JSON.parse('{"key":"v-66b01a4e","path":"/api/remotecall/Lands.html","title":"Lands","lang":"zh-CN","frontmatter":{"title":"Lands","description":"[[toc]] Lands::CheckCubeHasLand 检查指定立方体区域(float)是否有领地 形参类型 x1float y1float z1float x2float y2float z2float dimensionIdint 返回值类型：bool; JavaScript - C++ - C# - Visual Basic .NET -...","head":[["meta",{"property":"og:url","content":"https://docs.mcpf.live/PFLPDocs/api/remotecall/Lands.html"}],["meta",{"property":"og:site_name","content":"Luminous Polymerization 文档"}],["meta",{"property":"og:title","content":"Lands"}],["meta",{"property":"og:description","content":"[[toc]] Lands::CheckCubeHasLand 检查指定立方体区域(float)是否有领地 形参类型 x1float y1float z1float x2float y2float z2float dimensionIdint 返回值类型：bool; JavaScript - C++ - C# - Visual Basic .NET -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T08:23:57.000Z"}],["meta",{"property":"article:author","content":"LazuliKao"}],["meta",{"property":"article:modified_time","content":"2023-06-10T08:23:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lands\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-10T08:23:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LazuliKao\\",\\"url\\":\\"https://www.mcpf.live\\"}]}"]]},"headers":[{"level":2,"title":"Lands::CheckCubeHasLand","slug":"lands-checkcubehasland","link":"#lands-checkcubehasland","children":[{"level":3,"title":"检查指定立方体区域(float)是否有领地","slug":"检查指定立方体区域-float-是否有领地","link":"#检查指定立方体区域-float-是否有领地","children":[]}]},{"level":2,"title":"Lands::CheckCubeHasLandInt","slug":"lands-checkcubehaslandint","link":"#lands-checkcubehaslandint","children":[{"level":3,"title":"检查指定立方体区域(int)是否有领地","slug":"检查指定立方体区域-int-是否有领地","link":"#检查指定立方体区域-int-是否有领地","children":[]}]},{"level":2,"title":"Lands::CheckPosHasLand","slug":"lands-checkposhasland","link":"#lands-checkposhasland","children":[{"level":3,"title":"检查指定坐标(float)是否有领地","slug":"检查指定坐标-float-是否有领地","link":"#检查指定坐标-float-是否有领地","children":[]}]},{"level":2,"title":"Lands::CheckPosHasLandInt","slug":"lands-checkposhaslandint","link":"#lands-checkposhaslandint","children":[{"level":3,"title":"检查指定坐标(int)是否有领地","slug":"检查指定坐标-int-是否有领地","link":"#检查指定坐标-int-是否有领地","children":[]}]},{"level":2,"title":"Lands::GetLandByCube","slug":"lands-getlandbycube","link":"#lands-getlandbycube","children":[{"level":3,"title":"获取立方体区域(float)领地信息（返回JSON字符串）","slug":"获取立方体区域-float-领地信息-返回json字符串","link":"#获取立方体区域-float-领地信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandByCubeInt","slug":"lands-getlandbycubeint","link":"#lands-getlandbycubeint","children":[{"level":3,"title":"获取立方体区域(int)领地信息（返回JSON字符串）","slug":"获取立方体区域-int-领地信息-返回json字符串","link":"#获取立方体区域-int-领地信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandByPos","slug":"lands-getlandbypos","link":"#lands-getlandbypos","children":[{"level":3,"title":"获取指定坐标(float)领地信息（返回JSON字符串）","slug":"获取指定坐标-float-领地信息-返回json字符串","link":"#获取指定坐标-float-领地信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandByPosInt","slug":"lands-getlandbyposint","link":"#lands-getlandbyposint","children":[{"level":3,"title":"获取指定坐标(int)领地信息（返回JSON字符串）","slug":"获取指定坐标-int-领地信息-返回json字符串","link":"#获取指定坐标-int-领地信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandInfoByCube","slug":"lands-getlandinfobycube","link":"#lands-getlandinfobycube","children":[{"level":3,"title":"获取立方体区域(float)领地数据源详细信息（返回JSON字符串）","slug":"获取立方体区域-float-领地数据源详细信息-返回json字符串","link":"#获取立方体区域-float-领地数据源详细信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandInfoByCubeInt","slug":"lands-getlandinfobycubeint","link":"#lands-getlandinfobycubeint","children":[{"level":3,"title":"获取立方体区域(int)领地数据源详细信息（返回JSON字符串）","slug":"获取立方体区域-int-领地数据源详细信息-返回json字符串","link":"#获取立方体区域-int-领地数据源详细信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandInfoByPos","slug":"lands-getlandinfobypos","link":"#lands-getlandinfobypos","children":[{"level":3,"title":"获取指定坐标(float)领地数据源详细信息（返回JSON字符串）","slug":"获取指定坐标-float-领地数据源详细信息-返回json字符串","link":"#获取指定坐标-float-领地数据源详细信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::GetLandInfoByPosInt","slug":"lands-getlandinfobyposint","link":"#lands-getlandinfobyposint","children":[{"level":3,"title":"获取指定坐标(int)领地数据源详细信息（返回JSON字符串）","slug":"获取指定坐标-int-领地数据源详细信息-返回json字符串","link":"#获取指定坐标-int-领地数据源详细信息-返回json字符串","children":[]}]},{"level":2,"title":"Lands::SetLandInfoByPos","slug":"lands-setlandinfobypos","link":"#lands-setlandinfobypos","children":[{"level":3,"title":"设置指定坐标(float)领地数据源详细信息（传入JSON字符串）","slug":"设置指定坐标-float-领地数据源详细信息-传入json字符串","link":"#设置指定坐标-float-领地数据源详细信息-传入json字符串","children":[]}]},{"level":2,"title":"Lands::SetLandInfoByPosInt","slug":"lands-setlandinfobyposint","link":"#lands-setlandinfobyposint","children":[{"level":3,"title":"设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串）","slug":"设置或修改指定坐标-int-领地数据源详细信息-传入json字符串","link":"#设置或修改指定坐标-int-领地数据源详细信息-传入json字符串","children":[]}]},{"level":2,"title":"Lands::CreateLand2D","slug":"lands-createland2d","link":"#lands-createland2d","children":[{"level":3,"title":"新建领地","slug":"新建领地","link":"#新建领地","children":[]}]},{"level":2,"title":"Lands::CreateLand3D","slug":"lands-createland3d","link":"#lands-createland3d","children":[{"level":3,"title":"新建领地","slug":"新建领地-1","link":"#新建领地-1","children":[]}]},{"level":2,"title":"Lands::DeleteLandByPos","slug":"lands-deletelandbypos","link":"#lands-deletelandbypos","children":[{"level":3,"title":"删除指定坐标(float)的领地","slug":"删除指定坐标-float-的领地","link":"#删除指定坐标-float-的领地","children":[]}]},{"level":2,"title":"Lands::DeleteLandByPosInt","slug":"lands-deletelandbyposint","link":"#lands-deletelandbyposint","children":[{"level":3,"title":"删除指定坐标(int)的领地","slug":"删除指定坐标-int-的领地","link":"#删除指定坐标-int-的领地","children":[]}]},{"level":2,"title":"Lands::GetLandPermissionByPos","slug":"lands-getlandpermissionbypos","link":"#lands-getlandpermissionbypos","children":[{"level":3,"title":"获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）","slug":"获取指定坐标-float-领地权限-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","link":"#获取指定坐标-float-领地权限-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","children":[]}]},{"level":2,"title":"Lands::GetLandPermissionByPosInt","slug":"lands-getlandpermissionbyposint","link":"#lands-getlandpermissionbyposint","children":[{"level":3,"title":"获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）","slug":"获取指定坐标-int-领地权限-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","link":"#获取指定坐标-int-领地权限-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","children":[]}]},{"level":2,"title":"Lands::CheckLandPermissionByPos","slug":"lands-checklandpermissionbypos","link":"#lands-checklandpermissionbypos","children":[{"level":3,"title":"检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）","slug":"检查指定坐标-float-领地是否有指定权限-permissionid参考getlandpermissionbypos返回的key-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","link":"#检查指定坐标-float-领地是否有指定权限-permissionid参考getlandpermissionbypos返回的key-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","children":[]}]},{"level":2,"title":"Lands::CheckLandPermissionByPosInt","slug":"lands-checklandpermissionbyposint","link":"#lands-checklandpermissionbyposint","children":[{"level":3,"title":"检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）","slug":"检查指定坐标-int-领地是否有指定权限-permissionid参考getlandpermissionbypos返回的key-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","link":"#检查指定坐标-int-领地是否有指定权限-permissionid参考getlandpermissionbypos返回的key-返回json字符串字典-key-boolean-可指定玩家否则playerxuid填写空字符串","children":[]}]},{"level":2,"title":"Lands::CheckPlayerIsLandOwnerByPos","slug":"lands-checkplayerislandownerbypos","link":"#lands-checkplayerislandownerbypos","children":[{"level":3,"title":"检查玩家是否是指定坐标(float)领地的主人","slug":"检查玩家是否是指定坐标-float-领地的主人","link":"#检查玩家是否是指定坐标-float-领地的主人","children":[]}]},{"level":2,"title":"Lands::CheckPlayerIsLandOwnerByPosInt","slug":"lands-checkplayerislandownerbyposint","link":"#lands-checkplayerislandownerbyposint","children":[{"level":3,"title":"检查玩家是否是指定坐标(int)领地的主人","slug":"检查玩家是否是指定坐标-int-领地的主人","link":"#检查玩家是否是指定坐标-int-领地的主人","children":[]}]},{"level":2,"title":"Lands::CheckIsLandSharedToPlayerByPos","slug":"lands-checkislandsharedtoplayerbypos","link":"#lands-checkislandsharedtoplayerbypos","children":[{"level":3,"title":"检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos）","slug":"检查指定坐标-float-领地是否共享给指定玩家-检查具体权限请使用checklandpermissionbypos","link":"#检查指定坐标-float-领地是否共享给指定玩家-检查具体权限请使用checklandpermissionbypos","children":[]}]},{"level":2,"title":"Lands::CheckIsLandSharedToPlayerByPosInt","slug":"lands-checkislandsharedtoplayerbyposint","link":"#lands-checkislandsharedtoplayerbyposint","children":[{"level":3,"title":"检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos）","slug":"检查指定坐标-int-领地是否共享给指定玩家-检查具体权限请使用checklandpermissionbypos","link":"#检查指定坐标-int-领地是否共享给指定玩家-检查具体权限请使用checklandpermissionbypos","children":[]}]},{"level":2,"title":"Lands::CheckPlayerHasCreateChestPermission","slug":"lands-checkplayerhascreatechestpermission","link":"#lands-checkplayerhascreatechestpermission","children":[{"level":3,"title":"(请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件)","slug":"请使用getlandpermissionbypos-检查玩家在指定坐标-int-领地是否有开箱-方块交互-、放置、破坏的权限-主要用于锁箱插件","link":"#请使用getlandpermissionbypos-检查玩家在指定坐标-int-领地是否有开箱-方块交互-、放置、破坏的权限-主要用于锁箱插件","children":[]}]},{"level":2,"title":"Lands::CheckPlayerHasOpenChestPermission","slug":"lands-checkplayerhasopenchestpermission","link":"#lands-checkplayerhasopenchestpermission","children":[{"level":3,"title":"(请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件)","slug":"请使用getlandpermissionbypos-检查玩家在指定坐标-int-领地是否有使用箱子的权限-主要用于锁箱插件","link":"#请使用getlandpermissionbypos-检查玩家在指定坐标-int-领地是否有使用箱子的权限-主要用于锁箱插件","children":[]}]},{"level":2,"title":"Lands::GetPlayerAllPermissionGroupId","slug":"lands-getplayerallpermissiongroupid","link":"#lands-getplayerallpermissiongroupid","children":[{"level":3,"title":"取玩家所有权限组ID（返回[\\"id1\\",\\"id2\\"...]字符串）","slug":"取玩家所有权限组id-返回-id1-id2-字符串","link":"#取玩家所有权限组id-返回-id1-id2-字符串","children":[]}]},{"level":2,"title":"Lands::GetPlayerPermissionGroup","slug":"lands-getplayerpermissiongroup","link":"#lands-getplayerpermissiongroup","children":[{"level":3,"title":"取玩家权限组内容(指定ID)（返回JSON对象字符串）","slug":"取玩家权限组内容-指定id-返回json对象字符串","link":"#取玩家权限组内容-指定id-返回json对象字符串","children":[]}]},{"level":2,"title":"Lands::DeletePlayerPermissionGroup","slug":"lands-deleteplayerpermissiongroup","link":"#lands-deleteplayerpermissiongroup","children":[{"level":3,"title":"删玩家权限组(指定ID)","slug":"删玩家权限组-指定id","link":"#删玩家权限组-指定id","children":[]}]},{"level":2,"title":"Lands::EditPlayerPermissionGroup","slug":"lands-editplayerpermissiongroup","link":"#lands-editplayerpermissiongroup","children":[{"level":3,"title":"修改家权限组内容(指定ID)","slug":"修改家权限组内容-指定id","link":"#修改家权限组内容-指定id","children":[]}]},{"level":2,"title":"Lands::AddPlayerPermissionGroup","slug":"lands-addplayerpermissiongroup","link":"#lands-addplayerpermissiongroup","children":[{"level":3,"title":"添加权限组","slug":"添加权限组","link":"#添加权限组","children":[]}]},{"level":2,"title":"Lands::GetLandsOwnedByPlayer","slug":"lands-getlandsownedbyplayer","link":"#lands-getlandsownedbyplayer","children":[{"level":3,"title":"取玩家拥有的领地","slug":"取玩家拥有的领地","link":"#取玩家拥有的领地","children":[]}]},{"level":2,"title":"Lands::GetLandsSharedToPlayer","slug":"lands-getlandssharedtoplayer","link":"#lands-getlandssharedtoplayer","children":[{"level":3,"title":"取共享给玩家的领地","slug":"取共享给玩家的领地","link":"#取共享给玩家的领地","children":[]}]}],"git":{"createdTime":1686198624000,"updatedTime":1686385437000,"contributors":[{"name":"LazuliKao","email":"lazulikao@nbt.edu.cn","commits":5}]},"readingTime":{"minutes":39.23,"words":11770},"filePathRelative":"api/remotecall/Lands.md","localizedDate":"2023年6月8日","autoDesc":true,"excerpt":""}');export{l as data};