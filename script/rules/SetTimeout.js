rulesManager.registerRule({
    complianceLevel: 'A',
    id: "SetTimeout",
    comment: chrome.i18n.getMessage("rule_SetTimeout_DefaultComment"),
    detailComment: "",
  
    check: function (measures) {
      if (measures.pluginsNumber > 0) {
        this.complianceLevel = 'C';
        this.comment = chrome.i18n.getMessage("rule_SetTimeout_Comment", String(measures.setTimeoutCount));
      }
    }
  }, "frameMeasuresReceived");  