---
layout: "../../layouts/BlogPost.astro"
title: "Unity: Input Systemについて"
description: "Unity：新しいInputSystemまだ慣れてないのでもっと使いこなす"
pubDate: "June 14 2023"
tags: [Tech, Unity, memo]
---

## まずは入れよう

`Package Manager`

![ストア](/assets/unity_inputSystem.png)

### Player

- `Active Input Handling`部分がBOTHまたはInputSystemになっているか確認

![player](/assets/UnityPlayerWindow.png)

### Script

- InputSystemをいれて
- SerializeFieldをつくる

``` c#
using UnityEngine.InputSystem;

    [SerializeField] InputAction movement;
```

### 例えば

矢印キーを登録
![SerializeFieldから](/assets/UnityInputSystem2Dvector.png)


### 最終

- OnEnable, OnDisableする
- ReadValueで読む

``` c#
    private void OnEnable()
    {
        movement.Enable();
    }

    private void OnDisable()
    {
        movement.Disable();
    }

    // Update is called once per frame
    void Update()
    {
        float horizontalThrow = movement.ReadValue<Vector2>().x;
        float verticalThrow = movement.ReadValue<Vector2>().y;
        Debug.Log(horizontalThrow + verticalThrow);
    }
```

## 参考

- [UnityDoc: Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/index.html)
- [【Unity】Input System（新しい入力システム）の使い方](https://kurokumasoft.com/2022/01/05/unity-input-system/)
