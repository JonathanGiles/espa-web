---
title: eSpa 3D Printable Enclosure - Protect Your Spa Controller
description: Download free 3D printable enclosure files for the eSpa Mini v2 spa pool controller. STL files available for easy printing.
head:
  - - meta
    - property: og:title
      content: eSpa 3D Printable Enclosure - Protect Your Spa Controller
  - - meta
    - property: og:description
      content: Download free 3D printable enclosure files for the eSpa Mini v2 spa pool controller. STL files available for easy printing.
---

# 3D Printable Enclosure

A custom 3D printable enclosure is available for the eSpa Mini, designed to protect your PCB and provide a clean, finished look when installed in your spa pool cabinet.

The enclosure comes in two variants that are identical apart from length: a **long** version (recommended) and a slightly more **compact short** version. Both share the same water-resistant drip-lip lid, two-point wall mounting, and eSpa.diy mark.

## Photos

Click any thumbnail to view the full-size image.

<style>
.enclosure-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 1rem 0;
}
@media (max-width: 640px) {
  .enclosure-gallery { grid-template-columns: repeat(2, 1fr); }
}
.enclosure-gallery .thumb {
  display: block;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.enclosure-gallery .thumb:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.enclosure-gallery img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}
.enclosure-gallery .caption {
  padding: 6px 8px;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

/* Lightbox overlay */
.lightbox-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.lightbox-overlay.active {
  display: flex;
}
.lightbox-overlay img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}
.lightbox-overlay .lightbox-caption {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 6px 16px;
  border-radius: 4px;
}
.lightbox-overlay .lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
}
</style>

<div class="enclosure-gallery">
  <div class="thumb" onclick="openLightbox('/images/enclosure/side-view-closed-lid.jpg', 'Side view (closed)')">
    <img src="/images/enclosure/side-view-closed-lid.jpg" alt="Side view with closed lid" />
    <div class="caption">Side view (closed)</div>
  </div>
  <div class="thumb" onclick="openLightbox('/images/enclosure/top-angle-view-closed-lid.jpg', 'Top angle (closed)')">
    <img src="/images/enclosure/top-angle-view-closed-lid.jpg" alt="Top angle view with closed lid" />
    <div class="caption">Top angle (closed)</div>
  </div>
  <div class="thumb" onclick="openLightbox('/images/enclosure/top-angle-view-open-lid.jpg', 'Top angle (open)')">
    <img src="/images/enclosure/top-angle-view-open-lid.jpg" alt="Top angle view with open lid" />
    <div class="caption">Top angle (open)</div>
  </div>
  <div class="thumb" onclick="openLightbox('/images/enclosure/top-view-closed-lid.jpg', 'Top view (closed)')">
    <img src="/images/enclosure/top-view-closed-lid.jpg" alt="Top view with closed lid" />
    <div class="caption">Top view (closed)</div>
  </div>
  <div class="thumb" onclick="openLightbox('/images/enclosure/top-view-open-lid.jpg', 'Top view (open)')">
    <img src="/images/enclosure/top-view-open-lid.jpg" alt="Top view with open lid" />
    <div class="caption">Top view (open)</div>
  </div>
</div>

<div class="lightbox-overlay" id="lightbox" onclick="closeLightbox()">
  <span class="lightbox-close">&times;</span>
  <img id="lightbox-img" src="" alt="" />
  <div class="lightbox-caption" id="lightbox-caption"></div>
</div>

<script setup>
if (typeof window !== 'undefined') {
  window.openLightbox = function(src, caption) {
    const overlay = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-caption').textContent = caption;
    overlay.classList.add('active');
  }
  window.closeLightbox = function() {
    document.getElementById('lightbox').classList.remove('active');
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') window.closeLightbox();
  });
}
</script>

## Downloads

The following files are available for download. Each variant needs its **case and its matching lid** — long lids fit long cases, and short lids fit short cases. Most people should choose the **long (recommended)** version.

| File | Description |
|------|-------------|
| <a href="/downloads/espa-case-long.stl" download>espa-case-long.stl</a> | **Case — long (recommended).** Full-length body, with extra clearance at the connector end so the RJ45 plug sits fully inside the case. |
| <a href="/downloads/espa-lid-long.stl" download>espa-lid-long.stl</a> | **Lid — long (recommended).** Matches the long case. |
| <a href="/downloads/espa-case-short.stl" download>espa-case-short.stl</a> | **Case — short.** A more compact build, 15&nbsp;mm shorter than the recommended version. |
| <a href="/downloads/espa-lid-short.stl" download>espa-lid-short.stl</a> | **Lid — short.** Matches the short case. |

::: tip Which one should I print?
Go with the **long (recommended)** version. The **short** variant only saves a small amount of resin and print time, and its tighter connector end leaves less room for the RJ45 plug — choose it only if you specifically want the most compact enclosure.
:::

## Printing Recommendations

* **Material:** PETG or ASA recommended for heat resistance, as the enclosure will be located near your spa pool equipment. PLA may warp over time in warm environments.
* **Layer height:** 0.2mm works well for a balance of speed and quality.
* **Infill:** 15–20% is sufficient for structural integrity.
* **Supports:** Not typically required, but check your slicer preview.

## Assembly

Two types of screw are used, one for the lid and one for the PCB:

* **Lid:** **M2 countersunk screws, 10mm length.** These thread tightly into the lid holes (which measure approximately 1.9mm) and hold the lid securely closed.
* **PCB mounting:** **M2 pan head screws, 5mm length.** These secure the PCB to the standoff inside the case.

::: warning PCB screw: use pan head, not countersunk
For the PCB, use a **pan head** screw and do **not** exceed **5mm** length. A pan head bottoms out flat on top of the PCB, so it can't pull in any deeper. A countersunk head keeps wedging in as you tighten, and a longer screw can drive straight through the thin floor and out the bottom of the case.
:::

## Wall Mounting

The case has two external mounting bosses (one at each end) with ⌀3.7mm clearance holes for fixing the enclosure to a wall or backboard.

* **Wall screws:** **#6 (⌀3.5mm) × 16mm pan-head wood screws.** The ⌀3.7mm holes are clearance holes, so the screw passes through the boss and threads directly into the wall or timber behind it. A pan head sits flush against the top of the boss and clamps the case down securely.
