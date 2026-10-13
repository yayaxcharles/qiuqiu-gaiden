# 免費素材來源（全部 CC0）

3D 大地圖「超高」畫質才下載這個資料夾的檔案（低、中、高畫質不下載）。全部是 CC0 公眾領域授權：可商用、不用標作者。
打包時這個資料夾不加內容雜湊碼（見 `tools/vite-asset-hash.ts` 第 5 條）：要換內容請換檔名，不要原檔名蓋掉。

取得方式：壓縮檔先解到暫存區的空資料夾，只取需要的模型與貼圖（沒有執行裡面任何程式），原樣複製進來；
顏色在遊戲裡重新上色成原本的卡通配色（`src/render3d/kenney.ts`）。2026-10-13 下載。

## Kenney — Nature Kit 2.1（作者 Kenney，www.kenney.nl，CC0）

下載頁：https://kenney.nl/assets/nature-kit（壓縮檔 https://kenney.nl/media/pages/assets/nature-kit/37ac38a37b-1677698939/kenney_nature-kit.zip）
原始授權文字：`kenney/nature-kit/License.txt`

| 檔案 | 用在哪裡 | 大小 |
|---|---|---|
| `kenney/nature-kit/tree_oak.glb` | 圓樹（`treeRound`） | 14.6 KB |
| `kenney/nature-kit/tree_pineRoundA.glb` | 松樹（`treePine`） | 14.5 KB |
| `kenney/nature-kit/tree_palmDetailedTall.glb` | 棕櫚（`treePalm`） | 28.2 KB |
| `kenney/nature-kit/plant_bushDetailed.glb` | 灌木（`bush`） | 10.2 KB |
| `kenney/nature-kit/mushroom_redGroup.glb` | 蘑菇（`mushroom`） | 15.0 KB |
| `kenney/nature-kit/stump_roundDetailed.glb` | 樹樁（`stump`） | 8.2 KB |

## Kenney — Fantasy Town Kit 2.0（作者 Kenney，www.kenney.nl，CC0）

下載頁：https://kenney.nl/assets/fantasy-town-kit（壓縮檔 https://kenney.nl/media/pages/assets/fantasy-town-kit/efe948d309-1754222374/kenney_fantasy-town-kit_2.0.zip）
原始授權文字：`kenney/fantasy-town-kit/License.txt`

| 檔案 | 用在哪裡 | 大小 |
|---|---|---|
| `kenney/fantasy-town-kit/wall-door.glb` | 城鎮、王都、港口房子的正面（門） | 29.3 KB |
| `kenney/fantasy-town-kit/wall-window-shutters.glb` | 房子左右兩面（百葉窗） | 23.9 KB |
| `kenney/fantasy-town-kit/wall.glb` | 房子背面 | 4.8 KB |
| `kenney/fantasy-town-kit/roof-gable.glb` | 人字屋頂（每棟自己上色） | 7.6 KB |
| `kenney/fantasy-town-kit/Textures/colormap.png` | 上面四個模型的色票圖（讀進來取顏色，不直接貼） | 11.1 KB |

## Poly Haven — Kloofendal 48d Partly Cloudy (Pure Sky)（作者 Greg Zaal，天空修飾 Jarod Guest，CC0）

頁面：https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky
原檔：https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloofendal_48d_partly_cloudy_puresky_1k.hdr（1.4 MB，**沒有放進來**）
授權：https://polyhaven.com/license（CC0）

| 檔案 | 用在哪裡 | 大小 |
|---|---|---|
| `polyhaven/kloofendal_48d_partly_cloudy_puresky_sh.json` | 超高畫質的環境光探針：用 `tools/3D/hdri_sh.mjs` 從 1k 的 HDR 算出 9 組球諧係數（天空裡的太陽轉到跟遊戲的太陽同一個方位），遊戲只下載這個小檔 | 0.6 KB |

合計約 170 KB（模型＋色票圖＋係數＋授權文字）。

## 建築建模（2026-10-13）的附註

建築建模代理**沒有新增任何素材**：外傳是和風貓國，Kenney、Quaternius 的城鎮／城堡套件都是西洋風，地點建築改成程式畫的和風模型（`src/render3d/wafu.ts`）。
因此上面 `kenney/fantasy-town-kit/` 的四個牆片模型與色票圖，遊戲已經**不再載入**（`src/render3d/index.ts` 拿掉了超高畫質換房子的那段；`kenney.ts` 的 `loadKenneyHouse` 留著沒人呼叫）。檔案沒有刪，要不要刪由使用者決定。
