(()=>{"use strict";const t=(t,...s)=>{const c=t.map(((t,c)=>`${t}${s[c]||""}`)).join(""),[o,r,e]=c.split("||KREMLING||");return o&&r&&e?{id:o,namespace:r,styles:e}:c};t`k4||KREMLING||sc||KREMLING||[sc="k4"] .TESTING-THINGS,[sc="k4"].TESTING-THINGS {
  background-color: red;
}

[sc="k4"] .TESTING-AND-OTHER-THINGS,[sc="k4"].TESTING-AND-OTHER-THINGS {
  background-color: red;
}`,t`k2||KREMLING||sc||KREMLING||[sc="k2"] .test,[sc="k2"].test {
  text-align: right;
  background-color: red;
  other-things: red;
}`,t`k3||KREMLING||sc||KREMLING||[sc="k3"] .test,[sc="k3"].test {
  text-align: right;
  background-color: red;
  other-things: red;
}`,t`k0||KREMLING||sc||KREMLING||[sc="k0"] .test,[sc="k0"].test {
  text-align: right;
  background-color: ${"red"};
}
[sc="k0"] .test .tester,[sc="k0"].test .tester {
  background-color: blue;
}`;const s=t`k1||KREMLING||sc||KREMLING||[sc="k1"] .test,[sc="k1"].test {
  text-align: right;
  background-color: ${"red"};
  animation: my-animation;
}

@keyframes my-animation {
  from {
    background-color: #ff7a59;
    width: 300px;
    top: 10px;
  }
  to {
    background-color: #33475b;
    width: 50px;
    top: 100px;
  }
}`;console.log(s)})();