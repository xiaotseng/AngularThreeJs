import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as threeBase from './base';
import { Clock } from 'three';
@Component({
  selector: 'app-three-js-view',
  templateUrl: './three-js-view.component.html',
  styleUrls: ['./three-js-view.component.css']
})
export class ThreeJsViewComponent implements OnInit {
  @ViewChild('canvasFrame', { static: true }) canvasContainer: ElementRef;//取得dom节点
  constructor() { }

  ngOnInit(): void {
    threeBase.initRenderer(this.canvasContainer.nativeElement);//画布
    threeBase.initScene();//空场景
    threeBase.initCamera(this.canvasContainer.nativeElement);//创建个相机
    threeBase.SCENE.add(threeBase.CAMERA);//把相机放到场景里
    threeBase.initGrid();//放一个网格进来
    threeBase.addModel();
    const delta = new Clock();
    //渲染函数自己请求下一次执行渲染
    const rendererOut = () => {
      requestAnimationFrame(rendererOut);
      threeBase.RENDERER.render(threeBase.SCENE, threeBase.CAMERA);
      threeBase.CONTROLS.update();
      //进行遍历调用对象的update方法
      if (threeBase.MIXER) {
        threeBase.MIXER.map(r => {
          r.update(delta.getDelta());
        });
      }
    };
    //开始执行渲染
    rendererOut();

  }

}
