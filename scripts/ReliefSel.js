const ReliefSel = extendContent(Floor, "ReliefSel",{
  load(){
    this.super$load();
        
    this.region = Core.atlas.find(this.name);
  },
    
  generateIcons: function(){
  return [
    Core.atlas.find(modName + "-edgu"),
    Core.atlas.find(modName + "-ReliefSel")
  ];},
    
});