# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/larynx.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d), which also uses 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs and pancreas explorers pin).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure | Source concept(s) | Elements |
| --- | --- | --- |
| Hyoid bone | FMA52749 | FJ2772 |
| Thyroid cartilage | FMA55099 | FJ2808 |
| Cricoid cartilage | FMA9615 | FJ2769 |
| Epiglottis | FMA55130 | FJ2770 |
| Arytenoid cartilages | FMA55113 right, FMA55114 left | FJ2792, FJ2775 |
| Corniculate and cuneiform cartilages | FMA55115, FMA55116 corniculate; FMA55117, FMA55118 cuneiform | FJ2793, FJ2776, FJ2795, FJ2773 |
| Thyrohyoid membrane | FMA55133, FMA55134 membrane; FMA55138 median, FMA55140, FMA55141 lateral thyrohyoid ligaments | FJ2804, FJ2786, FJ2790, FJ2797, FJ2779 |
| Median cricothyroid ligament | FMA55237 | FJ2789 |
| Conus elasticus | FMA55251 right, FMA55252 left | FJ2794, FJ2777 |
| Vocal ligaments | FMA55245 right, FMA55246 left | FJ2805, FJ2787 |
| Epiglottic ligaments | FMA55227 hyo-epiglottic, FMA55230 thyro-epiglottic | FJ2771, FJ2807 |
| Cricothyroid | FMA46611, FMA46612 straight parts; FMA46613, FMA46614 oblique parts | FJ2801, FJ2783, FJ2799, FJ2781 |
| Posterior crico-arytenoid | FMA46577 right, FMA46578 left | FJ2800, FJ2782 |
| Lateral crico-arytenoid | FMA46580 right, FMA46581 left | FJ2796, FJ2778 |
| Arytenoid muscles | FMA46582 transverse; FMA46584, FMA46585 oblique | FJ2809, FJ2798, FJ2780 |
| Thyro-arytenoid | FMA46589 right, FMA46590 left | FJ2802, FJ2803, FJ2784, FJ2785 |
| Vocalis | FMA46592 right, FMA46593 left | FJ2806, FJ2788 |
| Aryepiglottic | FMA46604 right, FMA46605 left | FJ2791, FJ2774 |
| Trachea | FMA7394 | FJ2541 |
| Thyroid gland | FMA13368 right lobe, FMA13369 left lobe, FMA49178 isthmus | FJ3672, FJ3671, FJ3670 |

45 elements, 161,306 triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv).

Decisions:

- **Duplicate meshes.** The 4.3 table maps several concepts to more than one element with the same geometry: cricoid cartilage (FJ2440, FJ2769, FJ6487: identical bounds and face counts), hyoid bone (FJ2772, FJ3201), trachea (FJ2541, FJ6588: bounds within 0.2 mm) and the thyro-arytenoid "proper" concepts FMA46599/FMA46600 (FJ4502, FJ4473: same bounds and face counts as FJ2802 and FJ2784). One copy of each is used so surfaces do not z-fight.
- **Thyro-arytenoid** keeps both IS-A elements per side: FJ2802/FJ2784 (the main muscle) and FJ2803/FJ2785, which extend up toward the epiglottis.
- **Left and right partners** are grouped into one selectable structure each, so the tree stays short. The cricothyroid groups its straight and oblique parts, and the arytenoid muscles group the transverse and both oblique muscles.
- **Thyroid gland** (both lobes and the isthmus) is included as a landmark for the upper trachea.
- Omitted: the main bronchi (shown in the lungs explorer; including them would also shift the camera target well below the larynx), the esophagus and pharynx, laryngeal mucosa and the vocal-fold covering, extrinsic and infrahyoid muscles, parathyroid glands, the stylohyoid ligaments, laryngeal nerves and vessels.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box and uniformly scaled by `0.016`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). Anterior view looks along display −Z, posterior along +Z, left lateral looks from the patient's left along −X, and the superior view looks down from above and slightly in front, into the laryngeal inlet. In the anterior view the thyroid cartilage's prominence faces the viewer and the trachea runs down to the carina. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```
