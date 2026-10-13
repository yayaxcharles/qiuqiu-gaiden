const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./kenney-fqHPgvPB.js","./index-CgBeGIvD.js","./index-CzXCmqSv.css","./post-DgLcNEzq.js","./three.core-CmVcJKV3.js"])))=>i.map(i=>d[i]);
import{$ as e,A as t,At as n,B as r,C as i,Ct as a,D as o,Dt as s,E as c,Et as l,F as u,Ft as d,G as f,H as p,I as m,J as h,L as g,M as _,Mt as v,N as y,Nt as b,O as x,On as S,Ot as C,P as w,Q as T,R as E,Rt as D,S as O,Sn as ee,St as te,T as ne,U as re,V as k,Vt as ie,W as A,X as j,Y as M,Z as ae,_ as oe,_t as se,a as N,an as ce,at as P,b as le,bn as ue,bt as de,c as fe,cn as pe,d as me,et as he,f as ge,fn as _e,ft as ve,g as ye,gt as be,h as xe,i as Se,in as F,it as Ce,j as we,jt as Te,k as I,kn as Ee,kt as L,l as R,m as De,mt as Oe,nt as ke,o as Ae,on as je,ot as Me,p as Ne,pt as Pe,q as Fe,r as Ie,rt as Le,s as Re,st as ze,t as Be,tt as Ve,u as He,v as Ue,w as We,x as Ge,xt as Ke,y as qe,yn as Je,z}from"./index-CgBeGIvD.js";import{$ as Ye,A as Xe,An as Ze,At as Qe,B as $e,Bn as et,Bt as tt,C as nt,Cr as rt,D as it,Dn as at,Dr as ot,Dt as st,E as ct,En as lt,Er as ut,Et as dt,F as ft,Ft as pt,H as mt,Hn as ht,I as gt,Jn as _t,Jt as vt,K as yt,Kn as bt,L as xt,Lt as St,M as Ct,Mn as wt,Mt as Tt,N as Et,Nn as Dt,Nt as Ot,O as kt,On as At,Or as B,Ot as jt,Pt as Mt,Qn as Nt,R as Pt,Rn as Ft,S as It,Sr as Lt,T as Rt,Tn as zt,Tr as Bt,Tt as Vt,U as Ht,Ut,V as Wt,Vn as Gt,W as Kt,Xn as qt,Zn as Jt,_ as Yt,_r as Xt,_t as V,a as Zt,at as Qt,b as $t,br as en,bt as tn,c as nn,cr as rn,ct as an,d as on,dr as sn,er as cn,et as ln,f as un,fr as dn,ft as fn,g as pn,gr as mn,gt as hn,h as gn,ht as H,ir as _n,it as vn,j as yn,jn as bn,jt as xn,k as Sn,kr as Cn,lr as wn,lt as Tn,m as En,mr as Dn,mt as On,nr as kn,nt as An,o as jn,or as Mn,ot as Nn,p as U,pr as W,pt as Pn,qn as Fn,qt as In,r as Ln,rr as Rn,s as zn,st as Bn,tr as Vn,u as Hn,ur as Un,v as Wn,vr as Gn,vt as Kn,w as qn,wn as Jn,wr as Yn,x as Xn,xr as Zn,xt as Qn,y as $n,yr as er,yt as tr,zn as nr}from"./three.core-CmVcJKV3.js";import{a as rr,f as ir,h as ar,i as or,l as sr,n as cr,p as lr,r as ur,s as dr,t as fr,u as pr}from"./play-ghKmsF9n.js";import{C as mr,S as hr,T as gr,_ as _r,a as vr,b as yr,c as br,d as xr,f as Sr,g as Cr,h as wr,i as Tr,l as Er,m as Dr,n as Or,o as kr,p as Ar,r as jr,s as Mr,t as Nr,u as Pr,v as Fr,w as Ir,x as Lr,y as Rr}from"./bridge-Dlwn0a7g.js";var zr=Object.defineProperty,Br=(e,t)=>{let n={};for(var r in e)zr(n,r,{get:e[r],enumerable:!0});return t||zr(n,Symbol.toStringTag,{value:`Module`}),n};function Vr(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Hr(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new dn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new dn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ur={basic:{uniforms:ut([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:ut([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:ut([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:ut([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:ut([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new U(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:ut([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:ut([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:ut([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:ut([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:ut([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:ut([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:ut([K.common,K.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:ut([K.lights,K.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};Ur.physical={uniforms:ut([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new dn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new dn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new dn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var Wr={r:0,b:0,g:0},Gr=new hn,Kr=new H;Kr.set(-1,0,0,0,1,0,0,0,1);function qr(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new V(new jn(1,1,1),new Gt({name:`BackgroundCubeMaterial`,uniforms:er(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gr.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kr),l.material.toneMapped=En.getTransfer(i.colorSpace)!==nr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new pt(2,2),new Gt({name:`BackgroundMaterial`,uniforms:er(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=En.getTransfer(i.colorSpace)!==nr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Wr,Yn(e)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Jr(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Yr(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Xr(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Zr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Mt,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Qr=4,$r=6,ei=20,ti=256,ni=new Tt,ri=new U,ii=null,ai=0,oi=0,si=!1,ci=new W,li=new W,ui=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ci}=i;ii=this._renderer.getRenderTarget(),ai=this._renderer.getActiveCubeFace(),oi=this._renderer.getActiveMipmapLevel(),si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_i(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ii,ai,oi),this._renderer.xr.enabled=si,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ii=this._renderer.getRenderTarget(),ai=this._renderer.getActiveCubeFace(),oi=this._renderer.getActiveMipmapLevel(),si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Wt,format:In,colorSpace:an,depthBuffer:!1},r=fi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fi(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=di(r)),this._blurMaterial=hi(r,e,t),this._ggxMaterial=mi(r,e,t)}return r}_compileMaterial(e){let t=new V(new nn,e);this._renderer.compile(t,ni)}_sceneToCubeUV(e,t,n,r,i){let a=new Ot(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ri),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new jn,new Kn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ri),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;pi(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_i()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;pi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ni)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Qr?n-d+Qr:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,pi(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ni),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,pi(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ni)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];pi(t,3*l*(r>this._lodMax-Qr?r-this._lodMax+Qr:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ni)}};function di(e){let t=[],n=[],r=e,i=e-Qr+1+$r;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?li.set(1,r,n):e===1?li.set(-n,1,-r):e===2?li.set(-n,r,1):e===3?li.set(-1,r,-n):e===4?li.set(-n,-1,r):li.set(n,r,-1),li.toArray(l,(e*6+t)*3)}}let u=new nn;u.setAttribute(`position`,new zn(c,3)),u.setAttribute(`outputDirection`,new zn(l,3)),n.push(new V(u,null)),r>Qr&&r--}return{lodMeshes:n,sizeLods:t}}function fi(e,t,n){let r=new Xt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function pi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function mi(e,t,n){return new Gt({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hi(e,t,n){return new Gt({name:`SphericalGaussianBlur`,defines:{SAMPLES:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gi(){return new Gt({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:vi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _i(){return new Gt({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vi(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yi=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $n(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jn(5,5,5),i=new Gt({name:`CubemapFromEquirect`,uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Qt),new Yt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function bi(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new yi(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ui(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ui(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function xi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Cn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Si(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?kn:Vn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ci(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function wi(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Lt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ti(e,t,n){let r=new WeakMap,i=new Dn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new It(h,p,m,u);g.type=gt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new dn(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ei(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Di={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Oi(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new nn;l.setAttribute(`position`,new ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new ft([0,2,0,0,2,0],2));let u=new lt({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new V(l,u),f=new Tt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Xt(t,n,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},En.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Di[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ki=new Jt,Ai=new ct(1,1),ji=new It,Mi=new Xn,Ni=new $n,Pi=[],Fi=[],Ii=new Float32Array(16),Li=new Float32Array(9),Ri=new Float32Array(4);function zi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Pi[i];if(a===void 0&&(a=new Float32Array(i),Pi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Bi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Vi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Hi(e,t){let n=Fi[t];n===void 0&&(n=new Int32Array(t),Fi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ui(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Wi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bi(n,t))return;e.uniform2fv(this.addr,t),Vi(n,t)}}function Gi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Bi(n,t))return;e.uniform3fv(this.addr,t),Vi(n,t)}}function Ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bi(n,t))return;e.uniform4fv(this.addr,t),Vi(n,t)}}function qi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Vi(n,t)}else{if(Bi(n,r))return;Ri.set(r),e.uniformMatrix2fv(this.addr,!1,Ri),Vi(n,r)}}function Ji(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Vi(n,t)}else{if(Bi(n,r))return;Li.set(r),e.uniformMatrix3fv(this.addr,!1,Li),Vi(n,r)}}function Yi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Vi(n,t)}else{if(Bi(n,r))return;Ii.set(r),e.uniformMatrix4fv(this.addr,!1,Ii),Vi(n,r)}}function Xi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Zi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bi(n,t))return;e.uniform2iv(this.addr,t),Vi(n,t)}}function Qi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bi(n,t))return;e.uniform3iv(this.addr,t),Vi(n,t)}}function $i(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bi(n,t))return;e.uniform4iv(this.addr,t),Vi(n,t)}}function ea(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bi(n,t))return;e.uniform2uiv(this.addr,t),Vi(n,t)}}function na(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bi(n,t))return;e.uniform3uiv(this.addr,t),Vi(n,t)}}function ra(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bi(n,t))return;e.uniform4uiv(this.addr,t),Vi(n,t)}}function ia(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ai.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ai):a=ki,n.setTexture2D(t||a,i)}function aa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Mi,i)}function oa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ni,i)}function sa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ji,i)}function ca(e){switch(e){case 5126:return Ui;case 35664:return Wi;case 35665:return Gi;case 35666:return Ki;case 35674:return qi;case 35675:return Ji;case 35676:return Yi;case 5124:case 35670:return Xi;case 35667:case 35671:return Zi;case 35668:case 35672:return Qi;case 35669:case 35673:return $i;case 5125:return ea;case 36294:return ta;case 36295:return na;case 36296:return ra;case 35678:case 36198:case 36298:case 36306:case 35682:return ia;case 35679:case 36299:case 36307:return aa;case 35680:case 36300:case 36308:case 36293:return oa;case 36289:case 36303:case 36311:case 36292:return sa}}function la(e,t){e.uniform1fv(this.addr,t)}function ua(e,t){let n=zi(t,this.size,2);e.uniform2fv(this.addr,n)}function da(e,t){let n=zi(t,this.size,3);e.uniform3fv(this.addr,n)}function fa(e,t){let n=zi(t,this.size,4);e.uniform4fv(this.addr,n)}function pa(e,t){let n=zi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ma(e,t){let n=zi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ha(e,t){let n=zi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ga(e,t){e.uniform1iv(this.addr,t)}function _a(e,t){e.uniform2iv(this.addr,t)}function va(e,t){e.uniform3iv(this.addr,t)}function ya(e,t){e.uniform4iv(this.addr,t)}function ba(e,t){e.uniform1uiv(this.addr,t)}function xa(e,t){e.uniform2uiv(this.addr,t)}function Sa(e,t){e.uniform3uiv(this.addr,t)}function Ca(e,t){e.uniform4uiv(this.addr,t)}function wa(e,t,n){let r=this.cache,i=t.length,a=Hi(n,i);Bi(r,a)||(e.uniform1iv(this.addr,a),Vi(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ai:ki;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ta(e,t,n){let r=this.cache,i=t.length,a=Hi(n,i);Bi(r,a)||(e.uniform1iv(this.addr,a),Vi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Mi,a[e])}function Ea(e,t,n){let r=this.cache,i=t.length,a=Hi(n,i);Bi(r,a)||(e.uniform1iv(this.addr,a),Vi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ni,a[e])}function Da(e,t,n){let r=this.cache,i=t.length,a=Hi(n,i);Bi(r,a)||(e.uniform1iv(this.addr,a),Vi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ji,a[e])}function Oa(e){switch(e){case 5126:return la;case 35664:return ua;case 35665:return da;case 35666:return fa;case 35674:return pa;case 35675:return ma;case 35676:return ha;case 5124:case 35670:return ga;case 35667:case 35671:return _a;case 35668:case 35672:return va;case 35669:case 35673:return ya;case 5125:return ba;case 36294:return xa;case 36295:return Sa;case 36296:return Ca;case 35678:case 36198:case 36298:case 36306:case 35682:return wa;case 35679:case 36299:case 36307:return Ta;case 35680:case 36300:case 36308:case 36293:return Ea;case 36289:case 36303:case 36311:case 36292:return Da}}var ka=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ca(t.type)}},Aa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Oa(t.type)}},ja=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ma=/(\w+)(\])?(\[|\.)?/g;function Na(e,t){e.seq.push(t),e.map[t.id]=t}function Pa(e,t,n){let r=e.name,i=r.length;for(Ma.lastIndex=0;;){let a=Ma.exec(r),o=Ma.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Na(n,l===void 0?new ka(s,e,t):new Aa(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ja(s),Na(n,e)),n=e}}}var Fa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Pa(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ia(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var La=37297,Ra=0;function za(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ba=new H;function Va(e){En._getMatrix(Ba,En.workingColorSpace,e);let t=`mat3( ${Ba.elements.map(e=>e.toFixed(4))} )`;switch(En.getTransfer(e)){case Tn:return[t,`LinearTransferOETF`];case nr:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ha(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+za(e.getShaderSource(t),r)}return i}function Ua(e,t){let n=Va(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Wa={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ga(e,t){let n=Wa[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ka=new W;function qa(){return En.getLuminanceCoefficients(Ka),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ka.x.toFixed(4)}, ${Ka.y.toFixed(4)}, ${Ka.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ja(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Za).join(`
`)}function Ya(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Xa(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Za(e){return e!==``}function Qa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $a(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eo=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(e){return e.replace(eo,ro)}var no=new Map;function ro(e,t){let n=G[t];if(n===void 0){let e=no.get(t);if(e!==void 0)n=G[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return to(n)}var io=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ao(e){return e.replace(io,oo)}function oo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function so(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var co={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function lo(e){return co[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var uo={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function fo(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:uo[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var po={302:`ENVMAP_MODE_REFRACTION`};function mo(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:po[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ho={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function go(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ho[e.combine]||`ENVMAP_BLENDING_NONE`}function _o(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function vo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=lo(n),l=fo(n),u=mo(n),d=go(n),f=_o(n),p=Ja(n),m=Ya(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Za).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Za).join(`
`),_.length>0&&(_+=`
`)):(g=[so(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Za).join(`
`),_=[so(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:Ga(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,Ua(`linearToOutputTexel`,n.outputColorSpace),qa(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Za).join(`
`)),o=to(o),o=Qa(o,n),o=$a(o,n),s=to(s),s=Qa(s,n),s=$a(s,n),o=ao(o),s=ao(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ia(i,i.VERTEX_SHADER,y),S=Ia(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ha(i,x,`vertex`),n=Ha(i,S,`fragment`);Lt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Fa(i,h),T=Xa(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,La)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ra++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var yo=0,bo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xo(e),t.set(e,n)),n}},xo=class{constructor(e){this.id=yo++,this.code=e,this.usedTimes=0}};function So(e){return e===1030||e===37490||e===36285}function Co(e,t,n,r,i,a){let o=new Ye,s=new bo,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,te;if(C){let e=Ur[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,te=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,A=!!i.map,j=!!i.matcap,M=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,P=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,F=he&&!!i.iridescenceThicknessMap,Ce=ge&&!!i.sheenColorMap,we=ge&&!!i.sheenRoughnessMap,Te=!!i.specularMap,I=!!i.specularColorMap,Ee=!!i.specularIntensityMap,L=_e&&!!i.transmissionMap,R=_e&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:En.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:A,matcap:j,envMap:M,envMapMode:M&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:P,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&So(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:F,sheen:ge,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:I,specularIntensityMap:Ee,transmission:_e,transmissionMap:L,thicknessMap:R,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:i.combine,mapUv:A&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:P&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:F&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:I&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:L&&m(i.transmissionMap.channel),thicknessMapUv:R&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(A||Oe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:A&&i.map.isVideoTexture===!0&&En.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:P&&i.emissiveMap.isVideoTexture===!0&&En.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ur[t];n=Rn.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new vo(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function wo(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function To(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Eo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Do(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||To),r.length>1&&r.sort(t||Eo),i.length>1&&i.sort(t||Eo)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Oo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Do,e.set(t,[i])):n>=r.length?(i=new Do,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ko(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new U};break;case`SpotLight`:n={position:new W,direction:new W,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Ao(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dn};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dn};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dn,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var jo=0;function Mo(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function No(e){let t=new ko,n=Ao(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new hn,o=new hn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Mo);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=jo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Po(e){let t=new No(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Fo(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Po(e),t.set(n,[a])):r>=i.length?(a=new Po(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Io=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lo=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ro=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],zo=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Bo=new hn,Vo=new W,Ho=new W;function Uo(e,t,n){let r=new Pt,i=new dn,a=new dn,o=new Dn,s=new tr,c=new tn,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dn},radius:{value:4}},vertexShader:Io,fragmentShader:Lo}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new nn;m.setAttribute(`position`,new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new V(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Xt(i.x,i.y,{format:Jn,type:Wt,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ct(i.x,i.y,gt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=qn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=dt,d.map.depthTexture.magFilter=dt}else l.isPointLight?(d.map=new yi(i.x),d.map.depthTexture=new Wn(i.x,rn)):(d.map=new Xt(i.x,i.y),d.map.depthTexture=new ct(i.x,i.y,rn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=qn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Qt,d.map.depthTexture.magFilter=Qt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=dt,d.map.depthTexture.magFilter=dt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vo.setFromMatrixPosition(l.matrixWorld),e.position.copy(Vo),Ho.copy(e.position),Ho.add(Ro[t]),e.up.copy(zo[t]),e.lookAt(Ho),e.updateMatrixWorld(),n.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(i.x,i.y,{format:Jn,type:Wt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Wo(e,t){function n(){let t=!1,n=new Dn,r=null,i=new Dn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=wt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,A=e.getParameter(e.VERSION);A.indexOf(`WebGL`)===-1?A.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(A)[1]),k=ie>=1);let j=null,M={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Dn().fromArray(ae),N=new Dn().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let P={};P[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),P[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),P[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Lt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Lt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Lt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==ee&&(k&&e.lineWidth(t),ee=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(te!==n||ne!==r)&&(te=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function F(t){t===void 0&&(t=e.TEXTURE0+re-1),j!==t&&(e.activeTexture(t),j=t)}function Ce(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+re-1:j);let i=M[r];i===void 0&&(i={type:void 0,texture:void 0},M[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||P[t]),i.type=t,i.texture=n)}function we(){let t=M[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function L(){try{e.texSubImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function R(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){Lt(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Fe(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,M={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,ne=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:F,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:I,texImage2D:Ae,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:Ee,texSubImage3D:L,compressedTexSubImage2D:R,compressedTexSubImage3D:De,scissor:Pe,viewport:Fe,reset:Re}}function Go(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dn,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Zn(`canvas`)}function g(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Tn:En.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function te(){return O}function ne(e){O=e}function re(){let e=O;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&Ce(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function A(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ue(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function j(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ue(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?de(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[bn]:e.REPEAT,[un]:e.CLAMP_TO_EDGE,[Vt]:e.MIRRORED_REPEAT},oe={[dt]:e.NEAREST,[jt]:e.NEAREST_MIPMAP_NEAREST,[st]:e.NEAREST_MIPMAP_LINEAR,[Qt]:e.LINEAR,[Bn]:e.LINEAR_MIPMAP_NEAREST,[Nn]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function N(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=k(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function P(e,t,n){return Math.floor(Math.floor(e/n)/t)}function le(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=P(n.start,r.width,4),c=P(t.start,r.width,4);n.start<=i+1&&a===c&&P(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ue(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=En.getPrimaries(En.workingColorSpace),r=o.colorSpace===``?null:En.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=we(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);N(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Rt,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&le(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=rt(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=rt(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Te(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Te(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=En.getPrimaries(En.workingColorSpace),r=o.colorSpace===``?null:En.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=we(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);N(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Te(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Se(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),N(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ie(i.depthTexture,0);let u=l.__webglTexture,d=Se(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function he(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)me(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(i.__webglFramebuffer[0],t,0):me(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),pe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),pe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,i){let a=r.get(t);n!==void 0&&fe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&he(t)}function _e(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),pe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),N(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)fe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),N(c,a),fe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),N(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else fe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&he(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ye.push(l),be.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ce(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function we(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(En.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Lt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=ie,this.setTexture2DArray=A,this.setTexture3D=j,this.setTextureCube=M,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ko(e,t){function n(n,r=``){let i,a=En.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var qo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jo=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ct(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gt({vertexShader:qo,fragmentShader:Jo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xo=class extends yn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Yo,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new dn,C=null,w=null,T=new Ot;T.viewport=new Dn;let E=new Ot;E.viewport=new Dn;let D=[T,E],O=new Ln,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Gn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Gn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Gn,b[e]=t),t.getHandSpace()};function ne(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,k);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,k),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Rt:qn,a=_.stencil?Mn:rn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Xt(d.textureWidth,d.textureHeight,{format:In,type:_n,depthTexture:new ct(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xt(f.framebufferWidth,f.framebufferHeight,{format:In,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function k(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ie=new W,A=new W;function j(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),A.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(A),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function M(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||te!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,te=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;M(O,i);for(let e=0;e<a.length;e++)M(a[e],i);a.length===2?j(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ot,o.layers.enable(n),o.viewport=new Dn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ct,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let N=new Vr;N.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Zo=new hn,Qo=new H;Qo.set(-1,0,0,0,1,0,0,0,1);function $o(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Yn(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Zo.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Qo),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function es(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Lt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ts=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function rs(){return ns===null&&(ns=new nt(ts,16,16,Jn,Wt),ns.name=`DFG_LUT`,ns.minFilter=Qt,ns.magFilter=Qt,ns.wrapS=un,ns.wrapT=un,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var is=class{constructor(e={}){let{canvas:t=en(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([vt,zt,Ze]),g=new Set([_n,rn,sn,Mn,wn,Un]),_=new Uint32Array(4),v=new Int32Array(4),y=new W,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,te=null;this._outputColorSpace=Ft;let ne=0,re=0,k=null,ie=-1,A=null,j=new Dn,M=new Dn,ae=null,oe=new U(0),se=0,N=t.width,ce=t.height,P=1,le=null,ue=null,de=new Dn(0,0,N,ce),fe=new Dn(0,0,N,ce),pe=!1,me=new Pt,he=!1,ge=!1,_e=new hn,ve=new W,ye=new Dn,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return k===null?P:1}let F=n;function Ce(e,n){return t.getContext(e,n)}let we,Te,I,Ee,L,R,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),F===null){let t=`webgl2`;if(F=Ce(t,e),F===null)throw Ce(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}We()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),Lt(`WebGLRenderer: `+e.message),e}function We(){we=new xi(F),we.init(),Ve=new Ko(F,we),Te=new Xr(F,we,e,Ve),I=new Wo(F,we),Te.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),ee=F.createFramebuffer(),te=F.createFramebuffer(),Ee=new wi(F),L=new wo,R=new Go(F,we,I,L,Te,Ve,Ee),De=new bi(T),Oe=new Hr(F),He=new Jr(F,Oe),ke=new Si(F,Oe,Ee,He),Ae=new Ei(F,ke,Oe,He,Ee),Re=new Ti(F,Te,R),Fe=new Zr(L),je=new Co(T,De,we,Te,He,Fe),Me=new $o(T,L),Ne=new Oo,Pe=new Fo(we),Le=new qr(T,De,I,Ae,p,s),Ie=new Uo(T,Ae,Te),Ue=new es(F,Ee,Te,I),ze=new Yr(F,we,Ee),Be=new Ci(F,we,Ee),Ee.programs=je.programs,T.capabilities=Te,T.extensions=we,T.properties=L,T.renderLists=Ne,T.shadowMap=Ie,T.state=I,T.info=Ee}m!==1009&&(w=new Oi(m,t.width,t.height,o,r,i));let Ge=new Xo(T,F);this.xr=Ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=we.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=we.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(e){e!==void 0&&(P=e,this.setSize(N,ce,!1))},this.getSize=function(e){return e.set(N,ce)},this.setSize=function(e,n,r=!0){Ge.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(N=e,ce=n,t.width=Math.floor(e*P),t.height=Math.floor(n*P),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(N*P,ce*P).floor()},this.setDrawingBufferSize=function(e,n,r){N=e,ce=n,P=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)Lt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(j)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),I.viewport(j.copy(de).multiplyScalar(P).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),I.scissor(M.copy(fe).multiplyScalar(P).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){I.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(k!==null){let t=k.texture.format;e=h.has(t)}if(e){let e=k.texture.type,t=g.has(e),n=Le.getClearColor(),r=Le.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),Le.dispose(),Ne.dispose(),Pe.dispose(),L.dispose(),De.dispose(),Ae.dispose(),He.dispose(),Ue.dispose(),je.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),rt.stop()};function Ke(e){e.preventDefault(),Bt(`WebGLRenderer: Context Lost.`),E=!0}function qe(){Bt(`WebGLRenderer: Context Restored.`),E=!1;let e=Ee.autoReset,t=Ie.enabled,n=Ie.autoUpdate,r=Ie.needsUpdate,i=Ie.type;We(),Ee.autoReset=e,Ie.enabled=t,Ie.autoUpdate=n,Ie.needsUpdate=r,Ie.type=i}function Je(e){Lt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function z(e){let t=e.target;t.removeEventListener(`dispose`,z),Ye(t)}function Ye(e){Xe(e),L.remove(e)}function Xe(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){je.releaseProgram(e)}),e.isShaderMaterial&&je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;He.setup(i,r,s,n,c);let h,g=ze;if(c!==null&&(h=Oe.get(c),g=Be,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Se()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(we.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Oe.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),he===!0&&Fe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Pe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ge=this.localClippingEnabled,he=Fe.init(this.clippingPlanes,ge),he===!0&&Fe.setGlobalState(this.clippingPlanes,t),D!==null&&Ie.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Qe(o,n,t,e),r.add(o)}else Qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}we.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){rt.stop()}function nt(){rt.start()}let rt=new Vr;rt.setAnimationLoop(et),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Lt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ge.enabled===!0&&Ge.isPresenting===!0,r=w!==null&&(k===null||n)&&w.begin(T,k);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,k),x=Pe.get(e,C.length),x.init(t),x.state.textureUnits=R.getTextureUnits(),C.push(x),_e.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(_e,mn,t.reversedDepth),ge=this.localClippingEnabled,he=Fe.init(this.clippingPlanes,ge),b=Ne.get(e,S.length),b.init(),S.push(b),Ge.enabled===!0&&Ge.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&it(e,t,-1/0,T.sortObjects)}it(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,ue),xe=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,xe&&Le.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Fe.beginShadows();let i=x.state.shadowsArray;if(Ie.render(i,e,t),he===!0&&Fe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];st(n,r,e,a)}xe&&Le.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];at(b,e,n,n.viewport)}}else r.length>0&&st(n,r,e,t),xe&&Le.render(e),at(b,e,t)}k!==null&&re===0&&(R.updateMultisampleRenderTarget(k),R.updateRenderTargetMipmap(k)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),He.resetDefaultState(),ie=-1,A=null,C.pop(),C.length>0?(x=C[C.length-1],R.setTextureUnits(x.state.textureUnits),he===!0&&Fe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(me)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(_e);let i=Ae.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ye.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(me))){let i=Ae.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ye.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(_e)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ye.z,s,t)}}else a.visible&&b.push(e,i,a,n,ye.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),he===!0&&Fe.setGlobalState(T.clippingPlanes,n),r&&I.viewport(j.copy(r)),i.length>0&&ct(i,t,n),a.length>0&&ct(a,t,n),o.length>0&&ct(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function st(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=we.has(`EXT_color_buffer_half_float`)||we.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?Wt:_n,minFilter:Nn,samples:Math.max(4,Te.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:En.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||j;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Le.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),he===!0&&Fe.setGlobalState(T.clippingPlanes,r),ct(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),we.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,lt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&lt(o,t,n,s,l,c)}}function lt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ut(e,t,n){t.isScene!==!0&&(t=be);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=je.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=De.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,z),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ft(e,s),d}else s.uniforms=je.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Fe.uniform),ft(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Fa.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ft(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function pt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function mt(e,t,n,r,i){t.isScene!==!0&&(t=be),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:En.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=De.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=x.state.lights;if(he===!0&&(ge===!0||e!==A)){let t=e===A&&r.id===ie;Fe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Fe.numPlanes||v.numIntersection!==Fe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=pt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||A!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,ve.setFromMatrixPosition(e.matrixWorld)),Te.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),A!==e&&(A=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(F,`sunShadowMap`,y.state.sunShadowMap,R),y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,R),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,R),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&Re.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=rs()),w){if(O.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(ee,E),a&&r.fog===!0&&Me.refreshFogUniforms(ee,a),Me.refreshMaterialUniforms(ee,r,P,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}Fa.upload(F,dt(v),ee,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Fa.upload(F,dt(v),ee,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ue.update(n,S),Ue.bind(n,S)}}return S}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){k=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),j.copy(e.viewport),M.copy(e.scissor),ae=e.scissorTest,I.viewport(j),I.scissor(M),I.setScissorTest(ae),ie=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,j.copy(e.viewport),M.copy(e.scissor),ae=e.scissorTest}else j.copy(de).multiplyScalar(P).floor(),M.copy(fe).multiplyScalar(P).floor(),ae=pe;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(j),I.scissor(M),I.setScissorTest(ae),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function _t(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Te.textureFormatReadable(e.format),t.__typeReadable=Te.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Lt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){Lt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Lt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Ve.convert(c),Ve.convert(l),a)}finally{let e=k===null?null:L.get(k).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Ve.convert(l),Ve.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=k===null?null:L.get(k).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ot(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ve.convert(t.format),_=Ve.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ee),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ne=0,re=0,k=null,I.reset(),He.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=En._getDrawingBufferColorSpace(e),t.unpackColorSpace=En._getUnpackColorSpace()}},as=new hn,os=new tt,ss=new Xe,cs=new W,ls=new W,us=new H,ds=new WeakMap;function fs(e){let t=e.getAttribute(`position`).version??0,n=ds.get(e);if(n&&n.ver===t)return n;let r=e.index?e.toNonIndexed():e;r.getAttribute(`normal`)||r.computeVertexNormals();let i={ver:t,pos:ps(r.getAttribute(`position`)),nor:ps(r.getAttribute(`normal`))};return r!==e&&r.dispose(),ds.set(e,i),i}function ps(e){if(!e.isInterleavedBufferAttribute&&e.itemSize===3&&e.array instanceof Float32Array&&!e.normalized)return e.array;let t=new Float32Array(e.count*3);for(let n=0;n<e.count;n++)t[n*3]=e.getX(n),t[n*3+1]=e.getY(n),t[n*3+2]=e.getZ(n);return t}var ms=new Map;function hs(e){if(e instanceof U)return e;let t=ms.get(e);return t||(t=new U(e),ms.set(e,t)),t}var gs=class{pos=new Float32Array(1024);nor=new Float32Array(1024);col=new Float32Array(1024);n=0;get empty(){return this.n===0}reserve(e){let t=this.n+e;if(t<=this.pos.length)return;let n=this.pos.length*2;for(;n<t;)n*=2;let r=e=>{let t=new Float32Array(n);return t.set(e.subarray(0,this.n)),t};this.pos=r(this.pos),this.nor=r(this.nor),this.col=r(this.col)}add(e,t,n=[0,0,0],r=[0,0,0],i=1){return ss.set(r[0],r[1],r[2]),os.setFromEuler(ss),typeof i==`number`?ls.set(i,i,i):ls.set(i[0],i[1],i[2]),as.compose(cs.set(n[0],n[1],n[2]),os,ls),this.addMatrix(e,t,as)}addMatrix(e,t,n){let{pos:r,nor:i}=fs(e),a=hs(t);return this.push(r,i,n,null,a.r,a.g,a.b),this}addColored(e,t,n){let r=hs(n??`#ffffff`),i=ps(e.getAttribute(`position`)),a=ps(e.getAttribute(`normal`)),o=ps(e.getAttribute(`color`));return this.push(i,a,t,o,r.r,r.g,r.b),this}push(e,t,n,r,i,a,o){let s=n.elements,c=us.getNormalMatrix(n).elements;this.reserve(e.length);let l=this.pos,u=this.nor,d=this.col,f=this.n,p=e.length/3;for(let n=0;n<p;n++,f+=3){let p=n*3,m=e[p],h=e[p+1],g=e[p+2];l[f]=s[0]*m+s[4]*h+s[8]*g+s[12],l[f+1]=s[1]*m+s[5]*h+s[9]*g+s[13],l[f+2]=s[2]*m+s[6]*h+s[10]*g+s[14];let _=t[p],v=t[p+1],y=t[p+2],b=c[0]*_+c[3]*v+c[6]*y,x=c[1]*_+c[4]*v+c[7]*y,S=c[2]*_+c[5]*v+c[8]*y,C=Math.hypot(b,x,S)||1;u[f]=b/C,u[f+1]=x/C,u[f+2]=S/C,r?(d[f]=r[p]*i,d[f+1]=r[p+1]*a,d[f+2]=r[p+2]*o):(d[f]=i,d[f+1]=a,d[f+2]=o)}this.n=f}build(e=!0){let t=new nn,n=this.n;return t.setAttribute(`position`,new zn(this.pos.slice(0,n),3)),t.setAttribute(`normal`,new zn(this.nor.slice(0,n),3)),t.setAttribute(`color`,new zn(this.col.slice(0,n),3)),t.setAttribute(`uv`,new zn(new Float32Array(n/3*2),2)),e&&(t.computeBoundingSphere(),t.computeBoundingBox()),t}},q={box:new jn(1,1,1).translate(0,.5,0),cyl6:new $t(.5,.5,1,6).translate(0,.5,0),cyl8:new $t(.5,.5,1,8).translate(0,.5,0),cyl12:new $t(.5,.5,1,12).translate(0,.5,0),cone4:new gn(.5,1,4).rotateY(Math.PI/4).translate(0,.5,0),cone6:new gn(.5,1,6).translate(0,.5,0),cone8:new gn(.5,1,8).translate(0,.5,0),ico0:new Ht(.5,0),ico1:new Ht(.5,1),dodeca:new kt(.5,0),octa:new xn(.5,0),halfSphere:new Fn(.5,10,5,0,Math.PI*2,0,Math.PI/2),torus:new cn(.5,.08,6,20),prism3:(()=>{let e=new ht;return e.moveTo(-.5,0),e.lineTo(.5,0),e.lineTo(0,.5),e.closePath(),new Et(e,{depth:1,bevelEnabled:!1}).translate(0,0,-.5).rotateY(Math.PI/2)})()},_s=class{handlers;el;main;lootHost;cont;noteEl;noteTimer=0;busy=!1;constructor(e,t){this.handlers=t;let n=e?[`小魚乾 +${e.gold}`,`經驗每隻 +${e.xp}`,e.levelUps?.length?`${e.levelUps.join(`、`)} 升級了！`:``].filter(Boolean).join(`　`):``;this.lootHost=p(`div.cb-vic-loot`),this.noteEl=p(`div.cb-vic-note`),this.cont=r(`繼續`,()=>this.handlers.onContinue(),`primary big cb-vic-go`),this.main=p(`div.cb-vic-main`,null,p(`div.cb-vic-banner`,null,p(`b`,null,`勝利！`),n?p(`span`,null,n):null),this.noteEl,this.lootHost,p(`div.cb-vic-actions`,null,this.cont)),this.el=p(`div.cb-victory`,null,this.main)}fit(e,t){let n=this.el.style;n.top=`${Math.round(e)}px`,n.bottom=`auto`,n.height=`${Math.max(0,Math.round(t-e))}px`,this.main.style.setProperty(`--vic-k`,`1`);let r=this.main.currentCSSZoom??1,i=this.main.offsetHeight*r,a=this.main.offsetWidth*r;if(!i||!a)return;let o=Math.min(1,(t-e-16)/i,(this.el.clientWidth-16)/a);this.main.style.setProperty(`--vic-k`,String(Math.max(.3,Math.floor(o*1e3)/1e3)))}note(e){this.noteEl.textContent=e,this.noteEl.classList.remove(`show`),this.noteEl.offsetWidth,this.noteEl.classList.add(`show`),window.clearTimeout(this.noteTimer),this.noteTimer=window.setTimeout(()=>this.noteEl.classList.remove(`show`),4500)}setLoot(e){if(this.busy=!1,k(this.lootHost),this.main.classList.toggle(`has-loot`,!!e),this.cont.disabled=!!e,this.cont.textContent=e?`還有 ${e.left} 件戰利品要決定`:`繼續`,!e)return;let t=e.item,n=p(`div.cb-vic-card`,{class:`rarity-${t.rarity??`common`}`,"data-item":t.id},p(`div.cb-vic-found`,null,e.left>1?`你們搜了倒下的敵人，找到……（還有 ${e.left-1} 件）`:`你們搜了倒下的敵人，找到……`),p(`div.cb-vic-art`,null,g([t.icon],{text:t.name.slice(0,1),cls:`icon-box rarity-${t.rarity??`common`}`})),p(`div.cb-vic-name`,null,p(`b`,null,t.name),p(`small`,null,t.rarity?Ge[t.rarity]:``)),t.desc?p(`div.cb-vic-desc`,null,t.desc):null,t.effects?.length?p(`ul.cb-vic-fx`,null,...t.effects.map(e=>p(`li`,null,e))):null),i=(e,t)=>{this.busy||(this.busy=!0,this.handlers.onChoice(e,t))},a=p(`div.cb-vic-heroes`);for(let t of e.heroes){let e=(e,n,a)=>{let o=r(e,()=>i(t.id,n),`cb-vic-btn ${n}`,!t.mine||!!a);return o.dataset.loot=`${t.id}:${n}`,a&&o.setAttribute(`aria-label`,`${e}：${a}`),o};a.append(p(`div.cb-vic-hero`,{class:t.suggested?`suggested`:``,"data-hero":t.id},p(`div.cb-vic-who`,null,p(`b`,null,t.name),t.suggested?p(`small`,null,`（建議）`):null),p(`div.cb-vic-ask`,null,`選擇一個動作`),e(`收集`,`take`,null),e(`使用`,`use`,t.useWhy),t.useWhy?p(`div.cb-vic-why`,null,t.useWhy):null,e(`丟棄`,`discard`,null),t.mine?null:p(`div.cb-vic-why`,null,`由控制這隻的玩家決定`)))}this.lootHost.append(n,a)}},vs=Math.sqrt(3),ys=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]],bs=(e,t)=>`${e},${t}`;function xs(e,t){return{x:1*vs*(e+t/2),z:1.5*t}}function Ss(e,t){return Cs((vs/3*e-t/3)/1,2/3*t/1)}function Cs(e,t){let n=-e-t,r=Math.round(e),i=Math.round(t),a=Math.round(n),o=Math.abs(r-e),s=Math.abs(i-t),c=Math.abs(a-n);return o>s&&o>c?r=-i-a:s>c&&(i=-r-a),{q:r+0,r:i+0}}function ws(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Ts(e,t,n=0){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,1442695041)|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Es(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Ds(e,t=!0){let n=new Hn(e);return n.colorSpace=Ft,n.anisotropy=4,t&&(n.wrapS=n.wrapT=bn),n}function Os(e,t,n={}){let[r,i]=Es(256,256),a=ws(n.seed??1);i.fillStyle=e,i.fillRect(0,0,256,256),i.filter=`blur(3px)`;for(let e=0,r=n.dabCount??150;e<r;e++)i.fillStyle=t[e%t.length],i.globalAlpha=.35+a()*.3,i.beginPath(),i.ellipse(a()*256,a()*256,6+a()*22,4+a()*14,a()*Math.PI,0,Math.PI*2),i.fill();if(i.filter=`none`,n.strokes){i.strokeStyle=n.strokes,i.lineWidth=2,i.globalAlpha=.5;for(let e=0;e<90;e++){let e=a()*256,t=a()*256;i.beginPath(),i.moveTo(e,t),i.lineTo(e+(a()-.5)*4,t-5-a()*6),i.stroke()}}i.globalAlpha=1,n.extra&&n.extra(i,a,256),i.globalAlpha=1;let o=n.dots??[];for(let e=0,t=n.dotCount??0;e<t;e++)i.fillStyle=o[e%o.length],i.beginPath(),i.arc(a()*256,a()*256,1.5+a()*2,0,Math.PI*2),i.fill();if(n.edge!==!1){let e=i.createRadialGradient(128,128,76.8,128,128,128);e.addColorStop(0,`rgba(0,0,0,0)`),e.addColorStop(1,`rgba(40,25,10,0.3)`),i.fillStyle=e,i.fillRect(0,0,256,256)}return Ds(r)}function ks(e,t,n){e.globalAlpha=1;for(let r=0;r<95;r++){let i=t()*n,a=t()*n,o=11+t()*15;e.fillStyle=[`#2e1d1a`,`#3d2620`,`#4a2c22`,`#33201c`][r%4],e.beginPath();for(let n=0;n<6;n++){let r=n/6*Math.PI*2+t()*.5,s=o*(.75+t()*.25),c=i+Math.cos(r)*s,l=a+Math.sin(r)*s;n===0?e.moveTo(c,l):e.lineTo(c,l)}e.closePath(),e.fill()}e.filter=`blur(4px)`;for(let r=0;r<5;r++)e.fillStyle=t()<.5?`#ffb030`:`#ff8a18`,e.beginPath(),e.ellipse(t()*n,t()*n,10+t()*14,7+t()*9,t()*3,0,Math.PI*2),e.fill();e.filter=`none`}function As(e){return(t,n,r)=>{t.strokeStyle=e,t.lineWidth=1.6;for(let e=0;e<34;e++){let e=n()*r,i=n()*r,a=8+n()*14;t.globalAlpha=.25+n()*.3,t.beginPath(),t.moveTo(e-a,i),t.quadraticCurveTo(e,i-3-n()*3,e+a,i),t.stroke()}t.globalAlpha=1}}function js(e,t,n){e.lineWidth=3;for(let r=0;r<16;r++){let i=t()*n;e.strokeStyle=t()<.5?`rgba(160,110,50,0.35)`:`rgba(255,240,200,0.45)`,e.beginPath(),e.moveTo(-10,i);for(let t=0;t<=n+10;t+=16)e.lineTo(t,i+Math.sin(t*.05+r)*6);e.stroke()}}function Ms(e){return(t,n,r)=>{t.strokeStyle=e,t.lineWidth=1.5,t.globalAlpha=.55;for(let e=0;e<14;e++){let e=n()*r,i=n()*r;t.beginPath(),t.moveTo(e,i);for(let r=0;r<4;r++)e+=(n()-.5)*30,i+=(n()-.5)*30,t.lineTo(e,i);t.stroke()}}}function Ns(e,t,n){e.filter=`blur(2px)`;for(let r=0;r<12;r++)e.fillStyle=t()<.5?`rgba(40,70,60,0.75)`:`rgba(60,85,70,0.7)`,e.beginPath(),e.ellipse(t()*n,t()*n,10+t()*22,6+t()*12,t()*Math.PI,0,Math.PI*2),e.fill();e.filter=`none`}var Ps=[`#56a7c9`,[`#6cbcdc`,`#4495ba`,`#7fcbe6`],{edge:!1,seed:16,extra:As(`#e2f6ff`)}],Fs=[`#2f7aa6`,[`#3a8bb8`,`#25698f`,`#4a9cc6`],{edge:!1,seed:19,extra:As(`#9ed4ee`)}];function Is(){let e=Os(`#8cbf5c`,[`#a3cf70`,`#77ab4c`,`#b5d986`,`#6a9c43`],{strokes:`#5d8f3a`,dots:[`#fff6c8`,`#ffc9d6`,`#ffffff`],dotCount:14,seed:11});return{grass:e,road:e,forest:Os(`#5f9748`,[`#6fa653`,`#4e843c`,`#7cb35c`],{strokes:`#3f7030`,seed:12}),hill:Os(`#a9b96a`,[`#bccb7c`,`#9aa85b`,`#c2a878`,`#b09668`],{strokes:`#7d8c48`,seed:13}),mountain:Os(`#9c9a94`,[`#b3b1aa`,`#86847e`,`#a8a49a`],{seed:14,extra:Ms(`#6a6862`)}),sand:Os(`#e8d49c`,[`#f2e2b2`,`#dcc589`,`#efd9a6`],{dots:[`#c9b07a`],dotCount:30,seed:15}),water:Os(...Ps),deepWater:Os(...Fs),swamp:Os(`#6f7d48`,[`#7d8a52`,`#5c6a3c`,`#86905a`,`#4f5f3e`],{strokes:`#4b5a30`,seed:20,extra:Ns}),ash:Os(`#6e6763`,[`#5a5450`,`#827a74`,`#4e4845`],{dots:[`#ff8a3a`,`#ffb060`,`#3a3532`],dotCount:18,seed:21}),lava:Os(`#ff8a1e`,[`#ffb03a`,`#ff6a10`,`#ffd060`],{edge:!1,seed:22,extra:ks}),dune:Os(`#e6c27c`,[`#efcf8f`,`#d8b06a`,`#f2d9a0`],{seed:23,extra:js}),rock:Os(`#8d8073`,[`#9d9083`,`#7a6e62`,`#a39686`],{dots:[`#6a5f55`],dotCount:20,seed:24,extra:Ms(`#5e544a`)}),snow:Os(`#eef3f7`,[`#dbe6ee`,`#ffffff`,`#cfdce8`],{dots:[`#ffffff`],dotCount:20,seed:25})}}function Ls(e=!1){return Os(...e?Fs:Ps)}function Rs(){return Os(`#c9a46c`,[`#d6b47e`,`#b8925c`,`#ccab75`],{dots:[`#9c7a4c`,`#e2c896`],dotCount:40,seed:17,edge:!1})}function zs(e,t,n=5){let[r,i]=Es(64,128),a=ws(n),o=i.createLinearGradient(0,0,0,128);o.addColorStop(0,e),o.addColorStop(1,t),i.fillStyle=o,i.fillRect(0,0,64,128);for(let e=0;e<60;e++)i.fillStyle=a()<.5?`rgba(0,0,0,0.12)`:`rgba(255,230,190,0.1)`,i.fillRect(a()*64,a()*128,4+a()*10,2+a()*3);return Ds(r,!1)}function Bs(e,t){let[n,r]=Es(64,64),i=r.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,e),i.addColorStop(1,t),r.fillStyle=i,r.fillRect(0,0,64,64),Ds(n,!1)}function Vs(){let[e,t]=Es(16,128),n=t.createLinearGradient(0,128,0,0);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(.6,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,16,128),Ds(e,!1)}var J={uFowTex:{value:null},uFowRadius:{value:0},uFowSize:{value:1},uFowOn:{value:0},uTime:{value:0},uLow:{value:0},uCloudShadow:{value:0},uWind:{value:0},uRim:{value:0},uRimColor:{value:new U(1,.86,.62)},uGlow:{value:1},uExposure:{value:1},uWaterDepth:{value:null},uWaterShallow:{value:new U(`#6fd6d2`)},uWaterMid:{value:new U(`#3a9fd0`)},uWaterDeep:{value:new U(`#2366a8`)},uSkyColor:{value:new U(`#d6eaee`)},uSunDir:{value:new W(-.55,.69,.41)},uWeatherTex:{value:null},uWeatherOn:{value:0},uFlash:{value:0},uTerrainField:{value:null}},Hs=`
varying vec2 vFowPos;
varying vec2 vWorldXZ;
uniform float uTime;
uniform float uWind;
#ifdef FOW_ATTR
attribute vec2 fowPos;
#endif
`,Us=`
#ifdef QK_WIND
{
  vec2 base = vec2(0.0);
  #ifdef USE_INSTANCING
    base = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
  #endif
  float hgt = max(transformed.y, 0.0);
  float ph = base.x * 0.73 + base.y * 0.51;
  float gust = 0.6 + 0.4 * sin(uTime * 0.37 + base.x * 0.05);
  float sway = (sin(uTime * 1.7 + ph) * 0.7 + sin(uTime * 2.9 + ph * 1.3) * 0.3) * gust;
  transformed.xz += vec2(sway, sway * 0.6) * uWind * hgt * hgt * 0.05;
}
#endif
`,Ws=`
{
  vec4 fwp = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    fwp = instanceMatrix * fwp;
  #endif
  vWorldXZ = (modelMatrix * fwp).xz;
  #if defined(FOW_INSTANCE)
    vec4 fo = vec4(0.0, 0.0, 0.0, 1.0);
    #ifdef USE_INSTANCING
      fo = instanceMatrix * fo;
    #endif
    vFowPos = (modelMatrix * fo).xz;
  #elif defined(FOW_ORIGIN)
    vFowPos = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
  #elif defined(FOW_ATTR)
    vFowPos = fowPos;
  #else
    vFowPos = vWorldXZ;
  #endif
}
`,Gs=`
uniform sampler2D uFowTex;
uniform float uFowRadius;
uniform float uFowSize;
uniform float uFowOn;
uniform float uTime;
vec4 fowSample(vec2 p) {
  float qf = (0.5773502692 * p.x - 0.3333333333 * p.y) / ${1 .toFixed(4)};
  float rf = (0.6666666667 * p.y) / ${1 .toFixed(4)};
  float sf = -qf - rf;
  float q = floor(qf + 0.5), r = floor(rf + 0.5), s = floor(sf + 0.5);
  float dq = abs(q - qf), dr = abs(r - rf), ds = abs(s - sf);
  if (dq > dr && dq > ds) q = -r - s; else if (dr > ds) r = -q - s;
  vec2 uv = (vec2(q, r) + uFowRadius + 0.5) / uFowSize;
  return texture2D(uFowTex, uv);
}
uniform float uLow;
uniform float uCloudShadow;
uniform float uWind;
uniform float uRim;
uniform vec3 uRimColor;
uniform float uGlow;
uniform float uExposure;
uniform sampler2D uWaterDepth;
uniform vec3 uWaterShallow;
uniform vec3 uWaterMid;
uniform vec3 uWaterDeep;
uniform vec3 uSkyColor;
uniform vec3 uSunDir;
uniform sampler2D uTerrainField;
uniform sampler2D uWeatherTex;
uniform float uWeatherOn;
uniform float uFlash;
vec2 fieldUv(vec2 p) {
  float qf = (0.5773502692 * p.x - 0.3333333333 * p.y) / ${1 .toFixed(4)};
  float rf = (0.6666666667 * p.y) / ${1 .toFixed(4)};
  return (vec2(qf, rf) + uFowRadius + 0.5) / uFowSize;
}
// 色調對映（Khronos PBR Neutral 的亮部那一半）：0.76 以下原樣、亮部柔柔地壓回 1 以內，白牆、雪頂不再一片死白。
// 原版還會把暗部整體減掉 0.04（給寫實場景用），卡通配色的草地會因此發黑變灰（10-13 主控看圖），這裡拿掉。
vec3 qkTone(vec3 c) {
  c *= uExposure;
  float peak = max(c.r, max(c.g, c.b));
  if (peak < 0.76) return c;
  float d = 0.24;
  float np = 1.0 - d * d / (peak + d - 0.76);
  c *= np / peak;
  float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
  return mix(c, vec3(np), g);
}
float qkHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float qkNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(qkHash(i), qkHash(i + vec2(1, 0)), u.x), mix(qkHash(i + vec2(0, 1)), qkHash(i + vec2(1, 1)), u.x), u.y);
}
`,Ks=`
varying vec2 vFowPos;
varying vec2 vWorldXZ;
${Gs}
`,qs=`
#ifndef FOW_NONE
// 雲影：一大片一大片的影子慢慢飄過地面
if (uCloudShadow > 0.001) {
  vec2 cp = vWorldXZ * 0.045 + vec2(uTime * 0.018, uTime * 0.009);
  float cs = 0.65 * qkNoise(cp) + 0.35 * qkNoise(cp * 2.3 + 5.1);
  gl_FragColor.rgb *= 1.0 - uCloudShadow * smoothstep(0.5, 0.66, cs) * 0.3;
}
if (uFowOn > 0.5) {
  vec4 fw = fowSample(vFowPos);
  #ifdef FOW_ATTR
  if (fw.r < 0.01) discard; // 合併的地點模型：沒探索過的整個不畫（藏在雲霧底下）
  #endif
  vec3 c = gl_FragColor.rgb;
  // 詛咒：染紫，加一點會流動的暗紋
  if (fw.g > 0.004) {
    float n = sin(vWorldXZ.x * 3.1 + uTime * 1.3) * sin(vWorldXZ.y * 2.7 - uTime * 0.9) * 0.5 + 0.5;
    float lumC = dot(c, vec3(0.3, 0.59, 0.11));
    vec3 cursed = vec3(lumC) * vec3(0.52, 0.33, 0.66) + vec3(0.13, 0.01, 0.2) * (0.35 + 0.9 * n);
    c = mix(c, cursed, fw.g * (uLow > 0.5 ? 0.88 : 0.8)); // 其他畫質上面還有一層流動的紫霧，底色淡一點
  }
  float lum = dot(c, vec3(0.3, 0.59, 0.11));
  vec3 seen = mix(vec3(lum), c, 0.5) * vec3(0.50, 0.52, 0.60);
  vec3 dark = vec3(0.025, 0.03, 0.055) + lum * 0.05;
  float L = fw.r;
  c = L > 0.5 ? mix(seen, c, (L - 0.5) * 2.0) : mix(dark, seen, L * 2.0);
  gl_FragColor.rgb = c;
}
#endif
`,Js=`
if (uRim > 0.001) {
  vec3 vdir = normalize(vViewPosition);
  float fr = 1.0 - clamp(dot(normal, vdir), 0.0, 1.0);
  gl_FragColor.rgb += uRimColor * (pow(fr, 3.0) * uRim);
}
`,Ys=`
if (uWeatherOn > 0.5) {
  vec3 wx = texture2D(uWeatherTex, fieldUv(vWorldXZ)).rgb;
  gl_FragColor.rgb *= 1.0 - 0.16 * max(wx.r, wx.b) - 0.1 * wx.b;
  gl_FragColor.rgb += gl_FragColor.rgb * uFlash * 0.55;
}
`,Xs=`
vec3 waterAdd = vec3(0.0);
#ifdef USE_MAP
  vec2 wuv = vWorldXZ * UV_SCALE;
  vec4 w1 = texture2D(map, wuv + vec2(uTime * 0.020, uTime * 0.008));
  vec4 sampledDiffuseColor = w1;
  if (uLow < 0.5) {
    vec4 w2 = texture2D(map, wuv * 1.31 + vec2(-uTime * 0.013, uTime * 0.017));
    float ripple = max(w1.r + w2.r - 1.45, 0.0);
    // 水深
    float qf = (0.5773502692 * vWorldXZ.x - 0.3333333333 * vWorldXZ.y) / ${1 .toFixed(4)};
    float rf = (0.6666666667 * vWorldXZ.y) / ${1 .toFixed(4)};
    float dep = texture2D(uWaterDepth, (vec2(qf, rf) + uFowRadius + 0.5) / uFowSize).r;
    vec3 base = dep < 0.4 ? mix(uWaterShallow, uWaterMid, smoothstep(0.0, 0.4, dep)) : mix(uWaterMid, uWaterDeep, smoothstep(0.4, 1.0, dep));
    // 三角形小面（斜格座標切成三角形）
    vec2 tp = vWorldXZ * 1.6 + vec2(uTime * 0.05, uTime * 0.02);
    vec2 sk = vec2(tp.x + tp.y * 0.57735, tp.y * 1.1547);
    vec2 ci = floor(sk);
    vec2 cf = fract(sk);
    float up = step(cf.y, cf.x);
    float fh = qkHash(ci + up * vec2(17.0, 31.0));
    float shim = 0.5 + 0.5 * sin(uTime * 0.9 + fh * 6.2832);
    base *= 0.9 + 0.14 * fh + 0.07 * shim;
    base += vec3(0.55, 0.8, 0.85) * ripple * 0.5;
    sampledDiffuseColor = vec4(base, 1.0);
    // 天空反射＋太陽閃光（加在打光之後）
    vec3 vd = normalize(cameraPosition - vec3(vWorldXZ.x, 0.1, vWorldXZ.y));
    float fres = pow(1.0 - clamp(vd.y, 0.0, 1.0), 4.0);
    vec3 nf = normalize(vec3((fh - 0.5) * 0.35, 1.0, (qkHash(ci * 1.7 + up) - 0.5) * 0.35));
    float spec = pow(max(dot(reflect(-vd, nf), uSunDir), 0.0), 90.0);
    // 下雨：水面一圈圈雨點漣漪（世界座標小格子，每格一個隨機時間點擴散）
    if (uWeatherOn > 0.5) {
      vec3 wx = texture2D(uWeatherTex, fieldUv(vWorldXZ)).rgb;
      float rr = max(wx.r, wx.b);
      if (rr > 0.02) {
        vec2 rp = vWorldXZ * 2.2;
        vec2 rc = floor(rp);
        float rh = qkHash(rc + 3.7);
        float life = fract(uTime * (0.9 + rh * 0.6) + rh * 7.0);
        vec2 ctr = rc + 0.25 + 0.5 * vec2(qkHash(rc + 1.3), qkHash(rc + 9.1));
        float dd = length(rp - ctr);
        float ring = (1.0 - smoothstep(0.0, 0.035, abs(dd - life * 0.4))) * (1.0 - life) * step(rh, rr * 0.55);
        base += vec3(0.45, 0.55, 0.6) * ring * 0.45;
        sampledDiffuseColor = vec4(base, 1.0);
      }
    }
    waterAdd = uSkyColor * fres * 0.35 + vec3(1.0, 0.95, 0.85) * spec * 0.8 * (0.4 + 0.6 * shim) * min(1.0, dot(uSkyColor, vec3(0.9)));
  }
  diffuseColor *= sampledDiffuseColor;
#endif
`,Zs=`
vec3 lavaGlow = vec3(0.0);
#ifdef USE_MAP
  vec2 luv = vWorldXZ * UV_SCALE;
  vec4 l1 = texture2D(map, luv + vec2(uTime * 0.004, 0.0));
  diffuseColor *= l1;
  float hot = smoothstep(0.45, 0.9, l1.r);
  float pulse = 0.75 + 0.25 * sin(uTime * 2.2 + vWorldXZ.x * 0.7 + vWorldXZ.y * 0.5);
  lavaGlow = l1.rgb * hot * pulse * 1.1;
#endif
`,Qs=`
#ifdef USE_MAP
  float fd = vMapUv.y;
  float wave = fract(fd * 1.2 - uTime * 0.32 + sin(vMapUv.x * 5.0 + uTime * 0.4) * 0.12);
  float band = smoothstep(0.0, 0.12, wave) * (1.0 - smoothstep(0.14, 0.42, wave));
  float fa = (1.0 - fd * 0.85) * (0.35 + 0.9 * band);
  fa *= 0.75 + 0.25 * sin(vMapUv.x * 11.0 + uTime * 1.6);
  fa = min(fa, 0.95);
  fa *= smoothstep(0.0, 0.08, fd); // 貼著岸的那一條稍微淡出，不要切齊
  diffuseColor = vec4(diffuseColor.rgb, diffuseColor.a * fa);
#endif
`,$s=`
#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D(map, vMapUv);
  diffuseColor *= sampledDiffuseColor;
  if (uLow < 0.5) {
    vec2 lp = vWorldXZ - vFowPos;
    float hd = max(abs(lp.x), max(abs(lp.x * 0.5 + lp.y * 0.8660254), abs(lp.x * 0.5 - lp.y * 0.8660254))) / (${1 .toFixed(4)} * 0.8660254);
    float ef = smoothstep(0.55, 1.0, hd);
    if (ef > 0.001) {
      vec3 own = texture2D(uTerrainField, fieldUv(vFowPos)).rgb;
      vec3 fld = texture2D(uTerrainField, fieldUv(vWorldXZ)).rgb;
      own *= own; fld *= fld; // 顏色場存的是開根號後的值（暗色精度比較夠）
      diffuseColor.rgb *= mix(vec3(1.0), fld / max(own, vec3(0.02)), ef * 0.55);
    }
  }
#endif
`,ec=`
#ifdef USE_MAP
  diffuseColor *= texture2D(map, vWorldXZ * UV_SCALE);
#endif
`;function tc(e,t){let n={};t.fow===`instance`?n.FOW_INSTANCE=``:t.fow===`origin`?n.FOW_ORIGIN=``:t.fow===`attr`?n.FOW_ATTR=``:t.fow===`none`&&(n.FOW_NONE=``),(t.water||t.lava||t.worldUv)&&(n.UV_SCALE=(t.uvScale??.18).toFixed(4)),t.wind&&(n.QK_WIND=``);let r=e.isMeshLambertMaterial===!0,i=e;i.defines={...i.defines??{},...n};let a=`p:${t.fow}:${t.water?`w`:``}${t.lava?`l`:``}${t.worldUv?`u`:``}${t.foam?`f`:``}${t.wind?`n`:``}${t.rim?`r`:``}${t.glow?`g`:``}${t.blend?`b`:``}${r?`t`:``}:${t.uvScale??``}`;return e.customProgramCacheKey=()=>a,e.onBeforeCompile=e=>{Object.assign(e.uniforms,J),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Hs}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${Us}`).replace(`#include <project_vertex>`,`#include <project_vertex>\n${Ws}`);let n=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Ks}`);t.water&&(n=n.replace(`#include <map_fragment>`,Xs).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
gl_FragColor.rgb += waterAdd;`)),t.worldUv&&(n=n.replace(`#include <map_fragment>`,ec)),t.blend&&(n=n.replace(`#include <map_fragment>`,$s)),t.foam&&(n=n.replace(`#include <map_fragment>`,Qs)),t.lava&&(n=n.replace(`#include <map_fragment>`,Zs).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
gl_FragColor.rgb += lavaGlow;`));let i=qs;t.rim&&r&&(i+=Js),r?i+=Ys+`gl_FragColor.rgb = qkTone(gl_FragColor.rgb);
`:t.glow&&(i+=`gl_FragColor.rgb *= uGlow;
`),n=n.replace(`#include <opaque_fragment>`,`#include <opaque_fragment>\n${i}`),e.fragmentShader=n},e}var nc=class{size;radius;texture;data;cur;target;animating=!1;constructor(e){this.radius=e,this.size=e*2+1;let t=this.size*this.size;this.data=new Uint8Array(t*4),this.cur=new Float32Array(t*2).fill(1),this.target=new Float32Array(t*2).fill(1);for(let e=0;e<t;e++)this.cur[e*2+1]=0,this.target[e*2+1]=0;this.texture=new nt(this.data,this.size,this.size,In),this.texture.magFilter=dt,this.texture.minFilter=dt,this.texture.generateMipmaps=!1,this.flush()}idx(e,t){let n=e+this.radius,r=t+this.radius;return n<0||r<0||n>=this.size||r>=this.size?-1:r*this.size+n}setLight(e,t,n=!1){for(let n=0;n<this.size;n++)for(let r=0;r<this.size;r++){let i=e(r-this.radius,n-this.radius);this.target[(n*this.size+r)*2]=i??t}this.kick(n)}setCurse(e,t=!1){for(let e=0;e<this.size*this.size;e++)this.target[e*2+1]=0;for(let t of e){let e=this.idx(t.q,t.r);e>=0&&(this.target[e*2+1]=1)}this.kick(t)}lightAt(e,t){let n=this.idx(e,t);return n<0?1:this.target[n*2]}kick(e){e?(this.cur.set(this.target),this.flush(),this.animating=!1):this.animating=!0}update(e){if(!this.animating)return!1;let t=Math.min(1,e*4),n=!1;for(let e=0;e<this.cur.length;e++){let r=this.target[e]-this.cur[e];Math.abs(r)>.004?(this.cur[e]=this.cur[e]+r*t,n=!0):this.cur[e]=this.target[e]}return this.flush(),this.animating=n,n}flush(){let e=this.size*this.size;for(let t=0;t<e;t++)this.data[t*4]=Math.round(this.cur[t*2]*255),this.data[t*4+1]=Math.round(this.cur[t*2+1]*255),this.data[t*4+2]=0,this.data[t*4+3]=255;this.texture.needsUpdate=!0}},rc=.1;function ic(e){let t=e.filter(e=>ac(e.terrain)).map(e=>e.height).sort((e,t)=>e-t),n=e.reduce((e,t)=>Math.min(e,t.height),1/0),r=t.length?t[Math.floor(t.length/2)]:n-.1;return e.map(e=>{if(ac(e.terrain))return rc;let t=e.height-r;return t>.5&&(t=.5+(t-.5)*.6),Math.max(.15000000000000002,rc+t)})}var ac=e=>e===`water`||e===`deepWater`,oc=.08800000000000001,sc={r1_forest:[1,1,1],r2_plains:[1.07,1.04,.86],r2_bog:[.84,.93,.86],r2_isles:[.98,1.03,1.02],r2_burning:[1.04,.88,.82],r3_desert:[1.06,1,.9],r3_badlands:[1,.88,.84],r3_ocean:[1,1,1]},cc={grass:`#8cbf5c`,road:`#8cbf5c`,forest:`#5f9748`,hill:`#a9b96a`,mountain:`#9c9a94`,sand:`#e8d49c`,water:`#56a7c9`,deepWater:`#2f7aa6`,swamp:`#6f7d48`,ash:`#6e6763`,lava:`#ff8a1e`,dune:`#e6c27c`,rock:`#8d8073`,snow:`#eef3f7`},lc=e=>ac(e)?`water`:e===`mountain`||e===`rock`?`stone`:e===`sand`||e===`dune`?`sand`:e===`snow`?`snow`:e===`ash`||e===`lava`?`ash`:`soil`;function uc(){let e=new $t(1,1,1,6,1);return e.translate(0,.5,0),e.clearGroups(),e.addGroup(0,36,0),e.addGroup(36,18,1),e}var dc=class{group=new $e;tiles=new Map;radius;meshes=[];textures=[];materials=[];geos=[];maxHeight;constructor(e){let t=0,n=0,r=ic(e);for(let i=0;i<e.length;i++){let a=e[i],{x:o,z:s}=xs(a.q,a.r),c=r[i];this.tiles.set(bs(a.q,a.r),{tile:a,x:o,z:s,h:c}),t=Math.max(t,Math.abs(a.q),Math.abs(a.r),Math.abs(a.q+a.r)),n=Math.max(n,c)}this.radius=t,this.maxHeight=n,this.span=t*2+1,this.grid=Array(this.span*this.span);for(let e of this.tiles.values())this.grid[(e.tile.r+t)*this.span+(e.tile.q+t)]=e;let i=Is(),a={soil:zs(`#8a6a44`,`#4e3824`,5),stone:zs(`#8a8780`,`#4f4c48`,6),water:zs(`#3d86ad`,`#1f4f6e`,7),sand:zs(`#cdb27c`,`#7d6440`,8),snow:zs(`#e6edf2`,`#7d8a96`,9),ash:zs(`#5a514c`,`#2a2422`,10)};this.textures.push(...new Set(Object.values(i)),...Object.values(a));let o=Object.fromEntries(Object.entries(a).map(([e,t])=>[e,tc(new Qn({map:t}),{fow:`instance`})]));this.materials.push(...Object.values(o));let s=uc();this.geos.push(s);let c=new Map;for(let e of this.tiles.values()){let t=c.get(e.tile.terrain)??[];t.push(e),c.set(e.tile.terrain,t)}let l=new hn,u=new tt,d=new W,f=new W,p=new U;for(let[e,t]of c){let n=this.topMaterial(e,i[e]);this.materials.push(n);let r=new yt(s,[o[lc(e)],n],t.length);t.forEach((e,t)=>{let n=Math.floor(Ts(e.tile.q,e.tile.r,3)*6)*Math.PI/3;u.setFromAxisAngle(new W(0,1,0),n),l.compose(f.set(e.x,0,e.z),u,d.set(1,e.h,1)),r.setMatrixAt(t,l);let i=sc[e.tile.region]??[1,1,1],a=.94+Ts(e.tile.q,e.tile.r,11)*.12;p.setRGB(i[0]*a,i[1]*a,i[2]*a),r.setColorAt(t,p)}),r.userData.terrain=e,r.receiveShadow=!0,r.castShadow=!ac(e),r.computeBoundingSphere(),this.meshes.push(r),this.group.add(r)}this.group.add(this.buildOcean());let m=this.buildRoads();m&&this.group.add(m)}topMaterial(e,t){return ac(e)?tc(new Qn({map:t}),{fow:`instance`,water:!0,uvScale:.18}):e===`lava`?tc(new Qn({map:t}),{fow:`instance`,lava:!0,uvScale:.22}):tc(new Qn({map:t}),{fow:`instance`,blend:!0})}buildOcean(){let e=Ls(!0);this.textures.push(e);let t=tc(new Qn({map:e}),{fow:`fragment`,water:!0,uvScale:.18});this.materials.push(t);let n=new on(900,48).rotateX(-Math.PI/2);this.geos.push(n);let r=new V(n,t);return r.position.y=oc,r.receiveShadow=!0,r.renderOrder=-1,r}buildRoads(){let e=new gs,t=new pt(.4,1).rotateX(-Math.PI/2).translate(0,0,-.5),n=new on(.24,10).rotateX(-Math.PI/2),r=1*vs/2;for(let i of this.tiles.values()){if(i.tile.terrain!==`road`)continue;let a=i.h+.006;e.add(n,`#ffffff`,[i.x,a,i.z]);for(let[n,o]of ys){let s=this.tiles.get(bs(i.tile.q+n,i.tile.r+o));if(!s||s.tile.terrain!==`road`&&!s.tile.location)continue;let c=Math.atan2(s.x-i.x,s.z-i.z);e.add(t,`#ffffff`,[i.x,a,i.z],[0,c+Math.PI,0],[1,1,r+.02])}}if(t.dispose(),n.dispose(),e.empty)return null;let i=Rs();this.textures.push(i);let a=tc(new Qn({map:i,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),{fow:`fragment`,worldUv:!0,uvScale:.35});this.materials.push(a);let o=e.build();this.geos.push(o);let s=new V(o,a);return s.receiveShadow=!0,s}waterDepthTexture(){let e=this.radius+1,t=e*2+1,n=new Map,r=[];for(let e of this.tiles.values())ac(e.tile.terrain)||(n.set(bs(e.tile.q,e.tile.r),0),r.push(e));for(let e=0;e<r.length;e++){let t=r[e],i=n.get(bs(t.tile.q,t.tile.r));if(!(i>=5))for(let[e,a]of ys){let o=this.get(t.tile.q+e,t.tile.r+a);if(!o)continue;let s=bs(o.tile.q,o.tile.r);n.has(s)||(n.set(s,i+1),r.push(o))}}let i=new Uint8Array(t*t*4);for(let r=0;r<t;r++)for(let a=0;a<t;a++){let o=a-e,s=r-e,c=this.get(o,s)?Math.min(5,n.get(bs(o,s))??5)/5:1,l=(r*t+a)*4;i[l]=Math.round(c*255),i[l+1]=0,i[l+2]=0,i[l+3]=255}let a=new nt(i,t,t,In);return a.magFilter=Qt,a.minFilter=Qt,a.generateMipmaps=!1,a.needsUpdate=!0,this.textures.push(a),a}terrainFieldTexture(){let e=this.radius+1,t=e*2+1,n=new Uint8Array(t*t*4),r=new U;for(let i=0;i<t;i++)for(let a=0;a<t;a++){let o=this.get(a-e,i-e);if(r.set(o?cc[o.tile.terrain]:`#56a7c9`),o){let e=sc[o.tile.region]??[1,1,1];r.r*=e[0],r.g*=e[1],r.b*=e[2]}let s=(i*t+a)*4;n[s]=Math.min(255,Math.round(Math.sqrt(r.r)*255)),n[s+1]=Math.min(255,Math.round(Math.sqrt(r.g)*255)),n[s+2]=Math.min(255,Math.round(Math.sqrt(r.b)*255)),n[s+3]=255}let i=new nt(n,t,t,In);return i.magFilter=Qt,i.minFilter=Qt,i.generateMipmaps=!1,i.needsUpdate=!0,this.textures.push(i),i}grid;span;get(e,t){let n=this.radius;if(!(e<-n||e>n||t<-n||t>n))return this.grid[(t+n)*this.span+(e+n)]}pick(e){let t=this.maxHeight+.05,n=e.direction.y;if(n>=-1e-4)return null;let r=Math.max(0,(t-e.origin.y)/n),i=(0-e.origin.y)/n,a=new W;for(let t=r;t<=i;t+=.03){e.at(t,a);let n=Ss(a.x,a.z),r=this.get(n.q,n.r);if(r&&a.y<=r.h)return r}return null}dispose(){for(let e of this.textures)e.dispose();for(let e of this.materials)e.dispose();for(let e of this.geos)e.dispose();for(let e of this.meshes)e.dispose()}},fc={r1_forest:`forest`,r2_plains:`plains`,r2_bog:`bog`,r2_isles:`isles`,r2_burning:`burning`,r3_desert:`desert`,r3_badlands:`badlands`,r3_ocean:`ocean`},pc=new $t(.15,.64,1,9).translate(0,.5,0),Y={trunk:`#7a5434`,trunkDark:`#4a3424`,leaf:`#5a9a42`,leafDark:`#3f7d35`,pine:`#3f7a3a`,snow:`#f4f7fa`,dead:`#7d6b5a`,charred:`#2c2622`,rock:`#9a978f`,redRock:`#a8644a`,sandstone:`#d0a873`,reed:`#a3a35a`,reedTip:`#6b4a2a`,lily:`#5f9a4a`,cactus:`#5f9a4e`,bump:`#a8b868`,dune:`#e2bd78`,ember:`#ff7a20`,obsidian:`#2a2026`,palm:`#4f9a3c`,mush:`#d0453a`,ice:`#bfe4f5`,wheat:`#e6c65a`},mc={treeRound:e=>{e.add(q.cyl6,Y.trunk,[0,0,0],void 0,[.11,.34,.11]),e.add(q.ico1,Y.leaf,[0,.47,0],void 0,[.52,.56,.52])},treePine:e=>{e.add(q.cyl6,Y.trunk,[0,0,0],void 0,[.09,.3,.09]),e.add(q.cone8,Y.pine,[0,.2,0],void 0,[.5,.5,.5]),e.add(q.cone8,Y.pine,[0,.42,0],void 0,[.36,.42,.36])},treeSnowPine:e=>{e.add(q.cyl6,Y.trunk,[0,0,0],void 0,[.09,.3,.09]),e.add(q.cone8,`#3d6b46`,[0,.2,0],void 0,[.5,.5,.5]),e.add(q.cone8,Y.snow,[0,.42,0],void 0,[.37,.42,.37]),e.add(q.cone8,Y.snow,[0,.34,0],void 0,[.44,.08,.44])},treeDead:e=>{e.add(q.cyl6,Y.dead,[0,0,0],void 0,[.08,.6,.08]),e.add(q.cyl6,Y.dead,[.02,.32,0],[0,0,-.9],[.05,.3,.05]),e.add(q.cyl6,Y.dead,[-.02,.42,0],[.2,0,.8],[.04,.24,.04]),e.add(q.cyl6,Y.dead,[0,.5,.02],[.9,0,0],[.035,.18,.035])},treeCharred:e=>{e.add(q.cyl6,Y.charred,[0,0,0],void 0,[.09,.5,.09]),e.add(q.cyl6,Y.charred,[.02,.28,0],[0,0,-.8],[.05,.24,.05]),e.add(q.cyl6,Y.charred,[-.02,.34,0],[0,0,.9],[.04,.2,.04]),e.add(q.ico0,Y.ember,[0,.5,0],void 0,.05)},treePalm:e=>{for(let t=0;t<4;t++)e.add(q.cyl6,`#9a7a4e`,[t*.025,t*.15,0],[0,0,-.12*t],[.07-t*.008,.16,.07-t*.008]);for(let t=0;t<5;t++){let n=t/5*Math.PI*2;e.add(q.cone4,Y.palm,[.1+Math.cos(n)*.14,.6,Math.sin(n)*.14],[Math.sin(n)*1.3,0,-Math.cos(n)*1.3],[.12,.34,.06])}},mushroom:e=>{e.add(q.cyl6,`#f0e6d0`,[0,0,0],void 0,[.05,.12,.05]),e.add(q.halfSphere,Y.mush,[0,.1,0],void 0,[.18,.14,.18])},bush:e=>{e.add(q.ico0,Y.leaf,[0,.08,0],void 0,[.26,.2,.26]),e.add(q.ico0,Y.leafDark,[.1,.06,.05],void 0,[.18,.15,.18])},wheat:e=>{for(let t=0;t<5;t++)e.add(q.cone6,Y.wheat,[(t%3-1)*.07,0,(Math.floor(t/3)-.5)*.08],[.1*(t-2),0,.08*(t-2)],[.05,.22,.05])},tuft:e=>{for(let t=0;t<5;t++){let n=t*1.26;e.add(q.cone4,t%2?`#7fb24a`:`#6aa040`,[Math.cos(n)*.04,0,Math.sin(n)*.04],[Math.sin(n)*.35,0,Math.cos(n)*.35],[.035,.16+t%3*.04,.02])}},flowers:e=>{let t=[`#f4e36a`,`#f7f2ea`,`#e98ab0`,`#b9a2ee`];for(let n=0;n<4;n++){let r=n*1.7,i=.05+n%2*.05;e.add(q.cyl6,`#5f9a3e`,[Math.cos(r)*i,0,Math.sin(r)*i],void 0,[.008,.1,.008]),e.add(q.ico0,t[n%t.length],[Math.cos(r)*i,.1,Math.sin(r)*i],void 0,.028)}},rock:e=>{e.add(q.dodeca,Y.rock,[0,.06,0],[.4,.3,0],[.28,.2,.26])},redRock:e=>{e.add(q.dodeca,Y.redRock,[0,.08,0],[.3,.6,0],[.32,.26,.3]),e.add(q.dodeca,`#8e5038`,[.12,.04,.06],[.1,.2,.5],.14)},snowRock:e=>{e.add(q.dodeca,`#8a8f96`,[0,.07,0],[.4,.3,0],[.3,.22,.28]),e.add(q.dodeca,Y.snow,[0,.14,0],[.4,.3,0],[.24,.1,.22])},iceShard:e=>{e.add(q.octa,Y.ice,[0,.12,0],[.2,0,.15],[.1,.3,.1]),e.add(q.octa,`#d8f2ff`,[.08,.07,.04],[0,0,-.4],[.06,.18,.06])},spire:e=>{e.add(q.cone6,`#8a7a6a`,[0,0,0],void 0,[.3,.75,.3]),e.add(q.cone6,`#a08c78`,[.14,0,.08],void 0,[.18,.42,.18])},hillBump:e=>{e.add(q.halfSphere,Y.bump,[0,0,0],void 0,[.62,.36,.62])},duneBump:e=>{e.add(q.halfSphere,Y.dune,[0,0,0],void 0,[.9,.22,.5])},peak:e=>{e.add(q.cone8,`#9a978f`,[0,0,0],void 0,[1.2,1.25,1.2]),e.add(q.cone8,`#85827b`,[.32,0,.18],void 0,[.7,.75,.7]),e.add(q.cone8,Y.snow,[0,.82,0],void 0,[.5,.43,.5]),e.add(q.cone8,Y.snow,[.32,.47,.18],void 0,[.27,.28,.27])},peakSand:e=>{e.add(q.cone8,Y.sandstone,[0,0,0],void 0,[1.2,1.15,1.2]),e.add(q.cone8,`#b88c5a`,[.3,0,-.2],void 0,[.7,.7,.7]),e.add(q.cone8,Y.snow,[0,.83,0],void 0,[.34,.32,.34])},peakVolcano:e=>{e.add(pc,`#3d3330`,[0,0,0],void 0,[1,1,1]),e.add(q.cone8,`#2c2422`,[-.36,0,.22],void 0,[.6,.55,.6]),e.add(q.cone8,`#4a3e3a`,[.3,0,-.25],void 0,[.45,.4,.45])},reeds:e=>{for(let t=0;t<6;t++){let n=t*1.1,r=.05+t%3*.04;e.add(q.cyl6,Y.reed,[Math.cos(n)*r,0,Math.sin(n)*r],[Math.sin(n)*.15,0,Math.cos(n)*.15],[.02,.3+t%2*.1,.02]),t%2==0&&e.add(q.cyl6,Y.reedTip,[Math.cos(n)*r,.26+t%2*.1,Math.sin(n)*r],void 0,[.035,.08,.035])}},lily:e=>{e.add(q.cyl12,Y.lily,[0,.005,0],void 0,[.18,.01,.18]),e.add(q.ico0,`#f5c0d0`,[.03,.02,.02],void 0,.04)},cactus:e=>{e.add(q.cyl8,Y.cactus,[0,0,0],void 0,[.12,.5,.12]),e.add(q.halfSphere,Y.cactus,[0,.5,0],void 0,[.12,.08,.12]),e.add(q.cyl8,Y.cactus,[.1,.22,0],[0,0,Math.PI/2],[.07,.1,.07]),e.add(q.cyl8,Y.cactus,[.13,.22,0],void 0,[.07,.15,.07]),e.add(q.cyl8,Y.cactus,[-.1,.3,0],[0,0,-Math.PI/2],[.06,.1,.06]),e.add(q.cyl8,Y.cactus,[-.13,.3,0],void 0,[.06,.12,.06])},stump:e=>{e.add(q.cyl6,Y.charred,[0,0,0],void 0,[.13,.12,.13]),e.add(q.dodeca,`#3a3330`,[.14,.03,.05],void 0,.09)},obsidian:e=>{e.add(q.dodeca,Y.obsidian,[0,.06,0],[.5,.2,.3],[.26,.18,.22])}},hc={emberCrack:e=>{e.add(q.box,`#ff7a1a`,[0,.003,0],[0,.3,0],[.42,.01,.035]),e.add(q.box,`#ffb040`,[.12,.003,.06],[0,-.6,0],[.22,.01,.03]),e.add(q.box,`#ff8a20`,[-.1,.003,-.05],[0,1,0],[.2,.01,.028])},volcanoGlow:e=>{e.add(q.cyl8,`#ffa030`,[0,.995,0],void 0,[.26,.02,.26]);for(let t=0;t<3;t++){let n=t*2.1+.4;e.add(q.box,`#ff6a14`,[Math.cos(n)*.3,.6,Math.sin(n)*.3],[0,-n,.6],[.05,.62,.06])}}},gc=new Set([`treeRound`,`treePine`,`treeSnowPine`,`treePalm`,`treeDead`,`bush`,`wheat`,`reeds`,`tuft`,`flowers`]),_c=class{group=new $e;geos=[];mats=[];meshes=[];constructor(e){let t=[],n=[];for(let r of e)this.place(r,t),this.placeExtra(r,n);let r=tc(new Qn({vertexColors:!0,flatShading:!0}),{fow:`instance`}),i=tc(new Qn({vertexColors:!0,flatShading:!0}),{fow:`instance`,wind:!0}),a=tc(new Kn({vertexColors:!0,toneMapped:!1}),{fow:`instance`,glow:!0});this.mats.push(r,i,a);let o=new Map,s=new Map;for(let e of t){let t=o.get(e.kind)??[];t.push(e),o.set(e.kind,t)}for(let e of n){let t=s.get(e.kind)??[];t.push(e),s.set(e.kind,t),o.has(e.kind)||o.set(e.kind,[])}let c=new hn,l=new tt,u=new W,d=new W,f=new U,p=new W(0,1,0),m=e=>e.map((e,t)=>({p:e,k:Ts(Math.round(e.x*100),Math.round(e.z*100),t)})).sort((e,t)=>e.k-t.k).map(e=>e.p);for(let[e,t]of o){let n=m(t),o=[...n,...m(s.get(e)??[])],h=e in hc,g=h?hc[e]:mc[e],_=new gs;g(_);let v=_.build();this.geos.push(v);let y=new yt(v,h?a:gc.has(e)?i:r,o.length);y.userData.base=n.length,y.userData.procGeo=v,o.forEach((e,t)=>{if(l.setFromAxisAngle(p,e.rot),c.compose(d.set(e.x,e.y,e.z),l,u.setScalar(e.scale)),y.setMatrixAt(t,c),e.key){let n=this.byTile.get(e.key)??[];n.push({mesh:y,i:t}),this.byTile.set(e.key,n)}y.setColorAt(t,f.setScalar(e.tint))}),y.castShadow=!h&&e!==`lily`&&e!==`tuft`&&e!==`flowers`,y.receiveShadow=!h,y.computeBoundingSphere(),y.userData.kind=e,this.meshes.push(y),this.group.add(y)}}place(e,t){let n=e.tile;if(n.location)return;let r=`${n.q},${n.r}`,i=ws(Math.floor(Ts(n.q,n.r,77)*4294967295)),a=fc[n.region]??`forest`,o=(n,a=.38,o=.7,s=1)=>{let c=i()*Math.PI*2,l=a+(o-a)*i();t.push({key:r,kind:n,x:e.x+Math.cos(c)*l,y:e.h,z:e.z+Math.sin(c)*l,rot:i()*Math.PI*2,scale:s*(.8+i()*.45),tint:.86+i()*.24})},s=(n,a=1)=>{t.push({key:r,kind:n,x:e.x+(i()-.5)*.2,y:e.h,z:e.z+(i()-.5)*.2,rot:i()*Math.PI*2,scale:a*(.85+i()*.35),tint:.9+i()*.15})},c=e=>i()<e,l=()=>{switch(a){case`bog`:return c(.45)?`treeDead`:`treeRound`;case`isles`:case`ocean`:return c(.55)?`treePalm`:`treeRound`;case`burning`:return`treeCharred`;case`desert`:return c(.5)?`treePalm`:`cactus`;case`badlands`:return c(.6)?`treeDead`:`treePine`;case`plains`:return c(.75)?`treeRound`:`treePine`;default:return c(.5)?`treeRound`:`treePine`}};switch(n.terrain){case`grass`:a===`plains`?(c(.35)&&o(`wheat`),c(.15)&&o(`bush`),c(.12)&&o(l())):a===`bog`?(c(.4)&&o(`reeds`),c(.15)&&o(`treeDead`),c(.15)&&o(`mushroom`)):a===`burning`?(c(.25)&&o(`stump`),c(.15)&&o(`treeCharred`)):a===`desert`?(c(.2)&&o(`cactus`),c(.2)&&o(`rock`,.3,.7,.7)):a===`badlands`?(c(.35)&&o(`redRock`,.3,.7,.8),c(.12)&&o(`treeDead`)):(c(.3)&&o(l()),c(.2)&&o(`rock`,.3,.7,.6),c(.15)&&o(`bush`));break;case`road`:c(.15)&&o(`rock`,.5,.75,.5),c(.15)&&o(`bush`,.55,.75,.8);break;case`forest`:{let e=3+Math.floor(i()*3);for(let t=0;t<e;t++)o(l(),.36,.72,.95);a===`bog`&&c(.6)&&o(`mushroom`),a===`forest`&&c(.3)&&o(`bush`);break}case`hill`:for(let e=0;e<2;e++)o(`hillBump`,.35,.55,1);o(a===`badlands`||a===`desert`?`redRock`:`rock`),a===`forest`&&c(.4)&&o(`treePine`);break;case`mountain`:if(a===`burning`){s(`peakVolcano`);let e=t[t.length-1];t.push({...e,kind:`volcanoGlow`,tint:1})}else s(a===`desert`?`peakSand`:`peak`);o(a===`badlands`?`redRock`:`rock`,.5,.75,1.3),o(`rock`,.5,.75,1.1);break;case`snow`:{let e=1+Math.floor(i()*3);for(let t=0;t<e;t++)o(`treeSnowPine`,.38,.72);c(.5)&&o(`snowRock`),c(.35)&&o(`iceShard`);break}case`sand`:c(.25)&&o(`rock`,.3,.7,.6),(a===`isles`||a===`ocean`)&&c(.25)&&o(`treePalm`),a===`desert`&&c(.2)&&o(`cactus`);break;case`dune`:o(`duneBump`,.3,.55),c(.5)&&o(`duneBump`,.4,.65,.8),c(.15)&&o(`cactus`);break;case`rock`:o(`spire`,.35,.6,1),c(.5)&&o(`spire`,.4,.7,.7),o(a===`badlands`?`redRock`:`rock`,.3,.7);break;case`swamp`:o(`reeds`),c(.6)&&o(`reeds`),o(`lily`,.2,.7),c(.5)&&o(`lily`,.2,.7),c(.3)&&o(`treeDead`);break;case`ash`:o(`stump`),c(.5)&&o(`stump`),o(`emberCrack`,.15,.55,1),c(.4)&&o(`treeCharred`),c(.4)&&o(`obsidian`,.3,.7,.8);break;case`lava`:c(.7)&&o(`obsidian`,.3,.7,1),c(.4)&&o(`obsidian`,.3,.7,.7)}}byTile=new Map;hidden=new Map;setHiddenTiles(e){let t=new Set(e),n=new Set;for(let[e,r]of this.hidden)if(!t.has(e)){for(let e of r)e.mesh.setMatrixAt(e.i,e.m),n.add(e.mesh);this.hidden.delete(e)}let r=new hn().makeScale(0,0,0);for(let e of t){if(this.hidden.has(e))continue;let t=this.byTile.get(e);if(!t)continue;let i=t.map(({mesh:e,i:t})=>{let i=new hn;return e.getMatrixAt(t,i),e.setMatrixAt(t,r),n.add(e),{mesh:e,i:t,m:i}});this.hidden.set(e,i)}for(let e of n)e.instanceMatrix.needsUpdate=!0}setDensity(e){for(let t of this.meshes){let n=t.instanceMatrix.count,r=t.userData.base??n,i=t.userData.kind===`peak`||t.userData.kind===`peakSand`||t.userData.kind===`peakVolcano`||t.userData.kind===`volcanoGlow`?r:e<=1?Math.round(r*e):r+Math.round((n-r)*Math.min(1,e-1));t.count=Math.max(1,Math.min(n,i)),t.visible=i>0}}placeExtra(e,t){let n=e.tile;if(n.location)return;let r=`${n.q},${n.r}`,i=ws(Math.floor(Ts(n.q,n.r,177)*4294967295)),a=fc[n.region]??`forest`,o=(n,a=.4,o=.74,s=1)=>{let c=i()*Math.PI*2,l=a+(o-a)*i();t.push({key:r,kind:n,x:e.x+Math.cos(c)*l,y:e.h,z:e.z+Math.sin(c)*l,rot:i()*Math.PI*2,scale:s*(.8+i()*.45),tint:.86+i()*.24})},s=a===`forest`||a===`plains`||a===`isles`;switch(n.terrain){case`forest`:(a===`forest`||a===`plains`)&&(o(i()<.5?`treeRound`:`treePine`,.42,.76,.8),o(`bush`,.4,.76)),s&&(o(`tuft`),o(`tuft`));break;case`grass`:s&&(o(`tuft`,.3),o(`tuft`,.3),o(`tuft`,.3),i()<.6&&o(`flowers`,.3),i()<.4&&o(`flowers`,.3)),a===`plains`&&o(`wheat`,.35),a===`bog`&&o(`reeds`,.35);break;case`road`:s&&(o(`tuft`,.55,.78),i()<.4&&o(`flowers`,.55,.78));break;case`hill`:s&&(o(`tuft`,.3),o(`tuft`,.3),i()<.5&&o(`flowers`,.3));break;case`sand`:(a===`isles`||a===`ocean`)&&i()<.5&&o(`tuft`,.3);break;case`swamp`:o(`reeds`,.3),i()<.5&&o(`tuft`,.3)}}heights(){let e={};for(let t of this.meshes){let n=t.userData.procGeo;n.boundingBox||n.computeBoundingBox(),e[t.userData.kind]=n.boundingBox.max.y-Math.max(0,n.boundingBox.min.y)}return e}useModels(e){for(let t of this.meshes){let n=e?.get(t.userData.kind)??t.userData.procGeo;t.geometry!==n&&(t.geometry=n,t.computeBoundingSphere())}}dispose(){for(let e of this.meshes)e.geometry=e.userData.procGeo;for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose();for(let e of this.meshes)e.dispose()}};function vc(e,t,n,r,i,a){let o=new pt(t,n);for(let t of[0,Math.PI]){let n=t?-.004:.004;e.add(o,r,[i[0],i[1],i[2]+n],[0,t+.55,0]),a&&e.add(o,a,[i[0],i[1],i[2]+n*2],[0,t+.55,0],[1,.25,1])}o.dispose()}function yc(e=`fishing`){let t=new gs;switch(e){case`raft`:for(let e=-2;e<=2;e++)t.add(q.cyl8,e%2?`#9a6a3c`:`#8a5a32`,[e*.05,.025,-.24],[Math.PI/2,0,0],[.05,.48,.05]);t.add(q.box,`#5a3a22`,[0,.05,.12],void 0,[.26,.012,.025]),t.add(q.box,`#5a3a22`,[0,.05,-.12],void 0,[.26,.012,.025]),t.add(q.cyl6,`#6b4a2e`,[.14,.05,-.05],[.9,0,.3],[.015,.36,.015]),t.add(q.box,`#6b4a2e`,[.2,0,.2],[.9,0,.3],[.05,.08,.012]);break;case`merchant`:t.add(q.box,`#7a4a28`,[0,0,-.05],void 0,[.3,.1,.7]),t.add(q.cone4,`#7a4a28`,[0,0,.3],[Math.PI/2,0,0],[.423,.2,.141]),t.add(q.box,`#b08048`,[0,.1,-.05],void 0,[.32,.02,.7]),t.add(q.box,`#e8d8b0`,[0,.12,-.3],void 0,[.24,.12,.16]),t.add(q.box,`#a0402a`,[0,.24,-.3],void 0,[.27,.025,.19]);for(let e of[.12,-.12])t.add(q.cyl6,`#5a4a3a`,[0,.1,e],void 0,[.022,.55,.022]),vc(t,.3,.26,`#f4ecd6`,[0,.42,e],`#3f6fa8`);break;case`armored`:t.add(q.box,`#3a3230`,[0,0,-.03],void 0,[.3,.12,.64]),t.add(q.cone4,`#3a3230`,[0,0,.29],[Math.PI/2,0,0],[.423,.2,.1692]),t.add(q.box,`#7a7672`,[0,.06,-.03],void 0,[.31,.03,.62]),t.add(q.cone6,`#a8a49c`,[0,.05,.42],[Math.PI/2,0,0],[.05,.14,.05]);for(let e of[-1,1])for(let n=0;n<3;n++)t.add(q.cyl12,n%2?`#b0362a`:`#d8b040`,[e*.155,.08,-.2+n*.17],[0,0,Math.PI/2],[.09,.012,.09]);t.add(q.box,`#5a5250`,[0,.12,-.03],void 0,[.3,.02,.62]),t.add(q.cyl6,`#2a2220`,[0,.12,.02],void 0,[.026,.55,.026]),vc(t,.32,.28,`#a82a22`,[0,.45,.02],`#2a1a18`);break;default:t.add(q.box,`#8a5a32`,[0,0,0],void 0,[.22,.07,.5]),t.add(q.cone4,`#8a5a32`,[0,0,.25],[Math.PI/2,0,0],[.3102,.16,.07*1.41]),t.add(q.box,`#a8743f`,[0,.07,0],void 0,[.24,.02,.5]),t.add(q.cyl6,`#5a4a3a`,[0,.07,.04],void 0,[.02,.4,.02]),vc(t,.24,.13,`#f2ead8`,[0,.36,.04]),vc(t,.24,.13,`#c8463a`,[0,.23,.04])}return t.build()}var bc={raft:.05,fishing:.07,merchant:.1,armored:.13};function xc(){let e=new gs;e.add(q.box,`#9a6a3c`,[0,0,0],void 0,[.82,.46,.82]),e.add(q.box,`#6b4a2e`,[0,.46,0],void 0,[.88,.05,.88]);for(let t=0;t<4;t++)e.add(q.box,`#7a5232`,[0,.06+t*.1,0],void 0,[.83,.022,.83]);for(let[t,n]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let r=new W(t*.24,1.98,n*.24),i=new W(t*.4,.5,n*.4),a=r.clone().add(i).multiplyScalar(.5),o=r.distanceTo(i),s=new tt().setFromUnitVectors(new W(0,1,0),r.clone().sub(i).normalize()),c=new Xe().setFromQuaternion(s);e.add(new $t(.012,.012,1,4),`#4a3a2a`,[a.x,a.y,a.z],[c.x,c.y,c.z],[1,o,1])}e.add(q.cyl8,`#6a6a70`,[0,1.86,0],void 0,[.16,.12,.16]);for(let t=0;t<8;t++){let n=new Fn(.85,4,12,t/8*Math.PI*2,Math.PI*2/8,0,Math.PI*.78);e.add(n,t%2?`#f4ecd6`:`#d0402a`,[0,3,0],void 0,[1.1,1.2,1.1]),n.dispose()}let t=new $t(.55,.3,.26,16,1,!0);return e.add(t,`#d0402a`,[0,2.09,0],void 0,[1.1,1,1.1]),e.add(t,`#a02a1a`,[0,2.09,0],[Math.PI,0,0],[1.08,1,1.08]),t.dispose(),e.add(q.cyl12,`#e8b030`,[0,2.2,0],void 0,[1.24,.05,1.24]),e.build()}var Sc=class{pos=[];col=[];tri(e,t,n,r,i){let a=t[0]-e[0],o=t[1]-e[1],s=t[2]-e[2],c=n[0]-e[0],l=n[1]-e[1],u=n[2]-e[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c;if(d*d+f*f+p*p<1e-14)return;let m=d*i[0]+f*i[1]+p*i[2]<0?[e,n,t]:[e,t,n],h=typeof r==`number`?r:r.r,g=typeof r==`number`?r:r.g,_=typeof r==`number`?r:r.b;for(let e of m)this.pos.push(e[0],e[1],e[2]),this.col.push(h,g,_)}quad(e,t,n,r,i,a){this.tri(e,t,n,i,a),this.tri(e,n,r,i,a)}build(){let e=new nn;return e.setAttribute(`position`,new ft(this.pos,3)),e.setAttribute(`color`,new ft(this.col,3)),e.computeVertexNormals(),e}},Cc=e=>.42*e+.58*e*e,wc=new Map;function Tc(e,t,n,r=.1){e=Math.max(1,Math.round(e*10)/10);let i=`${e}|${t}|${n}|${r}`,a=wc.get(i);if(a)return a;let o=e/2,s=.5,c=t,l=n===0?[0,.5,1]:n===1?[0,.34,.67,1]:[0,.25,.5,.75,1];c>0&&c<1&&!l.includes(c)&&(l.push(c),l.sort((e,t)=>e-t));let u=n===0?0:n===1?6:8,d=n===0?0:.03,f=e=>o-s*Math.min(e,c),p=new Sc,m=(e,t)=>r*(1-e)*(1-e)*t**4,h=.07;for(let e of[1,-1]){let t=Math.max(1,Math.round(2*o*u)),n=(t,n,r)=>[-f(t)+2*f(t)*n,Cc(t)+m(t,Math.abs(2*n-1))+r,e*s*(1-t)],r=[0,1,e];for(let e=0;e<l.length-1;e++){let i=l[e],a=l[e+1];for(let e=0;e<t;e++){let o=e/t,s=(e+1)/t;if(d>0){let e=(o+s)/2;p.quad(n(i,o,0),n(i,e,d),n(a,e,d*(1-a*.5)),n(a,o,0),1,r),p.quad(n(i,e,d),n(i,s,0),n(a,s,0),n(a,e,d*(1-a*.5)),.86,r)}else p.quad(n(i,o,0),n(i,s,0),n(a,s,0),n(a,o,0),1,r)}}let i=Math.max(1,Math.round(2*o*Math.max(2,u/2)));for(let t=0;t<i;t++){let r=n(0,t/i,0),a=n(0,(t+1)/i,0);p.quad(r,a,[a[0],a[1]-h,a[2]],[r[0],r[1]-h,r[2]],.72,[0,0,e])}if(c===0)for(let e of[0,1])for(let t=0;t<l.length-1;t++){let r=n(l[t],e,0),i=n(l[t+1],e,0);p.quad(r,i,[i[0],i[1]-h,i[2]],[r[0],r[1]-h,r[2]],.72,[e?1:-1,0,0])}}if(c>0)for(let e of[1,-1]){let t=(t,n,r)=>{let i=s*(1-t);return[e*f(t),Cc(t)+m(t,Math.abs(2*n-1))+r,-i+2*i*n]},n=Math.max(1,Math.round(2*s*u)),r=[e,1,0];for(let e=0;e<l.length-1&&l[e]<c;e++){let i=l[e],a=l[e+1];for(let e=0;e<n;e++){let o=e/n,s=(e+1)/n;if(d>0){let e=(o+s)/2;p.quad(t(i,o,0),t(i,e,d),t(a,e,d*(1-a*.5)),t(a,o,0),1,r),p.quad(t(i,e,d),t(i,s,0),t(a,s,0),t(a,e,d*(1-a*.5)),.86,r)}else p.quad(t(i,o,0),t(i,s,0),t(a,s,0),t(a,o,0),1,r)}}let i=Math.max(1,Math.round(2*s*Math.max(2,u/2)));for(let n=0;n<i;n++){let r=t(0,n/i,0),a=t(0,(n+1)/i,0);p.quad(r,a,[a[0],a[1]-h,a[2]],[r[0],r[1]-h,r[2]],.72,[e,0,0])}}p.quad([-o,-.07,-.5],[o,-.07,-.5],[o,-.07,s],[-o,-.07,s],.42,[0,-1,0]);let g=f(1),_=(e,t,n,r,i,a)=>{let o=[[e,n,-i],[t,n,-i],[t,n,i],[e,n,i],[e,n+r,-i],[t,n+r,-i],[t,n+r,i],[e,n+r,i]];p.quad(o[4],o[5],o[6],o[7],a,[0,1,0]),p.quad(o[0],o[1],o[5],o[4],a*.85,[0,0,-1]),p.quad(o[3],o[2],o[6],o[7],a*.85,[0,0,1]),p.quad(o[0],o[3],o[7],o[4],a*.8,[-1,0,0]),p.quad(o[1],o[2],o[6],o[5],a*.8,[1,0,0])};if(g>.01){if(_(-g-.02,g+.02,.97,.09,.07,.7),n>0)for(let e of[-1,1])_(e*g-.05,e*g+.05,1,.16,.06,.62)}else _(-.06,.06,.95,.12,.06,.7);let v=p.build(),y=null;if(c<1){let e=new Sc,t=new U(`#efe7d4`),n=new U(`#4e3626`),r=l.filter(e=>e>=c);for(let i of[1,-1]){let a=i*(f(c)-(c===0?.06:.03)),o=Cc(c)-(c===0?0:.01),l=s*(1-c)-.02;e.quad([a,o-.03,-l],[a,o-.03,l],[a,o+.04,l],[a,o+.04,-l],n,[i,0,0]);for(let n=0;n<r.length-1;n++){let o=r[n],c=r[n+1],l=s*(1-o)-.02,u=Math.max(0,s*(1-c)-.02),d=Cc(o)-.02,f=Cc(c)-.02;e.quad([a,d,-l],[a,d,l],[a,f,u],[a,f,-u],t,[i,0,0])}}y=e.build()}let b={roof:v,gable:y};return wc.set(i,b),b}var Ec=new W(0,1,0),Dc=new tt,Oc=new hn,kc=new W,Ac=new W,jc=new tt,Mc=new Xe,Nc=new W,X=class e{b;at;rot;cos;sin;constructor(e,t,n){this.b=e,this.at=t,this.rot=n,this.cos=Math.cos(n),this.sin=Math.sin(n)}p(e,t,n){return[this.at[0]+e*this.cos+n*this.sin,this.at[1]+t,this.at[2]-e*this.sin+n*this.cos]}add(e,t,n,r,i=[0,0,0],a=this.b){let o=this.p(n[0],n[1],n[2]);return Dc.setFromAxisAngle(Ec,this.rot).multiply(jc.setFromEuler(Mc.set(i[0],i[1],i[2]))),typeof r==`number`?Ac.set(r,r,r):Ac.set(r[0],r[1],r[2]),a.addMatrix(e,t,Oc.compose(kc.set(o[0],o[1],o[2]),Dc,Ac)),this}rod(e,t,n,r,i=this.b,a=q.cyl6){let o=this.p(t[0],t[1],t[2]),s=this.p(n[0],n[1],n[2]);Nc.set(s[0]-o[0],s[1]-o[1],s[2]-o[2]);let c=Nc.length();return c<1e-6||(Dc.setFromUnitVectors(Ec,Nc.multiplyScalar(1/c)),i.addMatrix(a,e,Oc.compose(kc.set(o[0],o[1],o[2]),Dc,Ac.set(r,c,r)))),this}box(e,t,n,r=[0,0,0],i=this.b){return this.add(q.box,e,t,n,r,i)}sub(t,n,r,i=0,a=this.b){return new e(a,this.p(t,n,r),this.rot+i)}};function Pc(e,t,n,r,i,a,o,s,c=.1,l=e.b){let u=0;n<r&&([n,r]=[r,n],u=Math.PI/2);let d=Tc(n/r,o,s,c),f=e.p(t[0],t[1],t[2]);Dc.setFromAxisAngle(Ec,e.rot+u),Oc.compose(kc.set(f[0],f[1],f[2]),Dc,Ac.set(r,i,r)),l.addColored(d.roof,Oc,a),d.gable&&l.addColored(d.gable,Oc)}var Z={plaster:`#f1ead8`,wood:`#5b4030`,woodDark:`#3e2c20`,pillar:`#4a3424`,stone:`#a59f93`,stoneDark:`#8a857a`,tileGray:`#4e5868`,tileBlue:`#4a6688`,tileRed:`#9c4a34`,copper:`#5c9a8a`,thatch:`#b89a5c`,bark:`#7a4c34`,vermilion:`#d24a2c`,black:`#2a2624`,paper:`#f4ecd6`,gold:`#e8b830`,rope:`#d8c48a`};function Fc(e,t,n,r,i,a,o,s={}){e.box(Z.stoneDark,[0,-.02,0],[t+.03,.035,n+.03]),e.box(Z.wood,[0,0,0],[t,r*.4,n]),e.box(Z.plaster,[0,r*.4,0],[t*.97,r*.6,n*.97]);let c=n/2;e.box(`#2a1e18`,[-t*.18,0,c],[t*.3,r*.66,.012]),o.night.add(q.box,`#ffd27a`,e.p(t*.2,r*.4,c*.97+.004),[0,e.rot,0],[t*.28,r*.28,.012]);for(let i of[-1,1])o.night.add(q.box,`#ffd27a`,e.p(i*(t/2*.97+.004),r*.5,0),[0,e.rot+Math.PI/2,0],[n*.3,r*.2,.012]);if(a>0){for(let i of[-1,1])for(let a of[-1,1])e.box(Z.pillar,[i*t/2,0,a*n/2],[.026,r,.026]);e.box(Z.pillar,[0,r*.74,0],[t+.014,.02,n+.014]),e.box(s.noren??`#2f4f8a`,[-t*.18,r*.42,c+.01],[t*.34,r*.24,.012]),e.box(`#e8e0cc`,[-t*.18,r*.5,c+.018],[t*.06,t*.06,.004]);for(let n=0;n<4;n++)e.box(Z.woodDark,[t*.2+(n-1.5)*t*.065,r*.4,c+.012],[.012,r*.3,.012])}if(s.twoStory){for(let a of[-1,1])e.box(i,[0,r*.92,a*(n/2+.03)],[t*1.12,.03,.14],[a*.45,0,0]);e.box(Z.plaster,[0,r,-n*.05],[t*.86,r*.55,n*.78]),a>0&&e.box(Z.pillar,[0,r*1.02,-n*.05],[t*.88,.02,n*.8]),o.night.add(q.box,`#ffd27a`,e.p(0,r*1.18,-n*.05+n*.39+.004),[0,e.rot,0],[t*.4,r*.18,.012]),Pc(e,[0,r*1.55,-n*.05],t*1.12,n*1.1,r*.62,i,s.hip??.5,a)}else if(s.thatch){let o=t*1.3,s=n*1.45,c=r*1.15;Pc(e,[0,r,0],o,s,c,i,.7,0,.02);let l=Math.max(o,s),u=Math.min(o,s),d=o>=s,f=Math.max(.04,l-u*.7);if(e.box(Z.woodDark,[0,r+c*.97,0],d?[f,.03,.05]:[.05,.03,f]),a>0)for(let t=-1;t<=1;t++)e.box(Z.woodDark,d?[t*f*.35,r+c*.95,0]:[0,r+c*.95,t*f*.35],d?[.018,.04,.09]:[.09,.04,.018])}else Pc(e,[0,r,0],t*1.28,n*1.42,r*.78,i,s.hip??0,a);o.smoke&&o.smoke.push(e.p(t*.22,r*(s.twoStory?2.1:1.75),0))}function Ic(e,t,n,r,i,a=Z.tileGray){if(e.box(Z.stoneDark,[0,-.02,0],[t+.03,.04,n+.03]),e.box(`#3a3a40`,[0,0,0],[t,r*.32,n]),e.box(Z.plaster,[0,r*.32,0],[t*.98,r*.68,n*.98]),e.box(`#2a2a2e`,[0,0,n/2],[t*.36,r*.56,.02]),e.box(`#2a2a2e`,[0,r*.72,n/2],[t*.2,r*.14,.02]),i>0){for(let i=1;i<4;i++)e.box(`#d8d4cc`,[-t/2+i*t/4,.01,n/2+.002],[.01,r*.3,.006]);e.box(`#d8d4cc`,[0,r*.15,n/2+.002],[t,.01,.006]),e.box(Z.plaster,[0,r*.58,n/2+.01],[t*.5,.04,.04])}Pc(e,[0,r,0],t*1.18,n*1.3,r*.42,a,0,i,.04)}function Lc(e,t,n,r,i=Z.vermilion){let a=t/.5*.045;for(let o of[-1,1])e.add(q.cyl8,i,[o*t/2,0,0],[a,n,a]),r>0&&e.add(q.cyl8,Z.black,[o*t/2,0,0],[a*1.3,n*.08,a*1.3]);e.box(i,[0,n*.72,0],[t*1.12,n*.07,a*.9]),e.box(i,[0,n*.92,0],[t*1.22,n*.07,a*1.1]),e.box(Z.black,[0,n*.99,0],[t*1,n*.06,a*1.4]);for(let r of[-1,1])e.box(Z.black,[r*t*.62,n*1,0],[t*.3,n*.06,a*1.4],[0,0,r*.18]);r>0&&e.box(i,[0,n*.78,0],[a*.9,n*.14,a*.8])}function Rc(e,t,n,r){let i=n[0]-t[0],a=n[2]-t[2],o=Math.atan2(i,a),s=r===0?1:4,c=e=>-4*e*(1-e)*.05;for(let n=0;n<s;n++){let r=n/s,o=(n+1)/s;e.rod(Z.rope,[t[0]+i*r,t[1]+c(r),t[2]+a*r],[t[0]+i*o,t[1]+c(o),t[2]+a*o],.032)}if(r>0)for(let n of[.3,.7]){let r=[t[0]+i*n,t[1]-.06,t[2]+a*n];e.box(`#ffffff`,r,[.025,.06,.006],[0,o+Math.PI/2,0])}}function zc(e,t,n,r,i,a,o=`#ffd27a`,s=Z.stone){let c=s,l=r===0?q.box:q.cyl6;if(e.add(l,Z.stoneDark,t,[.12*n,.04*n,.12*n]),e.add(l,c,[t[0],t[1]+.04*n,t[2]],[.055*n,.16*n,.055*n]),e.box(c,[t[0],t[1]+.2*n,t[2]],[.12*n,.03*n,.12*n]),(a??i.night).add(q.box,o,e.p(t[0],t[1]+.23*n,t[2]),[0,e.rot,0],[.075*n,.07*n,.075*n]),r>0)for(let r of[-1,1])for(let i of[-1,1])e.box(c,[t[0]+r*.04*n,t[1]+.23*n,t[2]+i*.04*n],[.018*n,.07*n,.018*n]);e.add(r===0?q.cone4:q.cone6,s===Z.stone?`#8f8a80`:s,[t[0],t[1]+.3*n,t[2]],[.2*n,.07*n,.2*n]),r>0&&e.add(q.ico0,c,[t[0],t[1]+.385*n,t[2]],.04*n)}function Bc(e,t,n,r,i=`#d8442c`,a,o=`#ffb070`,s=1){e.add(q.cyl8,i,t,[.07*n,.09*n,.07*n]),(a??r.night).add(q.cyl8,o,e.p(t[0],t[1]+.025*n,t[2]),[0,e.rot,0],[.074*n,.04*n,.074*n]),s!==0&&(e.add(q.cyl8,Z.black,[t[0],t[1]+.09*n,t[2]],[.05*n,.012*n,.05*n]),e.add(q.cyl8,Z.black,[t[0],t[1]-.008*n,t[2]],[.05*n,.012*n,.05*n]))}function Vc(e,t,n,r){if(e.add(q.cyl8,`#a8794a`,t,[.1*n,.12*n,.1*n]),r>0)for(let r of[.025,.09])e.add(q.cyl8,`#5a4a2a`,[t[0],t[1]+r*n,t[2]],[.104*n,.012*n,.104*n]);e.add(q.cyl8,`#8a6038`,[t[0],t[1]+.12*n,t[2]],[.085*n,.006*n,.085*n])}function Hc(e,t,n,r,i){e.box(`#a07a4a`,t,[.11*n,.09*n,.11*n],[0,r,0]),i>0&&e.box(`#6a4a2a`,[t[0],t[1]+.088*n,t[2]],[.115*n,.008*n,.03*n],[0,r,0])}function Uc(e,t,n,r,i){if(e.add(q.cyl8,`#d8bf7a`,t,[.09*n,.15*n,.09*n],[Math.PI/2,r,0]),i>0)for(let i of[-1,1]){let a=Math.sin(r)*.045*i*n,o=Math.cos(r)*.045*i*n;e.add(q.cyl8,`#8a6a3a`,[t[0]+a,t[1],t[2]+o],[.094*n,.012*n,.094*n],[Math.PI/2,r,0])}}function Wc(e,t,n){let r=n===0?q.cyl8:q.cyl12;e.add(r,Z.stone,t,[.18,.09,.18]),e.add(r,`#2a3a44`,[t[0],t[1]+.085,t[2]],[.13,.008,.13]);for(let n of[-1,1])e.box(Z.wood,[t[0]+n*.09,t[1],t[2]],[.02,.26,.02]);n===0?e.box(Z.wood,[t[0],t[1]+.25,t[2]],[.22,.02,.02]):(Pc(e,[t[0],t[1]+.26,t[2]],.26,.16,.08,Z.tileGray,0,1,.04),n>0&&e.add(q.cyl8,`#8a6038`,[t[0],t[1]+.12,t[2]],[.05,.05,.05]))}function Gc(e,t,n,r){let i=.12,a=.07;for(let r of[-1,1])for(let o of[-1,1])e.rod(Z.woodDark,[t[0]+r*i,t[1],t[2]+o*i],[t[0]+r*a,t[1]+n,t[2]+o*a],.022,e.b,q.box);if(r>0)for(let r of[.33,.66]){let a=i-.04999999999999999*r;for(let i of[-1,1])e.box(Z.wood,[t[0],t[1]+n*r,t[2]+i*a],[a*2,.012,.012]),e.box(Z.wood,[t[0]+i*a,t[1]+n*r,t[2]],[.012,.012,a*2])}if(e.box(Z.wood,[t[0],t[1]+n,t[2]],[a*2.6,.02,a*2.6]),r>0)for(let r of[-1,1])for(let i of[-1,1])e.box(Z.woodDark,[t[0]+r*a,t[1]+n,t[2]+i*a],[.014,.14,.014]);else e.box(Z.woodDark,[t[0],t[1]+n,t[2]],[.02,.14,.02]);e.add(q.cone4,Z.tileGray,[t[0],t[1]+n+.14,t[2]],[.26,.1,.26]),e.add(q.cyl8,`#b08a3a`,[t[0],t[1]+n+.05,t[2]],[.05,.06,.05])}function Kc(e,t,n,r){let i=e.sub(t[0],t[1],t[2],n);for(let e of[-1,1])i.box(`#8aa060`,[e*r/2,0,0],[.014,.22,.014]);i.box(`#d8d0b8`,[0,.2,0],[r,.006,.006]);let a=[`#4a6aa8`,`#e8e0d0`,`#c85a4a`];for(let e=0;e<3;e++)i.box(a[e],[(e-1)*r*.28,.12,0],[r*.2,.08,.008])}var qc=new $t(Math.SQRT1_2*.82,Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0),Jc=(e,t,n=0)=>[Math.sin(e)*t,n,Math.cos(e)*t],Yc=q.cyl12.clone().rotateX(Math.PI/2),Xc=new $t(.14,.24,1,10).translate(0,.5,0);function Zc(e,t,n=`#ffb040`){e.solid.add(q.cyl6,`#4a3a2a`,t,void 0,[.03,.28,.03]),e.glow.add(q.cone6,n,[t[0],t[1]+.28,t[2]],void 0,[.06,.1,.06])}function Qc(e,t,n=1,r=[`#ff8a20`,`#ffd060`,`#ff4a10`]){let i=new V(new gs().add(q.cone6,r[0],[0,0,0],void 0,[.16*n,.3*n,.16*n]).add(q.cone6,r[1],[0,0,0],void 0,[.09*n,.2*n,.09*n]).add(q.cone6,r[2],[.04*n,0,.03*n],[0,0,.3],[.07*n,.18*n,.07*n]).build(),e.mats.fire);i.position.set(...t);let a=e.R()*6;e.parts.push({mesh:i,decorative:!0,update:e=>{i.scale.set(1,.8+.3*Math.abs(Math.sin(e*8+a)*Math.sin(e*5.1+a)),1),i.rotation.y=e*2+a}})}function $c(e,t,n,r=7){let i=new gs;for(let e=0;e<r;e++)i.add(q.ico0,e%2?`#7a3aa0`:`#5a2a7a`,Jc(e/r*Math.PI*2,n,e%3*.08),[e,e*2,0],.16+e%3*.05);let a=new V(i.build(),e.mats.chaos);a.position.y=t,e.parts.push({mesh:a,decorative:!0,update:e=>{a.rotation.y=e*.35,a.position.y=t+Math.sin(e*.9)*.05}})}function el(e){for(let t=0;t<7;t++){let n=Jc(t*.9,.38+e.R()*.2);e.solid.add(q.dodeca,t%2?`#5e5862`:`#6e6672`,[n[0],.05,n[2]],[e.R()*3,e.R()*3,0],.32+e.R()*.16)}e.solid.add(q.cyl8,`#4a4450`,[0,0,0],void 0,[.62,.18,.62]),e.solid.add(Xc,`#5a5260`,[0,.18,0],void 0,[1,1.7,1]);for(let[t,n]of[[.5,`#e8e2d6`],[.95,`#6a3a8a`],[1.4,`#e8e2d6`]]){let r=1-(t-.18)/1.7*.42;e.solid.add(q.cyl12,n,[0,t,0],void 0,[.49*r,.1,.49*r])}e.solid.add(q.box,`#1a1420`,[0,.18,.225],void 0,[.12,.2,.02]),e.glow.add(q.box,`#c070ff`,[0,1.15,.165],void 0,[.05,.08,.01]),e.solid.add(q.cyl12,`#3a3440`,[0,1.88,0],void 0,[.44,.05,.44]);for(let t=0;t<8;t++){let n=Jc(t*Math.PI/4,.2);e.solid.add(q.box,`#3a3440`,[n[0],1.93,n[2]],void 0,[.02,.12,.02])}e.glow.add(q.cyl8,`#d090ff`,[0,1.93,0],void 0,[.24,.24,.24]),Pc(new X(e.solid,[0,0,0],Math.PI/8),[0,2.15,0],.46,.46,.26,`#2a2430`,1,e.detail,.14),e.solid.add(q.ico0,`#6a3a8a`,[0,2.45,0],void 0,.07);let t=new V(new gs().add(new gn(.22,1.6,8,1,!0).rotateZ(Math.PI/2).translate(.9,0,0),`#b060ff`).add(new gn(.22,1.6,8,1,!0).rotateZ(-Math.PI/2).translate(-.9,0,0),`#b060ff`).build(),e.mats.portal);t.position.y=2.05,e.parts.push({mesh:t,decorative:!0,update:e=>{t.rotation.y=e*.8}}),$c(e,.45,.55,8),$c(e,1.55,.36,6),e.fx.halos.push({at:[0,2.05,0],color:`#c070ff`,size:1.4});for(let t=0;t<5;t++)e.fx.sparkles.push({at:Jc(t*1.25,.45,.2),color:`#c890ff`});e.labelHeight=2.5}function tl(e){let t=`#8a8476`;e.solid.add(q.cyl12,`#9a9486`,[0,0,0],void 0,[1.5,.02,1.5]);for(let[n,r]of[[.68,0],[.48,2.6],[.28,1.2]])for(let i=0;i<14;i++){let a=i/14*Math.PI*2;if(Math.abs((a-r+Math.PI*3)%(Math.PI*2)-Math.PI)>Math.PI-.5)continue;let o=Jc(a+Math.PI/14,n);e.solid.add(q.box,i%2?`#a8a294`:t,[o[0],.02,o[2]],[0,a+Math.PI/14,0],[2*Math.PI*n/14+.02,.24,.07])}for(let n of[.8,2,3.6,5]){let r=Jc(n,.58);e.solid.add(q.box,t,[r[0],.02,r[2]],[0,n,0],[.06,.24,.2])}for(let t of[-1,1])e.solid.add(q.box,`#c8c2b2`,[t*.17,.02,.72],void 0,[.09,.5,.09]),e.solid.add(q.cone4,`#c8c2b2`,[t*.17,.52,.72],void 0,[.12,.1,.12]);e.solid.add(q.box,`#c8c2b2`,[0,.4,.72],void 0,[.44,.1,.1]),e.glow.add(q.cyl8,`#ffcc40`,[0,.5,.72],void 0,[.16,.06,.16]);for(let t=0;t<5;t++){let n=Jc(t*Math.PI*2/5,.07);e.glow.add(q.cone4,`#ffd860`,[n[0],.56,.72+n[2]],void 0,[.035,.07,.035])}e.glow.add(q.ico1,`#ffd860`,[0,.2,0],void 0,.12),e.solid.add(q.cyl8,`#c8c2b2`,[0,.02,0],void 0,[.14,.12,.14]),e.fx.halos.push({at:[0,.22,0],color:`#ffd860`,size:.7}),Zc(e,[-.3,.02,.8]),Zc(e,[.3,.02,.8]),e.labelHeight=1}function nl(e){let t=e.detail;e.solid.add(q.cyl12,`#5e5a48`,[0,0,0],void 0,[1.5,.015,1.5]);let n=new X(e.solid,[0,0,-.32],0);if(n.box(`#8a857a`,[0,0,0],[.6,.07,.46]),n.box(`#9a958a`,[0,.07,0],[.5,.04,.38]),n.box(`#3a302a`,[0,.11,0],[.42,.3,.3]),t>0)for(let e of[-1,1])for(let t of[-1,1])n.box(`#241c18`,[e*.21,.11,t*.15],[.035,.3,.035]);n.box(`#1e2420`,[0,.11,.151],[.2,.24,.01]),n.box(`#3a3a3a`,[0,.11,.157],[.008,.24,.006]),e.glow.add(Yc,`#d8b040`,n.p(0,.27,.158),void 0,[.06,.06,.006]),Pc(n,[0,.41,0],.62,.5,.26,`#4a4050`,.5,t,.12);for(let e=0;e<3;e++)n.box(`#8a857a`,[0,.05-e*.025,.26+e*.05],[.24,.025,.05]);let r=new X(e.solid,[0,0,0],0),i=(e,n)=>{let i=r.sub(e[0],0,e[2],n);i.box(`#a8a49a`,[0,0,0],[.17,.05,.15]),i.box(`#b4b0a6`,[0,.05,0],[.12,.04,.1]),i.box(`#c4c0b6`,[0,.09,0],[.07,.2,.06]),t>0&&i.box(`#6a6a60`,[0,.14,.031],[.02,.12,.004])},a=t=>{let n=r.sub(t[0],0,t[2],e.R()*.6);n.box(`#b8b4aa`,[0,0,0],[.1,.08,.1]),n.add(q.ico1,`#c0bcb2`,[0,.12,0],.09),n.add(q.cone4,`#b0aca2`,[0,.16,0],[.13,.06,.13]),n.add(q.halfSphere,`#bab6ac`,[0,.22,0],[.07,.06,.07]),n.add(q.ico0,`#c0bcb2`,[0,.27,0],.045)};if([[-.5,0,.12],[-.3,0,.44],[.08,0,.56],[.4,0,.4],[.56,0,.06],[-.58,0,-.24]].forEach((n,o)=>{if(o%3==1?a(n):i(n,(e.R()-.5)*.5),t>0&&e.solid.add(q.halfSphere,`#4a3e30`,[n[0],0,n[2]+.1],void 0,[.12,.03,.14]),t>0&&o%2==0)for(let t=0;t<2;t++)r.box(`#c8b48a`,[n[0]-.05+t*.05,0,n[2]-.08],[.025,.3-t*.04,.008],[.1*(t-.5),0,(e.R()-.5)*.3])}),t>0)for(let n of[-1,1])zc(r,[n*.28,0,-.02],.8,t,{night:e.night},void 0,`#9affb8`,`#8a8a80`);e.solid.add(q.cyl6,`#4a4038`,[.55,0,-.4],void 0,[.07,.6,.07]),e.solid.add(q.cyl6,`#4a4038`,[.6,.38,-.4],[0,0,-.9],[.04,.3,.04]),e.solid.add(q.cyl6,`#4a4038`,[.5,.45,-.38],[.3,0,.8],[.035,.24,.035]);let o=new V(new gs().add(q.ico1,`#7aff9a`,[-.35,0,.2],void 0,.07).add(q.ico1,`#9affb8`,[.25,.1,.5],void 0,.06).add(q.ico1,`#7aff9a`,[.45,.05,-.1],void 0,.05).build(),e.mats.glow);o.position.y=.45,e.parts.push({mesh:o,decorative:!0,update:e=>{o.position.y=.45+Math.sin(e*1.3)*.08,o.rotation.y=Math.sin(e*.4)*.5}}),e.fx.halos.push({at:[-.35,.45,.2],color:`#7aff9a`,size:.5},{at:[.25,.55,.5],color:`#7aff9a`,size:.45}),e.labelHeight=1.1}function rl(e){e.solid.add(q.cyl12,`#7a6a52`,[0,0,0],void 0,[1.3,.012,1.3]),e.solid.add(q.box,`#8a8478`,[0,0,-.05],[0,.3,0],[.62,.1,.5]);for(let t of[-1,1]){let n=t*.13;e.solid.add(q.box,`#8a5a32`,[n,.1,-.05],[0,.3,t*.22],[.24,.035,.42]);for(let r of[-.18,.08])e.solid.add(q.box,`#3a3634`,[n,.125-Math.abs(n)*0,-.05+r],[0,.3,t*.22],[.25,.015,.03]);e.solid.add(q.torus,`#2a2624`,[n-t*.03,.14,.05],[Math.PI/2,0,0],.05)}e.glow.add(q.box,`#d8b040`,[0,.14,.12],[0,.3,.4],[.05,.05,.02]),Zc(e,[.45,0,.25],`#ffd27a`);for(let[t,n]of[[-.48,.18],[-.4,.4]])e.solid.add(q.cyl12,`#7a4e2a`,[t,0,n],void 0,[.16,.2,.16]),e.solid.add(q.cyl12,`#3a3634`,[t,.06,n],void 0,[.165,.02,.165]),e.solid.add(q.cyl12,`#3a3634`,[t,.15,n],void 0,[.165,.02,.165]);e.glow.add(q.box,`#9ad8ff`,[0,.115,-.05],[0,.3,0],[.02,.01,.4]),e.fx.halos.push({at:[0,.2,-.05],color:`#9ad8ff`,size:.45}),e.labelHeight=.8}function il(e,t){let n=t?.6:-.4,r=Jc(n+Math.PI,.25),i=t?[`#2e3a52`,`#3a4862`,`#262e44`]:[`#5a2a26`,`#6e3430`,`#4a2422`],a=t?[`#3a8aff`,`#a8e0ff`,`#2a5aff`]:[`#ff8a20`,`#ffd060`,`#ff4a10`];for(let t=0;t<8;t++){let r=Jc(n+Math.PI+(t-3.5)*.38,.42+e.R()*.1);e.solid.add(q.dodeca,i[t%3],[r[0],.12+e.R()*.12,r[2]],[e.R()*3,e.R()*3,0],.34+e.R()*.18)}e.solid.add(q.dodeca,i[0],[r[0],.34,r[2]],[.3,n,0],[.8,.62,.55]);for(let t of[-1,1]){let r=Jc(n+Math.PI+t*.55,.38);e.solid.add(q.cone6,`#2a1614`,[r[0],.55,r[2]],[t*.5*Math.cos(n),0,-t*.5*Math.sin(n)],[.12,.45,.12])}let o=Jc(n,1),s=[r[0]+o[0]*.3,0,r[2]+o[2]*.3];e.solid.add(Yc,`#2a1614`,s,[0,n,0],[.6,.6,.06]),e.glow.add(Yc,t?`#2a6aff`:`#ff6a14`,[s[0]+o[0]*.02,0,s[2]+o[2]*.02],[0,n,0],[.42,.42,.06]),e.glow.add(Yc,t?`#a0d8ff`:`#ffc040`,[s[0]+o[0]*.04,0,s[2]+o[2]*.04],[0,n,0],[.24,.24,.06]);let c=[Math.cos(n),0,-Math.sin(n)];for(let t of[-1,1])Qc(e,[s[0]+c[0]*t*.32+o[0]*.1,0,s[2]+c[2]*t*.32+o[2]*.1],1.7,a);Qc(e,[s[0]+o[0]*.04,.28,s[2]+o[2]*.04],1.2,a);for(let t of[-1,1])e.glow.add(q.cone6,a[0],[s[0]+c[0]*t*.32+o[0]*.1,0,s[2]+c[2]*t*.32+o[2]*.1],void 0,[.14,.22,.14]);for(let r=0;r<3;r++){let i=Jc(n+(r-1)*.6,.45);e.glow.add(q.box,t?`#4a8aff`:`#ff7a1a`,[i[0],.006,i[2]],[0,n+(r-1)*.6,0],[.03,.01,.3])}e.fx.halos.push({at:[s[0],.22,s[2]],color:t?`#4a8aff`:`#ff6a20`,size:.9});for(let n=0;n<6;n++)e.fx.sparkles.push({at:[s[0]+(e.R()-.5)*.5,.1,s[2]+(e.R()-.5)*.5],color:t?`#8ac8ff`:`#ffa040`});e.labelHeight=1.15}function al(e){e.solid.add(q.halfSphere,`#8a9a5a`,[0,0,-.25],void 0,[1.2,.55,.9]),e.solid.add(q.dodeca,`#8a8478`,[-.4,.15,-.35],[.3,.5,0],.32),e.solid.add(q.dodeca,`#7a7468`,[.42,.12,-.3],[.5,.2,0],.28),e.solid.add(Yc,`#141010`,[0,0,.12],void 0,[.34,.5,.05]);for(let t of[-1,1])e.solid.add(q.box,`#7a5232`,[t*.17,0,.16],void 0,[.06,.36,.06]);e.solid.add(q.box,`#7a5232`,[0,.36,.16],void 0,[.44,.07,.08]),e.solid.add(q.box,`#c8a070`,[0,.45,.17],void 0,[.26,.08,.02]);for(let t of[-1,1])e.solid.add(q.box,`#5a5a60`,[t*.07,.012,.42],void 0,[.015,.015,.56]);for(let t=0;t<6;t++)e.solid.add(q.box,`#6b4a2e`,[0,.004,.18+t*.1],void 0,[.22,.012,.035]);e.solid.add(q.box,`#6a5a4a`,[0,.03,.5],void 0,[.2,.1,.22]),e.solid.add(q.box,`#4a3e34`,[0,.13,.5],void 0,[.22,.02,.24]);for(let t of[-1,1])for(let n of[-.07,.07])e.solid.add(q.cyl8,`#2a2a2e`,[t*.11,.03,.5+n],[0,0,Math.PI/2],[.06,.02,.06]);for(let t=0;t<5;t++)e.glow.add(q.octa,t%2?`#8affc8`:`#c8ff8a`,[(t-2)*.035,.15,.5+(t%2-.5)*.06],[0,t,.3],[.05,.09,.05]);for(let t=0;t<4;t++){let n=Jc(1.2+t*1.1,.55);e.glow.add(q.octa,`#8affc8`,[n[0],.04,n[2]],[0,t,.4],[.05,.1,.05])}Zc(e,[-.28,0,.3],`#ffd27a`),e.fx.halos.push({at:[0,.2,.5],color:`#9affc8`,size:.55}),e.labelHeight=1}function ol(e){let t=e.detail,n=`#b0603e`;e.solid.add(q.halfSphere,`#e2c07a`,[0,0,-.12],void 0,[1.45,.3,1.1]),e.solid.add(q.halfSphere,`#d8b46a`,[.5,0,.35],void 0,[.6,.18,.4]);let r=new X(e.solid,[0,0,-.18],0);r.box(`#8a6a4a`,[0,.04,.12],[.5,.2,.06]);for(let e of[-.22,-.08,.08,.22])r.box(n,[e,.04,.155],[.04,.22,.04]);r.box(`#1a140c`,[0,.04,.16],[.13,.16,.01]),Pc(r,[0,.24,0],.78,.62,.3,`#7a6a5a`,.5,t,.14),e.glow.add(q.ico0,`#40d8e0`,r.p(0,.6,0),void 0,.05);for(let t=0;t<4;t++)e.solid.add(q.box,t%2?`#d0a873`:`#a8844e`,[0,.05-t*.012,.02+t*.07],void 0,[.24,.025,.07]);let i=new X(e.solid,[-.48,0,.22],.3);if(Pc(i,[0,.12,0],.32,.32,.12,`#7a6a5a`,1,t,.12),i.add(q.cyl8,`#b89a4a`,[0,.22,0],[.04,.32,.04]),t>0)for(let e=0;e<6;e++)i.add(q.cyl8,`#c8aa5a`,[0,.26+e*.04,0],[.085-e*.006,.012,.085-e*.006]);if(e.glow.add(q.ico1,`#40d8e0`,i.p(0,.57,0),void 0,.07),e.solid.add(q.cyl8,n,[.48,.05,.3],[Math.PI/2,0,.6],[.08,.4,.08]),t>0){let t=new X(e.solid,[.42,.02,-.38],.5);t.box(`#c8b48a`,[0,0,0],[.24,.07,.07]),t.add(q.cone6,`#b8a47a`,[.14,.035,0],[.12,.05,.12],[0,0,-Math.PI/2])}e.solid.add(q.cyl8,`#5f9a4e`,[-.6,0,-.32],void 0,[.09,.36,.09]),e.solid.add(q.cyl8,`#5f9a4e`,[-.55,.18,-.32],[0,0,-Math.PI/2],[.05,.08,.05]),e.solid.add(q.cyl8,`#5f9a4e`,[-.51,.18,-.32],void 0,[.05,.1,.05]),Zc(e,[-.2,.02,.34]),Zc(e,[.2,.02,.34]),e.fx.halos.push({at:i.p(0,.57,0),color:`#40d8e0`,size:.5}),e.labelHeight=1.15}var sl={dg_q3_final:{build:el,scale:1.35},dg_q2_maze:{build:tl,scale:1.25},dg_q2_crypt:{build:nl,scale:1.3},dg_q2_cellar:{build:rl,scale:1.45},dg_q3_cave_a:{build:e=>il(e,0),scale:1.4},dg_q3_cave_b:{build:e=>il(e,1),scale:1.4},dg_q1_mines:{build:al,scale:1.35},dg_q3_temple:{build:ol,scale:1.3}},cl=new $t(.38,.5,1,5).translate(0,.5,0),ll=class{solid=tc(new Qn({vertexColors:!0,flatShading:!0}),{fow:`origin`,rim:!0});glow=tc(new Kn({vertexColors:!0,toneMapped:!1}),{fow:`origin`,glow:!0});night=tc(new Kn({vertexColors:!0,toneMapped:!1,color:`#555a66`}),{fow:`origin`,glow:!0});chaos=tc(new Kn({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.92}),{fow:`origin`,glow:!0});portal=tc(new Kn({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.9,side:2,forceSinglePass:!0,depthWrite:!1}),{fow:`origin`,glow:!0});fire=tc(new Kn({vertexColors:!0,toneMapped:!1}),{fow:`origin`,glow:!0});batch={solid:tc(new Qn({vertexColors:!0,flatShading:!0}),{fow:`attr`,rim:!0}),glow:tc(new Kn({vertexColors:!0,toneMapped:!1}),{fow:`attr`,glow:!0}),night:tc(new Kn({vertexColors:!0,toneMapped:!1,color:`#555a66`}),{fow:`attr`,glow:!0}),chaos:tc(new Kn({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.92}),{fow:`attr`,glow:!0}),portal:tc(new Kn({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.9,side:2,forceSinglePass:!0,depthWrite:!1}),{fow:`attr`,glow:!0})};setNight(e,t){this.night.color.setRGB(.33+.67*e,.35+.5*e,.4+.05*e);let n=.75+.25*Math.sin(t*2.4);this.chaos.color.setScalar(.8+.35*n),this.portal.opacity=.65+.3*Math.sin(t*1.7)**2,this.fire.color.setScalar(.85+.15*Math.sin(t*17)*Math.sin(t*7.3)),this.batch.night.color.copy(this.night.color),this.batch.chaos.color.copy(this.chaos.color),this.batch.portal.opacity=this.portal.opacity}dispose(){for(let e of[this.solid,this.glow,this.night,this.chaos,this.portal,this.fire,...Object.values(this.batch)])e.dispose()}},Q=(e,t,n=0)=>[Math.sin(e)*t,n,Math.cos(e)*t],ul=q.cyl12.clone().rotateX(Math.PI/2),dl={town:1.2,capital:1.12,port:1.1,dungeon:1.55,cave:1.45,sanctum:1.15,scourgeLair:1.25,chaosGenerator:1.2,cultDevice:1.4,statue:1.7,camp:1.3,eventSite:1.2,shrine:1.35,portal:1.12},fl={town:`#cbbd96`,capital:`#d2c8aa`,port:`#cbbd96`,dungeon:`#8f8a7e`,cave:`#8a7d6a`,camp:`#a8895a`,shrine:`#cfc3a5`,statue:`#bdb6a5`,cultDevice:`#4a3f48`,eventSite:`#c2a878`},pl=1;function ml(e){return e!==pl&&(pl=e,!0)}function hl(){return pl}var gl={r1_forest:[Z.tileGray,Z.tileBlue,Z.thatch,Z.tileRed],r2_plains:[Z.tileRed,Z.tileGray,Z.tileRed,Z.bark],r2_bog:[Z.thatch,Z.tileGray,Z.thatch,Z.bark],r2_burning:[Z.tileRed,`#5a3a34`,Z.tileGray,Z.tileRed],r2_isles:[Z.tileBlue,Z.tileGray,Z.tileBlue,`#3e4858`],r3_desert:[`#b8864a`,Z.tileRed,`#c89a5a`,Z.bark],r3_badlands:[`#4a4a52`,Z.tileGray,`#5a4a48`,Z.tileGray],r3_ocean:[Z.tileBlue,Z.tileGray,`#3e4858`,Z.tileBlue]},_l=e=>gl[e.region??``]??gl.r1_forest,vl=e=>Math.PI+(e.R()-.5)*1.3;function yl(e,t,n,r=.5){e.solid.add(q.cyl6,`#3a2a1e`,t,void 0,[.018,r,.018]);let i=new pt(.09,.26).translate(.05,-.15,0),a=new gs().add(i,n).add(i,n,[0,0,0],[0,Math.PI,0]).add(q.box,`#3a2a1e`,[.05,0,0],void 0,[.11,.008,.008]).add(q.box,`#f2ead8`,[.05,-.08,.002],void 0,[.05,.05,.003]).add(q.box,`#f2ead8`,[.05,-.08,-.002],void 0,[.05,.05,.003]).build();i.dispose();let o=new V(a,e.mats.solid);o.position.set(t[0],t[1]+r-.01,t[2]),o.castShadow=!0;let s=e.R()*6;o.rotation.y=s,e.parts.push({mesh:o,update:e=>{o.rotation.y=s+Math.sin(e*1.6+s)*.35,o.rotation.x=Math.sin(e*2.3+s)*.05}})}function bl(e,t){e.solid.add(q.cyl6,`#4a3a2a`,t,void 0,[.03,.28,.03]),e.detail>0&&e.solid.add(q.cyl6,`#2a2220`,[t[0],t[1]+.25,t[2]],void 0,[.06,.04,.06]),e.glow.add(q.cone6,`#ffb040`,[t[0],t[1]+.28,t[2]],void 0,[.06,.1,.06])}function xl(e,t,n,r){let i=e.detail===0?2:3;for(let a=0;a<i;a++)e.solid.add(q.dodeca,r,[t[0]+(e.R()-.5)*.12*n,t[1]+.04*n,t[2]+(e.R()-.5)*.12*n],[e.R()*3,e.R()*3,0],.16*n*(.7+e.R()*.6))}function Sl(e,t,n){let r=new X(e.solid,t,e.R()*6);r.rod(`#6a4a32`,[0,0,0],[.04*n,.22*n,0],.045*n),r.rod(`#6a4a32`,[.04*n,.22*n,0],[-.02*n,.4*n,.03*n],.035*n);let i=[`#3f6a3a`,`#4a7a40`,`#365e34`];[[.06,.26,0,.22],[-.05,.38,.03,.2],[0,.48,0,.14]].forEach(([e,t,a,o],s)=>r.add(q.ico0,i[s%3],[e*n,t*n,a*n],[o*n,o*.42*n,o*n],[0,s,0]))}function Cl(e,t){e.solid.add(q.cyl8,`#a8a49a`,t,void 0,[.07,.03,.07]),e.solid.add(q.cyl8,`#b8b4aa`,[t[0],t[1]+.03,t[2]],void 0,[.06,.08,.06]),e.solid.add(q.ico1,`#b8b4aa`,[t[0],t[1]+.13,t[2]],void 0,.055),e.solid.add(q.cone8,`#c8382a`,[t[0],t[1]+.06,t[2]],void 0,[.075,.05,.075])}function wl(e){let t=vl(e),n=Q(t,.36),r=new X(e.solid,n,t+Math.PI);e.solid.add(q.halfSphere,`#6f9a4a`,Q(t,.48),[0,t,0],[1,.62,.78]),e.detail>0&&e.solid.add(q.halfSphere,`#7aa852`,Q(t+.5,.55),[0,t,0],[.5,.32,.4]);for(let e of[-1,1])r.add(q.dodeca,`#8d8a82`,[e*.15,.17,.2],[.13,.36,.13],[0,e*.3,0]);r.box(`#7e7b74`,[0,.32,.2],[.42,.1,.14],[0,0,.04]),r.box(`#141018`,[0,0,.19],[.18,.31,.03]);for(let e=0;e<3;e++)r.box(e%2?`#7a776f`:`#8a877f`,[0,-.012-e*.022,.26+e*.065],[.24,.03,.065]);for(let t of[-1,1])bl(e,r.p(t*.3,0,.3));if(e.detail>0&&(Rc(r,[-.16,.3,.28],[.16,.3,.28],e.detail),r.add(q.ico1,`#efe8d8`,[0,.38,.27],.06)),xl(e,Q(t+1.7,.62),.9,`#8a8780`),xl(e,Q(t-1.8,.6),.7,`#8a8780`),e.detail===2)for(let n=0;n<4;n++)e.solid.add(q.cone6,`#5f8a48`,Q(t+(n-1.5)*.45,.72),[0,n,.2],[.05,.12,.05]);e.labelHeight=1}function Tl(e){let t=vl(e),n=Q(t,.38),r=[`#7d746a`,`#8a8075`,`#6e665c`],i=e.detail===0?5:8;for(let n=0;n<i;n++){let a=Q(t+(n-(i-1)/2)*(2.2/i),.44+e.R()*.12);e.solid.add(q.dodeca,r[n%3],[a[0],.1+e.R()*.12,a[2]],[e.R()*3,e.R()*3,0],[.34+e.R()*.16,.3+e.R()*.2,.32])}e.solid.add(q.dodeca,`#7d746a`,[n[0],.3,n[2]],[.3,t,0],[.8,.62,.55]);let a=new X(e.solid,n,t+Math.PI);a.add(ul,`#0e0a0c`,[0,0,.24],[.36,.4,.06]);for(let e of[-1,1])a.box(`#6b4a2e`,[e*.16,0,.3],[.05,.36,.05],[0,0,e*-.06]);a.box(`#5a3e26`,[0,.34,.3],[.46,.06,.07]),e.detail>0&&(a.box(`#6b4a2e`,[0,.27,.3],[.36,.035,.05]),Rc(a,[-.16,.31,.34],[.16,.31,.34],e.detail),a.box(`#c8a070`,[.25,.1,.4],[.1,.12,.015],[0,-.3,0]),a.box(`#6b4a2e`,[.25,0,.4],[.02,.12,.02]),e.solid.add(q.halfSphere,`#5f8a48`,[n[0],.56,n[2]],void 0,[.34,.08,.26]));for(let t of[-1,1])bl(e,a.p(t*.27,0,.38));e.labelHeight=1}function El(e){let t=vl(e),n=new X(e.solid,Q(t,.36),t+Math.PI),r=e.detail;n.box(`#9a948a`,[0,0,0],[.62,.07,.46]),n.box(`#8a847a`,[0,0,.28],[.3,.04,.1]);let i=[.36,.2,.36,.12,.3,.36];[-.27,-.09,.09,.27].forEach((e,t)=>{n.box(Z.pillar,[e,.07,.2],[.04,i[t],.04]),n.box(Z.pillar,[e,.07,-.2],[.04,i[(t+2)%6],.04])}),n.box(Z.plaster,[-.2,.07,-.2],[.18,.24,.03]),n.box(`#d8d0bc`,[.16,.07,-.2],[.14,.14,.03],[0,0,.1]),Pc(n,[-.12,.43,-.08],.44,.32,.16,`#4e5260`,.5,r),n.box(`#4e5260`,[.22,.07,.08],[.32,.03,.3],[.35,.2,.5]),n.box(`#141018`,[.04,.071,.05],[.2,.004,.18]);for(let e=0;e<3;e++)n.box(`#7a776f`,[.04,.05-e*.02,.17-e*.04],[.2,.02,.04]);if(r>0){for(let t=0;t<5;t++)e.solid.add(q.halfSphere,t%2?`#5f8a48`:`#6f9a50`,n.p(-.34+t*.17,0,-.28+t%2*.55),void 0,[.14,.1,.14]);for(let e=0;e<4;e++)n.box(`#4e5260`,[-.3+e*.2,.072,.32+e%2*.05],[.05,.012,.035],[0,e,0])}bl(e,n.p(-.2,0,.36)),e.labelHeight=.95}function Dl(e){let t=vl(e),n=e.detail;e.night;let r=new X(e.solid,Q(t,.42),t+Math.PI);if(r.box(`#6a645a`,[0,0,0],[.42,.06,.36]),r.box(`#4a3020`,[0,.06,0],[.32,.22,.26]),n>0)for(let e of[-1,1])for(let t of[-1,1])r.box(`#2a1a14`,[e*.16,.06,t*.13],[.03,.22,.03]);e.glow.add(q.box,`#ff6a2a`,r.p(0,.08,.131),[0,r.rot,0],[.12,.16,.01]),Pc(r,[0,.28,0],.46,.4,.2,`#3a2c2c`,.5,n);for(let e=0;e<2;e++)r.box(`#6a645a`,[0,.04-e*.02,.21+e*.05],[.2,.02,.05]);if(Lc(new X(e.solid,Q(t+Math.PI,.58),t),.36,.44,n,`#6a2a20`),n>0){let n=Q(t+1.5,.6);e.solid.add(q.cyl6,`#4a3020`,n,void 0,[.04,.24,.04]),e.solid.add(q.ico0,`#d8582a`,[n[0],.32,n[2]],[0,1,0],[.26,.2,.26]),e.solid.add(q.ico0,`#c8402a`,[n[0]+.06,.4,n[2]],[0,2,0],[.16,.14,.16])}e.fx.halos.push({at:r.p(0,.16,.16),color:`#ff7a3a`,size:.45}),e.labelHeight=1}function Ol(e){let t=vl(e),n=e.detail;Ic(new X(e.solid,Q(t,.5),t+Math.PI),.28,.24,.32,n);let r=new X(e.solid,Q(t+1.6,.42),t+Math.PI);r.box(`#8a8478`,[0,0,0],[.32,.05,.28]),r.box(`#141018`,[0,.051,0],[.22,.004,.18]);for(let e=0;e<3;e++)r.box(`#7a776f`,[0,.04-e*.015,.06-e*.04],[.2,.015,.04]);if(r.box(`#8a5a32`,[0,.05,-.1],[.22,.2,.025],[-.25,0,0]),n>0)for(let e of[.06,.16])r.box(`#3a3634`,[0,.05+e*.97,-.1-e*.25],[.23,.012,.03],[-.25,0,0]);bl(e,r.p(.22,0,.12)),n>0&&(Vc(r,[-.24,0,.12],1.1,n),Vc(r,[-.3,0,-.04],1,n)),e.labelHeight=.9}var kl={town(e){let t=e.detail,n=_l(e),r={night:e.night,smoke:e.fx.smoke},i=.4+e.R()*.3;for(let a=0;a<4;a++){let o=i+Math.PI/2*a+(e.R()-.5)*.15,s=new X(e.solid,Q(o,.6),o+Math.PI),c=1+e.R()*.12,l=n[a%n.length];a===0?Fc(s,.36*c,.28*c,.2*c,n[0]===Z.thatch?Z.tileGray:n[0],t,r,{twoStory:!0,hip:.5,noren:`#2f4f8a`}):a===3?Ic(s,.26*c,.22*c,.3*c,t):Fc(s,.34*c,.27*c,.22*c,l,t,r,{thatch:l===Z.thatch,noren:a===1?`#a83a2a`:`#3a6a4a`,hip:+(a===2)}),t>0&&a!==3&&Bc(s,[.14*c,.13*c,.17*c],1,r)}let a=new X(e.solid,[0,0,0],0);if(Gc(a,Q(i+Math.PI*.75,.66),.58,t),Wc(a,Q(i+Math.PI*1.75,.58),t),t>0){let e=Q(i+Math.PI*1.5-.35,.5);Vc(a,e,1,t),Vc(a,[e[0]+.07,0,e[2]+.05],.9,t),Hc(a,Q(i+Math.PI*.75+.3,.52),1,i,t)}t===2&&(Kc(a,Q(i+Math.PI*.25,.42),i+Math.PI*.25+Math.PI/2,.24),Uc(a,[...Q(i+Math.PI*1.25,.46)],1,i,t),Cl(e,Q(i+Math.PI*1.25+.25,.7))),e.labelHeight=.9},capital(e){let t=e.detail,n={night:e.night,smoke:e.fx.smoke},r=.78,i=`#a8a194`,a=`#3e4858`,o=new X(e.solid,[0,0,0],0),s=3.5*Math.PI/3;for(let o=0;o<6;o++){let s=o*Math.PI/3,c=(o+1)*Math.PI/3,l=Q(s,r),u=Q(c,r),d=[(l[0]+u[0])/2,0,(l[2]+u[2])/2],f=Math.hypot(u[0]-l[0],u[2]-l[2]),p=Math.atan2(u[0]-l[0],u[2]-l[2]),m=new X(e.solid,d,p),h=Math.sign(Math.cos(p)*d[0]-Math.sin(p)*d[2])||1;if(o===3){for(let e of[-1,1])m.box(i,[0,0,e*f*.3],[.13,.15,f*.4]);m.box(`#241a14`,[0,0,0],[.1,.15,f*.22]),m.box(Z.plaster,[0,.15,0],[.13,.11,f*.56]),t>0&&m.box(Z.pillar,[0,.15,0],[.135,.02,f*.565]),n.night.add(q.box,`#ffd27a`,m.p(h*.066,.2,0),[0,p,0],[.006,.03,f*.18]),Pc(m,[0,.26,0],.22,f*.66,.1,a,.5,t)}else if(m.box(i,[0,0,0],[.11,.07,f]),m.box(Z.plaster,[0,.07,0],[.05,.12,f*.98]),t>0?Pc(m,[0,.19,0],.11,f,.05,a,0,0,.02):m.box(a,[0,.19,0],[.1,.035,f]),t>0)for(let e=-1;e<=1;e++)m.box(`#2a2a2e`,[h*.026,.11,e*f*.28],[.004,.025,.025]);let g=Q(s,r),_=new X(e.solid,g,s);o%2==0?(_.add(qc,i,[0,0,0],[.2,.1,.2]),_.box(Z.plaster,[0,.1,0],[.15,.15,.15]),t>0&&_.box(Z.pillar,[0,.19,0],[.155,.015,.155]),n.night.add(q.box,`#ffd27a`,_.p(0,.16,.077),[0,s,0],[.05,.03,.006]),Pc(_,[0,.25,0],.24,.24,.1,a,.5,t)):_.add(qc,i,[0,0,0],[.13,.2,.13])}let c=Q(.5,.42),l=Q(s,r*.87),u=new X(e.solid,c,Math.atan2(l[0]-c[0],l[2]-c[2]));u.add(qc,i,[0,0,0],[.44,.15,.38]);let d=[[.15,.32,.17,.27],[.36,.24,.15,.2],[.55,.17,.13,.14]],f=[[.44,.38,.11],[.34,.29,.1],[.27,.22,.12]];d.forEach(([e,r,i,o],s)=>{u.box(Z.plaster,[0,e,0],[r,i,o]),t>0&&(u.box(Z.pillar,[0,e+i*.62,0],[r+.006,.012,o+.006]),s===0&&u.box(`#3a3a40`,[0,e,0],[r+.004,i*.35,o+.004]));for(let t of[-1,1])n.night.add(q.box,`#ffd27a`,u.p(t*r*.25,e+i*.4,o/2+.004),[0,u.rot,0],[r*.16,i*.22,.008]);n.night.add(q.box,`#ffd27a`,u.p(0,e+i*.4,-o/2-.004),[0,u.rot,0],[r*.3,i*.22,.008]);let[c,l,d]=f[s];Pc(u,[0,e+i,0],c,l,d,a,.5,t,.12),t>0&&s<2&&Pc(u,[0,e+i+d*.3,l*.3],c*.34,l*.42,d*.62,a,0,t,.03)});for(let t of[-1,1])e.glow.add(q.cone4,Z.gold,u.p(t*.075,.79,0),[0,u.rot,t*.3],[.03,.06,.02]);let p=Q(s,r*.62),m=[Math.cos(s),0,-Math.sin(s)];for(let t of[-1,1])yl(e,[p[0]+m[0]*t*.2,0,p[2]+m[2]*t*.2],t>0?`#c0533a`:`#3f5fa0`,.46);for(let[r,i]of[[2.3,Z.tileRed],[4.75,Z.tileGray]]){let a=new X(e.solid,Q(r,.5),r+Math.PI);t>0?Fc(a,.26,.22,.16,i,t,n):(a.box(Z.plaster,[0,0,0],[.26,.16,.22]),a.add(q.prism3,i,[0,.16,0],[.32,.18,.3]))}if(t>0&&Sl(e,Q(1.5,.52),1.1),t===2){Sl(e,Q(5.6,.55),.9);for(let e of[-1,1])zc(o,[p[0]+m[0]*e*.32-Math.sin(s)*.1,0,p[2]+m[2]*e*.32-Math.cos(s)*.1],.8,t,n)}e.labelHeight=1.4},port(e){let t=e.detail,n=e.waterDir,r={night:e.night,smoke:e.fx.smoke},i=_l(e);Fc(new X(e.solid,Q(n+Math.PI-.72,.55),n+.3),.34,.27,.21,i[0]===Z.thatch?Z.tileGray:i[0],t,r,{noren:`#2f4f8a`,hip:.5}),Ic(new X(e.solid,Q(n+Math.PI+.72,.56),n-.3),.26,.22,.28,t);let a=new W(Math.sin(n),0,Math.cos(n)),o=new W(a.z,0,-a.x);for(let t=0;t<9;t++){let r=.35+t*.12;e.solid.add(q.box,t%2?`#9a6a3c`:`#a8774a`,[a.x*r,.02,a.z*r],[0,n,0],[.34,.035,.1])}for(let n of[-1,1])for(let r=0;r<3;r++){let i=.5+r*.4;e.solid.add(q.cyl6,`#6b4a2e`,[a.x*i+o.x*n*.17,-.25,a.z*i+o.z*n*.17],void 0,[.05,.32,.05]),t>0&&e.solid.add(q.cyl6,`#3a2a1e`,[a.x*i+o.x*n*.15,.05,a.z*i+o.z*n*.15],void 0,[.04,.06,.04])}let s=new X(e.solid,[0,0,0],0);if(t>0){let e=[a.x*.42-o.x*.1,.037,a.z*.42-o.z*.1];Vc(s,e,1,t),Vc(s,[e[0]+o.x*.05+a.x*.08,.037,e[2]+o.z*.05+a.z*.08],.9,t),Hc(s,[a.x*.4+o.x*.1,.037,a.z*.4+o.z*.1],1,n,t)}if(t===2){let r=Q(n+Math.PI,.62),i=new X(e.solid,r,n+Math.PI/2);for(let e of[-1,1])i.box(`#6b4a2e`,[e*.14,0,0],[.02,.24,.02]);i.box(`#5a6a5a`,[0,.06,0],[.26,.16,.008]),i.box(`#6b4a2e`,[0,.22,0],[.32,.015,.015]),Uc(s,[...Q(n+Math.PI+.25,.4)],1,n,t)}let c=new X(e.solid,Q(n+1.4,.62),n+Math.PI);if(c.box(Z.stoneDark,[0,0,0],[.24,.05,.24]),c.box(Z.stone,[0,.05,0],[.18,.05,.18]),c.box(Z.stone,[0,.1,0],[.1,.28,.1]),c.box(Z.stone,[0,.38,0],[.17,.03,.17]),e.glow.add(q.box,`#ffe28a`,c.p(0,.41,0),[0,c.rot,0],[.1,.1,.1]),t>0)for(let e of[-1,1])for(let t of[-1,1])c.box(Z.woodDark,[e*.055,.41,t*.055],[.018,.1,.018]);c.add(q.cone4,Z.tileGray,[0,.51,0],[.26,.12,.26]),c.add(q.ico0,Z.stone,[0,.66,0],.05);let l=new V(yc(`fishing`),e.mats.solid),u=a.clone().multiplyScalar(1.05).add(o.clone().multiplyScalar(.36));l.position.set(u.x,-.2,u.z),l.rotation.y=n,l.castShadow=!0;let d=e.R()*6;e.parts.push({mesh:l,update:e=>{l.position.y=-.21+Math.sin(e*1.6+d)*.025,l.rotation.z=Math.sin(e*1.3+d)*.09,l.rotation.x=Math.sin(e*1.05+d*2)*.05}}),e.labelHeight=1},dungeon(e){let t=e.name??``;/洞|窟|地道/.test(t)?Tl(e):/武館|遺跡/.test(t)?El(e):/神社/.test(t)?Dl(e):/地窖/.test(t)?Ol(e):wl(e)},cave(e){let t=vl(e),n=Q(t,.38),r=[`#7d746a`,`#8a8075`,`#6e665c`,`#857b6e`],i=e.detail===0?6:9;for(let n=0;n<i;n++){let a=Q(t+(n-(i-1)/2)*(2.6/i),.42+e.R()*.14);e.solid.add(q.dodeca,r[n%4],[a[0],.1+e.R()*.14,a[2]],[e.R()*3,e.R()*3,0],[.3+e.R()*.2,.26+e.R()*.22,.3+e.R()*.1])}e.solid.add(q.dodeca,`#7d746a`,[n[0],.32,n[2]],[.3,t,0],[.75,.58,.5]);let a=new X(e.solid,n,t+Math.PI);if(a.add(ul,`#5e564c`,[0,0,.27],[.56,.56,.06]),a.add(ul,`#0e0a0c`,[0,0,.3],[.44,.44,.06]),e.solid.add(q.halfSphere,`#5f8a48`,[n[0],.56,n[2]],void 0,[.32,.09,.26]),e.detail>0){for(let e of[-1,1])a.add(q.cone4,`#6e665c`,[e*.12,.3,.33],[.05,.1,.05],[Math.PI,0,0]);for(let n=0;n<5;n++){let r=Q(t+(n-2)*.5+.2,.62);e.solid.add(q.cone6,n%2?`#5f8a48`:`#6f9a50`,r,[.3,n,.2],[.05,.14,.05])}e.solid.add(q.halfSphere,`#6f9a50`,Q(t+.8,.5,.18),void 0,[.2,.06,.16])}e.labelHeight=.9},sanctum(e){let t=e.detail,n=new X(e.solid,[0,0,0],0),r={night:e.night};e.solid.add(q.cyl12,`#d8d2c4`,[0,0,0],void 0,[1.38,.06,1.38]),e.solid.add(q.cyl12,`#c8c1b2`,[0,0,0],void 0,[1.5,.03,1.5]);let i=e=>Q(e*Math.PI/3+Math.PI/6,.6);for(let e=0;e<6;e++){let r=i(e);if(n.box(`#e2dccd`,[r[0],.06,r[2]],[.08,.42,.08]),n.add(q.cone4,`#d0c9b8`,[r[0],.48,r[2]],[.11,.06,.11]),e!==2){let a=i(e+1);Rc(n,[r[0],.42,r[2]],[a[0],.42,a[2]],t)}}let a=Q(0,.5);if(e.solid.add(q.dodeca,`#c4beb2`,[a[0],.2,a[2]],[.2,.4,0],[.34,.36,.3]),t>0?e.solid.add(q.torus,Z.rope,[a[0],.24,a[2]],[Math.PI/2,0,0],[.36,.36,.5]):e.solid.add(q.cyl8,Z.rope,[a[0],.22,a[2]],void 0,[.37,.04,.33]),t>0){for(let e of[-.5,.5])n.box(`#ffffff`,[a[0]+e*.12,.18,a[2]-.17],[.025,.06,.006]);for(let e of[-1,1])zc(n,Q(Math.PI+e*.32,.72),.8,t,r)}e.fx.halos.push({at:[a[0],.7,a[2]],color:`#ffd860`,size:1});let o=new gs().add(q.ico1,`#ffd860`,[0,0,0],void 0,.18).add(q.torus,`#fff2b0`,[0,0,0],[Math.PI/2,0,0],.32).build(),s=new V(o,e.mats.glow);s.position.set(a[0],.7,a[2]),e.parts.push({mesh:s,update:e=>{s.position.y=.7+Math.sin(e*1.5)*.04,s.rotation.y=e*.8}}),e.labelHeight=1.1},scourgeLair(e){e.solid.add(q.cyl12,`#2a1a1e`,[0,.002,0],void 0,[1.5,.01,1.5]);for(let t=0;t<9;t++){let n=Math.PI*2/9*t+e.R()*.3,r=Q(n,.55+e.R()*.2),i=.4+e.R()*.5;e.solid.add(q.cone6,t%2?`#3a2228`:`#24161a`,r,[Math.cos(n)*.35,0,-Math.sin(n)*.35],[.12,i,.12])}let t=vl(e),n=Q(t,.42);e.solid.add(q.dodeca,`#2c1c22`,[n[0],.28,n[2]],[.4,t,.2],[.62,.62,.5]);let r=new W(Math.sin(t+Math.PI),0,Math.cos(t+Math.PI)),i=new W(r.z,0,-r.x);for(let t of[-1,1])e.activeGlow.add(q.ico0,`#ff2a2a`,[n[0]+r.x*.26+i.x*t*.09,.42,n[2]+r.z*.26+i.z*t*.09],void 0,[.08,.04,.05]);for(let t=0;t<5;t++){let t=Q(e.R()*Math.PI*2,.3+e.R()*.45);e.solid.add(q.cyl6,`#eee6d4`,[t[0],.02,t[2]],[Math.PI/2,e.R()*3,0],[.025,.16,.025])}if(e.solid.add(q.ico1,`#eee6d4`,[...Q(t+1.2,.5)].map((e,t)=>t===1?.05:e),void 0,.09),e.detail>0){let n=new X(e.solid,Q(t+Math.PI,.55),t);n.add(q.cyl8,`#2a1a1a`,[-.16,0,0],[.05,.42,.05]),n.add(q.cyl8,`#2a1a1a`,[.16,0,0],[.05,.2,.05]),n.box(`#1a1012`,[.02,.36,0],[.52,.05,.07],[0,0,-.35]),e.solid.add(q.ico1,`#eee6d4`,[...Q(t-1.4,.62)].map((e,t)=>t===1?.04:e),void 0,.07)}let a=new gs;for(let e=0;e<6;e++)a.add(q.ico0,`#5a2a6a`,Q(e,.5,.12+e%2*.1),void 0,.12);let o=new V(a.build(),e.mats.chaos);e.parts.push({mesh:o,update:e=>{o.rotation.y=e*.3,o.position.y=Math.sin(e)*.03}}),e.active||(o.visible=!1),e.labelHeight=1.1},chaosGenerator(e){let t=e.detail;e.solid.add(q.cyl12,`#3a3040`,[0,0,0],void 0,[1,.08,1]);let n=Q(Math.PI,.42),r=new X(e.solid,n,0);r.add(q.cyl12,`#4a4048`,[0,0,0],[.6,.06,.6]),r.add(q.halfSphere,e.active?`#5a5058`:`#4a444c`,[0,.05,0],[.5,.56,.5]),r.add(q.cyl8,`#4a4048`,[.1,.2,-.08],[.1,.38,.1]),t>0&&r.add(q.cyl8,`#3a3240`,[.1,.56,-.08],[.13,.04,.13]);let i=t===0?q.box.clone().translate(0,0,.5):ul;if(r.add(i,`#2a2230`,[0,.04,.2],[.22,.2,.06]),(e.active?e.activeGlow:e.inactive).add(i,e.active?`#c070ff`:`#2a2430`,r.p(0,.05,.225),[0,0,0],[.15,.14,.06]),t===0&&i.dispose(),e.active&&e.activeGlow.add(q.cyl8,`#d090ff`,r.p(.1,.58,-.08),void 0,[.09,.02,.09]),t>0){for(let e of[.08,.17])r.add(q.torus,`#2a2430`,[0,.05+e,0],[.5-e*.75,.5-e*.75,.25],[Math.PI/2,0,0]);if(!e.active)for(let e=0;e<3;e++)r.box(`#1a1620`,[-.06+e*.06,.12,.2-e*.02],[.012,.1,.01],[0,0,.4-e*.4])}let a=new gs;for(let e=0;e<6;e++){let t=e*Math.PI/3+.3,n=Q(t,.55),r=.45+e%3*.18;a.add(q.octa,e%2?`#b050ff`:`#8a30e0`,[n[0],r*.5,n[2]],[Math.cos(t)*.25,0,-Math.sin(t)*.25],[.16,r,.16])}if(e.active){let t=new V(a.build(),e.mats.chaos);e.parts.push({mesh:t,update:()=>{}});let r=new V(new gs().add(q.octa,`#e8a0ff`,[0,0,0],void 0,[.22,.5,.22]).build(),e.mats.chaos);r.position.set(n[0],1,n[2]),e.fx.halos.push({at:[n[0],1,n[2]],color:`#c070ff`,size:.9}),e.parts.push({mesh:r,update:e=>{r.rotation.y=e*1.2,r.position.y=1+Math.sin(e*2)*.06}});for(let t=0;t<6;t++){let n=Q(t*Math.PI/3+.3,.55);e.solid.add(q.dodeca,`#2a2230`,[n[0],.05,n[2]],void 0,.16)}}else{for(let t=0;t<6;t++){let n=t*Math.PI/3+.3,r=Q(n,.55);e.inactive.add(q.cyl6,`#6a5a78`,[r[0],.06,r[2]],[Math.cos(n)*.3,0,-Math.sin(n)*.3],[.13,.12+t%3*.08,.13])}for(let t=0;t<10;t++){let n=Q(e.R()*Math.PI*2,.2+e.R()*.6);e.inactive.add(q.octa,t%2?`#7a6a8a`:`#5a4a6a`,[n[0],.08,n[2]],[e.R()*3,0,e.R()*3],[.1,.2,.1])}}e.labelHeight=1.4},cultDevice(e){let t=e.detail,n=vl(e),r=Q(n,.42);e.solid.add(q.cyl8,`#5a5058`,[r[0],0,r[2]],void 0,[.5,.1,.5]),e.solid.add(q.cyl8,`#4a4048`,[r[0],.1,r[2]],void 0,[.38,.08,.38]);let i=new X(e.solid,[r[0],.18,r[2]],n+Math.PI),a=e.active?e.activeGlow:e.inactive;zc(i,[0,0,0],2,t,{night:e.night},a,e.active?`#d070ff`:`#5a5060`,`#6a6070`);let o=new X(e.solid,[0,0,0],0);for(let r of[-1,1]){let i=Q(n+r*1.25,.6);o.add(t===0?q.box:q.cyl6,`#3a3038`,i,[.025,.42,.025]),o.box(`#3a3038`,[i[0],.4,i[2]],[.1,.015,.015],[0,n,0]),Bc(o,[i[0],.28,i[2]],1.1,{night:e.night},e.active?`#6a2a8a`:`#4a4050`,a,e.active?`#e080ff`:`#5a5060`,t)}let s=new $e;s.position.set(r[0],.71,r[2]);let c=new V(new gs().add(q.torus,`#d8a840`,[0,0,0],void 0,[.62,.62,.9]).build(),e.mats.solid),l=new V(new gs().add(q.torus,`#b07a30`,[0,0,0],void 0,[.44,.44,.9]).build(),e.mats.solid);c.castShadow=l.castShadow=!0,s.add(c,l),e.parts.push({mesh:s,update:t=>{e.active&&(c.rotation.x=t*.9,c.rotation.y=t*.4,l.rotation.y=-t*1.3,l.rotation.z=t*.6)}}),e.active||(c.rotation.x=1.2,l.rotation.z=.8,s.position.y-=.12),e.active&&e.fx.halos.push({at:[r[0],.71,r[2]],color:`#c070ff`,size:.7}),(e.active?e.activeGlow:e.inactive).add(q.torus,e.active?`#c03070`:`#4a3a44`,[0,.01,0],[Math.PI/2,0,0],[1.4,1.4,.15]),e.labelHeight=1.2},statue(e){let t=e.detail,n=vl(e),r=Q(n,.42),i=new X(e.solid,r,n+Math.PI);i.box(`#a8a49a`,[0,0,0],[.42,.12,.42]),i.box(`#b4b0a6`,[0,.12,0],[.33,.1,.33]);let a=`#b8b5ae`;i.add(q.ico1,a,[0,.35,-.01],[.26,.3,.22]),i.add(q.ico1,a,[0,.58,.03],[.21,.19,.19]);for(let e of[-1,1])i.add(q.cone4,a,[e*.06,.64,.03],[.07,.1,.05],[0,0,e*-.25]),i.box(a,[e*.045,.22,.07],[.05,.08,.06]);if(i.rod(a,[.05,.25,-.11],[.12,.38,-.06],.035),t>0){i.add(q.cone8,`#c8382a`,[0,.38,.035],[.17,.08,.14],[.15,0,0]);for(let e of[-1,1])i.box(`#5a5650`,[e*.04,.6,.122],[.025,.012,.006]);for(let n of[-1,1])zc(i,[n*.3,0,.14],.7,t,{night:e.night})}e.glow.add(q.cyl8,`#ffd860`,i.p(0,.04,.29),void 0,[.08,.02,.08]),i.add(q.cyl8,`#7a6a5a`,[0,0,.29],[.1,.04,.1]),e.labelHeight=1},camp(e){let t=e.detail,n=vl(e),r=new X(e.solid,[0,0,0],0);for(let i=0;i<3;i++){let a=n-1+2/3*i,o=a+2/3,s=Q(a,.66),c=Q(o,.66),l=[(s[0]+c[0])/2,0,(s[2]+c[2])/2],u=Math.hypot(c[0]-s[0],c[2]-s[2]),d=Math.atan2(c[0]-s[0],c[2]-s[2]),f=new X(e.solid,l,d);f.box(`#ece4d2`,[0,.06,0],[.012,.2,u]),t>0&&(f.box(`#2a2624`,[0,.13,0],[.016,.04,u]),i===1&&f.add(ul,`#2a2624`,[0,.11,-.02],[.08,.08,.04],[0,Math.PI/2,0])),r.add(q.cyl6,`#3a2a1e`,s,[.025,.3,.025]),i===2&&r.add(q.cyl6,`#3a2a1e`,c,[.025,.3,.025])}let i=Q(n+2.1,.5),a=new X(e.solid,i,n+2.1+Math.PI);for(let e of[-1,1])for(let t of[-1,1])a.box(`#5a3e26`,[e*.13,0,t*.1],[.025,.22,.025]);Pc(a,[0,.22,0],.38,.32,.16,Z.thatch,0,0,.02),Uc(a,[0,.045,0],1,Math.PI/2,t),t>0&&Uc(a,[.02,.12,0],.9,Math.PI/2+.2,t);let o=Q(n+3.6,.4);for(let t=0;t<4;t++)e.solid.add(q.cyl6,`#5a3a22`,[o[0],.02,o[2]],[Math.PI/2,t*Math.PI/4,0],[.04,.24,.04]);let s=t===0?4:7;for(let t=0;t<s;t++){let n=Q(Math.PI*2/s*t,.12);e.solid.add(q.dodeca,`#7a7670`,[o[0]+n[0],.02,o[2]+n[2]],void 0,.06)}if(e.active){let t=new V(new gs().add(q.cone6,`#ff8a20`,[0,0,0],void 0,[.16,.26,.16]).add(q.cone6,`#ffd060`,[0,0,0],void 0,[.09,.18,.09]).add(q.cone6,`#ff5a10`,[.04,0,.03],[0,0,.3],[.07,.16,.07]).build(),e.mats.fire);t.position.set(o[0],.03,o[2]),e.parts.push({mesh:t,update:e=>{t.scale.set(1,.85+.25*Math.abs(Math.sin(e*9)*Math.sin(e*5.3)),1),t.rotation.y=e*2}})}let c=Q(n+4.6,.6);if(Hc(r,c,1.3,n,t),t>0&&Hc(r,[c[0],.117,c[2]],1,n+.5,t),t>0&&Vc(r,Q(n+4.95,.56),1,t),t>0){let e=Q(n+1.25,.62);r.add(q.cyl6,`#3a2a1e`,e,[.018,.5,.018]),r.box(`#b8382a`,[e[0]+Math.cos(n)*.04,.22,e[2]-Math.sin(n)*.04],[.008,.24,.08],[0,n+Math.PI/2,0])}e.labelHeight=.9},eventSite(e){let t=e.detail,n=vl(e),r=new X(e.solid,Q(n,.52),n+Math.PI);for(let e of[-1,1])r.box(`#6b4a2e`,[e*.11,0,0],[.03,.36,.03]);if(r.box(`#d8c090`,[0,.16,0],[.26,.14,.02]),t>0)for(let e=0;e<3;e++)r.box(`#3a2a1e`,[-.07+e*.07,.19,.012],[.012,.08,.004]);t>0?Pc(r,[0,.33,0],.32,.1,.06,`#5a4030`,0,t,.02):r.add(q.prism3,`#5a4030`,[0,.33,0],[.32,.12,.12]);let i=new X(e.solid,Q(n+2.2,.55),n);i.box(`#9a6a3c`,[0,.1,0],[.18,.025,.3]);for(let n of[-1,1])i.add(t===0?q.cyl8:q.cyl12,`#5a3a22`,[n*.11,.1,0],[.2,.025,.2],[0,0,Math.PI/2]),i.rod(`#6b4a2e`,[n*.07,.11,.14],[n*.07,.02,.34],.02,e.solid,q.box),t>0&&i.add(q.cyl6,`#3a2a1e`,[n*.12,.1,0],[.04,.03,.04],[0,0,Math.PI/2]);t>0?(Uc(i,[0,.165,-.06],1,Math.PI/2,t),Uc(i,[0,.165,.07],1,Math.PI/2+.15,t)):i.box(`#d8bf7a`,[0,.12,0],[.14,.08,.2]),t===2&&Cl(e,Q(n-1.7,.62));let a=new gs().add(new cn(.1,.035,6,16,Math.PI*1.4).rotateZ(-Math.PI*.4),`#ffd84a`,[0,.17,0]).add(q.box,`#ffd84a`,[0,0,0],void 0,[.06,.08,.06]).add(q.ico0,`#ffd84a`,[0,-.08,0],void 0,.07).build(),o=new V(a,e.mats.glow);o.position.set(0,.8,0),e.parts.push({mesh:o,update:e=>{o.rotation.y=e*1.5,o.position.y=.8+Math.sin(e*2.5)*.06}}),e.active||(o.visible=!1),e.labelHeight=1.05},shrine(e){let t=e.detail,n=vl(e),r={night:e.night},i=new X(e.solid,Q(n+Math.PI,.6),n);Lc(i,.42,.5,t),t>0&&Rc(i,[-.18,.4,.03],[.18,.4,.03],t);let a=new X(e.solid,Q(n,.45),n+Math.PI);a.box(`#b0aa9e`,[0,0,0],[.38,.06,.32]),t>0&&a.box(`#bcb6aa`,[0,.06,0],[.3,.04,.26]);let o=t>0?.1:.06;if(a.box(`#a8784a`,[0,o,0],[.2,.17,.18]),a.box(`#5a3a24`,[0,o+.02,.091],[.12,.12,.006]),a.box(`#e8d8a0`,[0,o+.135,.092],[.04,.03,.006]),Pc(a,[0,o+.17,0],.3,.3,.13,Z.copper,0,t,.05),t>0){for(let e=-1;e<=1;e++)a.add(q.cyl6,`#c8a040`,[e*.07,o+.17+.135,-.05],[.026,.1,.026],[Math.PI/2,0,0]);for(let e of[-1,1])for(let t of[-1,1])a.box(`#8a6a3a`,[e*.15,o+.17+.1,0],[.012,.11,.014],[t*.55,0,0]);a.box(`#6a4a2a`,[0,.06,.2],[.12,.06,.06]),Rc(a,[-.1,o+.16,.105],[.1,o+.16,.105],t)}for(let e of[-1,1])zc(a,[e*.32,0,.18],1,t,r);if(t===2)for(let t of[-1,1]){let r=i.p(t*.3,0,.12);e.solid.add(q.box,`#a8a49a`,r,[0,n,0],[.08,.06,.08]),e.solid.add(q.ico1,`#e8e4dc`,[r[0],.12,r[2]],void 0,[.07,.1,.06]),e.solid.add(q.ico1,`#e8e4dc`,[r[0],.19,r[2]],void 0,.055),e.solid.add(q.cone4,`#e8e4dc`,[r[0],.21,r[2]],[0,n,0],[.05,.06,.03]),e.solid.add(q.box,`#c8382a`,[r[0],.135,r[2]],[0,n,0],[.06,.03,.065])}e.labelHeight=1},portal(e){let t=e.detail,n=new X(e.solid,[0,0,0],0);t>0&&e.solid.add(q.cyl12,`#8e8a98`,[0,0,0],void 0,[1.5,.025,1.5]),e.solid.add(q.cyl12,`#a09cac`,[0,0,0],void 0,[.78,.05,.78]);let r=e=>Q(e*Math.PI/3+Math.PI/6,.62);for(let i=0;i<6;i++){let a=r(i),o=.5+i%2*.12;if(n.add(cl,i%2?`#8d8a96`:`#9894a2`,a,[.15,o,.11],[.04,i*Math.PI/3,.05]),(e.active?e.activeGlow:e.inactive).add(q.box,e.active?`#6ff2ff`:`#6a6878`,[a[0],.28,a[2]],[0,i*Math.PI/3,.05],[.13,.05,.1]),t>0){let e=r(i+1);Rc(n,[a[0],.44,a[2]],[e[0],.44,e[2]],t)}}let i=e.active?`#7af4ff`:`#7a7888`,a=new V(new gs().add(q.torus,i,[0,0,0],void 0,[.62,.62,.8]).add(q.torus,i,[0,0,0],[0,Math.PI/2,0],[.5,.5,.6]).build(),e.active?e.mats.portal:e.mats.solid);if(a.position.y=.95,e.parts.push({mesh:a,update:t=>{e.active&&(a.rotation.y=t*.9,a.position.y=.95+Math.sin(t*1.4)*.05)}}),e.active){e.fx.halos.push({at:[0,.95,0],color:`#7af4ff`,size:1.3});for(let t=0;t<6;t++)e.fx.sparkles.push({at:Q(t*Math.PI/3,.32,.05),color:t%2?`#7af4ff`:`#d8fbff`});let t=new V(new gs().add(new Dt(.22,.4,24).rotateX(-Math.PI/2),`#6ff2ff`,[0,.06,0]).build(),e.mats.portal);e.parts.push({mesh:t,update:e=>{t.rotation.y=-e*.6}})}e.labelHeight=1.5}};function Al(e,t,n=0,r=pl){let i={solid:new gs,glow:new gs,night:new gs,activeGlow:new gs,inactive:new gs,R:ws(Math.floor(Ts(e.q,e.r,5)*4294967295)),parts:[],mats:t,active:e.active!==!1,waterDir:n,labelHeight:1,fx:{smoke:[],halos:[],sparkles:[]},detail:r,region:e.region,name:e.name},a=sl[e.id],o=a?a.scale:dl[e.kind],s=a?a.pad:fl[e.kind];s&&i.solid.add(q.cyl12,s,[0,0,0],void 0,[1.5/o,.006,1.5/o]),a?a.build(i):kl[e.kind](i);let c=new $e;c.scale.setScalar(o),c.userData.locationId=e.id;let l=[],u=[],d=(e,t)=>{if(e.empty)return;let n=e.build(!1);l.push(n),u.push({key:t,geo:n})};d(i.solid,`solid`),d(i.inactive,`solid`),d(i.glow,`glow`),d(i.activeGlow,e.kind===`portal`?`portal`:e.kind===`chaosGenerator`||e.kind===`cultDevice`||e.kind===`scourgeLair`?`chaos`:`glow`),d(i.night,`night`);for(let e of i.parts)c.add(e.mesh),e.mesh.traverse(e=>{e.isMesh&&l.push(e.geometry)});let f=new Zt,p=1/0,m=1/0,h=1/0,g=-1/0,_=-1/0,v=-1/0;for(let e of u){let t=e.geo.getAttribute(`position`).array;for(let e=0;e<t.length;e+=3){let n=t[e+1];if(n<=.03)continue;let r=t[e],i=t[e+2];r<p&&(p=r),r>g&&(g=r),n<m&&(m=n),n>_&&(_=n),i<h&&(h=i),i>v&&(v=i)}}p<=g&&f.set(new W(p,m,h),new W(g,_,v));for(let e of i.parts)e.mesh.updateWorldMatrix(!1,!0),f.union(new Zt().setFromObject(e.mesh));let y=f.isEmpty()?new W(0,i.labelHeight*o,0):new W((f.min.x+f.max.x)/2*o,f.max.y*o+.15,(f.min.z+f.max.z)/2*o);return{group:c,statics:u,fx:i.fx,labelHeight:y.y,labelAnchor:y,update(e,t){for(let n of i.parts)n.mesh.visible&&n.update(e,t)},setLow(e){for(let t of i.parts)t.decorative&&(t.mesh.visible=!e)},dispose(){for(let e of l)e.dispose()}}}var jl=new Set([`portal`,`chaosGenerator`,`cultDevice`,`scourgeLair`]);function Ml(e){return`${e.id}|${e.kind}|${e.q},${e.r}|${jl.has(e.kind)?e.active!==!1:``}`}function Nl(e,t){return Pl.has(e.kind)||t.fx.smoke.length>0||t.fx.halos.length>0||t.fx.sparkles.length>0}var Pl=new Set([`town`,`capital`,`port`,`camp`,`shrine`]),Fl=class{mats;group=new $e;geos=[];jobs=[];sphere=new bt;done=!1;constructor(e,t,n=!1){this.mats=t;let r=new Zt,i=new W;for(let t of e)i.setFromMatrixPosition(t.matrix),r.expandByPoint(i.clone().addScalar(-2.5)),r.expandByPoint(i.addScalar(2.5));r.isEmpty()||r.getBoundingSphere(this.sphere);for(let t of[`solid`,`glow`,`night`,`chaos`,`portal`]){let n=e.flatMap(e=>e.model.statics.filter(e=>e.key===t).map(t=>({geo:t.geo,matrix:e.matrix,fowX:e.fowX,fowZ:e.fowZ})));if(!n.length)continue;let r=0;for(let e of n)r+=e.geo.getAttribute(`position`).count;this.jobs.push({key:t,parts:n,pos:new Float32Array(r*3),nor:new Float32Array(r*3),col:new Float32Array(r*3),fow:new Float32Array(r*2),i:0,o:0})}n||this.step(1/0)}step(e){let t=new H;for(;this.jobs.length;){let n=this.jobs[0];for(;n.i<n.parts.length;){let r=n.parts[n.i++],i=r.geo.getAttribute(`position`).array,a=r.geo.getAttribute(`normal`).array,o=r.geo.getAttribute(`color`).array,s=r.matrix.elements;t.getNormalMatrix(r.matrix);let c=t.elements,{pos:l,nor:u,col:d,fow:f}=n,p=n.o,m=i.length/3;for(let e=0;e<m;e++,p++){let t=e*3,n=p*3,m=i[t],h=i[t+1],g=i[t+2],_=1/(s[3]*m+s[7]*h+s[11]*g+s[15]);l[n]=(s[0]*m+s[4]*h+s[8]*g+s[12])*_,l[n+1]=(s[1]*m+s[5]*h+s[9]*g+s[13])*_,l[n+2]=(s[2]*m+s[6]*h+s[10]*g+s[14])*_;let v=a[t],y=a[t+1],b=a[t+2],x=c[0]*v+c[3]*y+c[6]*b,S=c[1]*v+c[4]*y+c[7]*b,C=c[2]*v+c[5]*y+c[8]*b,w=Math.hypot(x,S,C)||1;x/=w,S/=w,C/=w,u[n]=x,u[n+1]=S,u[n+2]=C,d[n]=o[t],d[n+1]=o[t+1],d[n+2]=o[t+2],f[p*2]=r.fowX,f[p*2+1]=r.fowZ}if(n.o=p,performance.now()>e&&n.i<n.parts.length)return!1}this.jobs.shift();let r=new nn;r.setAttribute(`position`,new zn(n.pos,3)),r.setAttribute(`normal`,new zn(n.nor,3)),r.setAttribute(`color`,new zn(n.col,3)),r.setAttribute(`uv`,new zn(new Float32Array(n.o*2),2)),r.setAttribute(`fowPos`,new zn(n.fow,2)),r.boundingSphere=this.sphere.clone(),this.geos.push(r);let i=new V(r,this.mats.batch[n.key]);if(i.castShadow=i.receiveShadow=n.key===`solid`,this.group.add(i),performance.now()>e&&this.jobs.length)return!1}return this.done=!0,!0}dispose(){for(let e of this.geos)e.dispose();this.jobs.length=0}},Il=typeof createImageBitmap==`function`&&typeof navigator<`u`&&!(/Safari\//.test(navigator.userAgent)&&!/Chrome|Chromium|Edg\//.test(navigator.userAgent)),Ll=1.55/255,Rl=2.6,zl=3.4,Bl=.32,Vl=[2.7,2.1,2.5],Hl=1.9,Ul=2.4,Wl=2.9,Gl=(e,t,n)=>e+(t-e)*n,Kl=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ql=class{loader=new Nt;bitmapLoader=new Kt().setOptions({imageOrientation:`flipY`,premultiplyAlpha:`none`,colorSpaceConversion:`none`});flipped=new Set;onTextureReady=null;blobGeo=new on(.34,24).rotateX(-Math.PI/2);blobTex=Bs(`rgba(30,20,10,0.55)`,`rgba(30,20,10,0)`);blobMat=new Kn({map:this.blobTex,transparent:!0,depthWrite:!1});boatGeos=new Map;balloonGeo=xc();boatMat=new Qn({vertexColors:!0,flatShading:!0});graveGeo=Yl();badgeGeo=new on(1,32).rotateX(-Math.PI/2);ringGeo=new Dt(.9,1.08,32).rotateX(-Math.PI/2);badgeMats={hero:Jl(`#fff3dc`),heroRing:Jl(`#6b4f2e`),monster:Jl(`#ffe2dc`),monsterRing:Jl(`#b0362a`),grave:Jl(`#d8d6d0`),graveRing:Jl(`#5a5852`)};spriteMats=new Set;light=new U(1,1,1);alpha=new Map;boatGeo(e){let t=this.boatGeos.get(e);return t||(t=yc(e),this.boatGeos.set(e,t)),t}texCache=new Map;texture(e,t){let n=this.texCache.get(e);if(!n){let t={base:null,loaded:!1,waiting:[]},r=e=>{t.loaded=!0;let n=e.image;for(let r of t.waiting)r.t.flipY=e.flipY,r.t.needsUpdate=!0,r.cb?.(n);t.waiting=[],this.onTextureReady?.(e)};if(Il){let n=new Jt;n.flipY=!1,n.colorSpace=Ft,n.anisotropy=this.anisotropy,t.base=n,this.bitmapLoader.load(e,t=>{n.image=t,n.needsUpdate=!0,this.flipped.add(e),r(n)},void 0,()=>{this.loader.load(e,e=>{n.image=e.image,n.flipY=!0,n.needsUpdate=!0,r(n)})})}else t.base=this.loader.load(e,r),t.base.colorSpace=Ft,t.base.anisotropy=this.anisotropy;n=t,this.texCache.set(e,n)}let r=n.base.clone();if(r.colorSpace=Ft,r.anisotropy=this.anisotropy,n.loaded){if(r.needsUpdate=!0,t){let e=n.base.image;queueMicrotask(()=>t(e))}}else n.waiting.push({t:r,cb:t});return r}pool=[];anisotropy=4;spriteMaterial(e){let t=this.pool.pop();return t?(t.map=e,t.depthTest=!0,t.depthWrite=!0,t.userData={},t.needsUpdate=!0):t=new Kn({map:e,transparent:!0,alphaTest:.08,side:2,forceSinglePass:!0,toneMapped:!1}),t.color.copy(this.light),this.spriteMats.add(t),t}releaseMaterial(e){this.spriteMats.delete(e),e.map=null,this.pool.length<64?this.pool.push(e):e.dispose()}setLight(e){if(!this.light.equals(e)){this.light.copy(e);for(let t of this.spriteMats)t.userData.tinted||t.color.copy(e)}}opaqueAt(e,t,n,r){let i=this.alpha.get(t);if(i===void 0){let n=e?.image,r=n?.naturalWidth||n?.width||0,a=n?.naturalHeight||n?.height||0;if(!n||!r||!a)return null;try{let e=.5,t=Math.max(1,Math.round(r*e)),o=Math.max(1,Math.round(a*e)),s=document.createElement(`canvas`);s.width=t,s.height=o;let c=s.getContext(`2d`,{willReadFrequently:!0});c.drawImage(n,0,0,t,o);let l=c.getImageData(0,0,t,o).data,u=new Uint8Array(t*o);for(let e=0;e<u.length;e++)u[e]=l[e*4+3];i={w:t,h:o,k:e,data:u}}catch{i=null}this.alpha.set(t,i)}if(!i)return null;let a=Math.floor(n*i.k),o=Math.floor((this.flipped.has(t)?i.h/i.k-1-r:r)*i.k);return a<0||o<0||a>=i.w||o>=i.h?!1:i.data[o*i.w+a]>40}dispose(){this.blobGeo.dispose(),this.blobTex.dispose(),this.blobMat.dispose();for(let e of this.pool)e.dispose();this.pool=[];for(let e of this.texCache.values())e.base.dispose();this.texCache.clear();for(let e of this.boatGeos.values())e.dispose();this.balloonGeo.dispose(),this.boatMat.dispose(),this.graveGeo.dispose(),this.badgeGeo.dispose(),this.ringGeo.dispose();for(let e of Object.values(this.badgeMats))e.dispose()}};function Jl(e){return new Kn({color:e,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95,toneMapped:!1})}function Yl(){let e=new gs;return e.add(q.halfSphere,`#6a5a44`,[0,0,.05],void 0,[.42,.14,.5]),e.add(q.box,`#a8a6a0`,[0,0,-.08],void 0,[.3,.42,.08]),e.add(q.cyl12,`#a8a6a0`,[0,.42,-.08],[Math.PI/2,0,0],[.3,.08,.3]),e.add(q.box,`#7a7872`,[0,.26,-.035],void 0,[.04,.16,.01]),e.add(q.box,`#7a7872`,[0,.31,-.035],void 0,[.12,.035,.01]),e.add(q.ico0,`#e86a8a`,[.12,.05,.12],void 0,.06),e.build()}function Xl(e,t,n){let r=n.x-t.x,i=n.z-t.z;e.rotation.y=Math.atan2(r,i),e.rotation.x=-.5*Math.atan2(n.y-t.y,Math.hypot(r,i))}var Zl=class{anim;tex;geos;frame=0;t=0;constructor(e,t,n){this.anim=t,this.tex=e.texture(t.url);let r=n*(t.scale??1);this.geos=t.frames.map(e=>{let[,,t,n]=e.rect,[i,a]=e.pivot;return new pt(t*r,n*r).translate((t/2-i)*r,(a-n/2)*r,0)}),this.apply()}reset(){this.frame=0,this.t=0,this.apply()}get rect(){return this.anim.frames[this.frame].rect}step(e){let t=this.anim.frames;if(t.length>1){this.t+=e;let n=!1;for(;this.t>t[this.frame].duration;)this.t-=t[this.frame].duration,this.frame=(this.frame+1)%t.length,n=!0;n&&this.apply()}return this.geos[this.frame]}opaque(e,t){let[n,r,i,a]=this.rect;return e.opaqueAt(this.tex,this.anim.url,n+t.x*i,r+(1-t.y)*a)??!0}apply(){let e=this.anim.frames[this.frame],[t,n]=this.anim.size,[r,i,a,o]=e.rect;this.tex.repeat.set(a/t,o/n),this.tex.offset.set(r/t,1-(i+o)/n)}dispose(){this.tex.dispose();for(let e of this.geos)e.dispose()}};function Ql(e,t,n){let r=new $e,i=new V(e.badgeGeo,t),a=new V(e.ringGeo,n);return i.renderOrder=10,a.renderOrder=10,r.add(i,a),r.visible=!1,r}function $l(e,t,n,r,i){e.rotation.set(-Math.PI/2,r.az,0),e.position.set(Math.sin(r.az)*i*r.scale,Wl-n+.02,Math.cos(r.az)*i*r.scale),t.position.set(0,Wl-n,0),t.scale.setScalar(r.scale*i*1.05),t.visible=!0}function eu(e,t){e.depthTest!==!t&&(e.depthTest=!t,e.depthWrite=!t,e.needsUpdate=!0)}var tu=class{kit;id;root=new $e;sprite;badge;players=new Map;current;mat;blob;boat;balloon;grave;lift=Bl;cruiseY=0;face=new W(1,0,0);flip=1;facing=`side`;segs=[];seg=null;onArrive=null;finalBoat=!1;fwd=new W;iconOn=!1;q=0;r=0;dead=!1;onBoat=!1;appear=1;vessel=`fishing`;inBalloon=!1;shareVehicle=!1;constructor(e,t,n){this.kit=e,this.id=t;let r=Ll*(n.worldScale??1);for(let t of[`idle`,`run`,`idleFront`,`idleBack`,`walkFront`,`walkBack`]){let i=n[t];i&&this.players.set(t,new Zl(e,i,r))}this.current=this.players.get(`idle`),this.mat=e.spriteMaterial(this.current.tex),this.sprite=new V(this.current.geos[0],this.mat),this.sprite.rotation.order=`YXZ`,this.sprite.userData.heroId=t,this.sprite.renderOrder=2,this.blob=new V(e.blobGeo,e.blobMat),this.blob.position.y=.012,this.boat=new V(e.boatGeo(`fishing`),e.boatMat),this.boat.scale.set(...Vl),this.boat.castShadow=!0,this.boat.visible=!1,this.balloon=new V(e.balloonGeo,e.boatMat),this.balloon.castShadow=!0,this.balloon.visible=!1,this.balloon.userData.heroId=t,this.grave=new V(e.graveGeo,e.boatMat),this.grave.castShadow=!0,this.grave.scale.setScalar(1.6),this.grave.visible=!1,this.grave.userData.heroId=t,this.badge=Ql(e,e.badgeMats.hero,e.badgeMats.heroRing),this.badge.traverse(e=>{e.userData.heroId=t}),this.root.add(this.blob,this.boat,this.balloon,this.grave,this.badge,this.sprite)}setVessel(e){e!==this.vessel&&(this.vessel=e,this.boat.geometry=this.kit.boatGeo(e))}get moving(){return!!this.seg||this.segs.length>0}followPoint(e=new W){return e.copy(this.root.position),this.inBalloon&&!this.dead&&(e.y+=this.lift*.75),e}setDead(e){this.dead=e,this.sprite.visible=!e,this.grave.visible=e}place(e){this.segs=[],this.seg=null,this.root.position.copy(e)}walk(e,t,n=!1,r){this.cruiseY=r??Math.max(this.root.position.y,...e.map(e=>e.pos.y))+1.9;let i=this.root.position.clone();this.segs=[];let a=!n&&this.onBoat;for(let t of e){let e=Math.hypot(t.pos.x-i.x,t.pos.z-i.z),r=!n&&(t.boat||a);this.segs.push({from:i.clone(),to:t.pos.clone(),t:0,len:Math.max(e,.001),boat:r,hop:Math.abs(t.pos.y-i.y)>.05&&!r&&!n,fly:n}),i=t.pos,a=t.boat}this.finalBoat=e.length?e[e.length-1].boat:this.onBoat,this.onArrive=t}opaqueAt(e,t){return e!==this.sprite||!t||this.current.opaque(this.kit,t)}update(e,t,n,r){if(!this.seg&&this.segs.length){this.seg=this.segs.shift();let e=this.seg,t=new W(e.to.x-e.from.x,0,e.to.z-e.from.z);t.lengthSq()>1e-6&&this.face.copy(t.normalize()),this.onBoat=e.boat}let i=this.root.position,a=this.inBalloon&&!this.dead,o=a&&!!this.seg?.fly,s=o?Math.max(.9,this.cruiseY-i.y):Bl,c=e*1.8;this.lift+=On.clamp(s-this.lift,-c,c);let l=o&&this.lift<s-.2;if(this.seg&&!l){let t=this.seg;t.t=Math.min(1,t.t+e*(t.fly?3:t.boat?zl:Rl)/t.len),i.x=Gl(t.from.x,t.to.x,t.t),i.z=Gl(t.from.z,t.to.z,t.t);let n=t.hop?Math.sin(Math.PI*t.t)*.18:0;if(i.y=Gl(t.from.y,t.to.y,Kl(.3,.7,t.t))+n,t.t>=1&&(this.seg=null,this.segs.length||(this.onBoat=this.finalBoat),!this.segs.length&&this.onArrive)){let e=this.onArrive;this.onArrive=null,e()}}let u=!!r?.on,d=performance.now()/1e3,f=a?Math.sin(d*1.1+this.id.length)*.06:0;this.balloon.visible=a&&!u&&!this.shareVehicle,this.balloon.position.set(Math.sin(d*.7)*.03,this.lift+f,0),this.balloon.rotation.set(Math.sin(d*.9)*.03,d*.12,Math.sin(d*.8)*.03);let p=this.onBoat&&!a;this.boat.visible=p&&!this.dead;let m=p?Math.sin(d*1.8+this.id.length)*.02:0,h=this.vessel===`raft`?0:this.vessel===`merchant`?.62:.52;this.boat.position.set(this.face.x*h,m-.03,this.face.z*h),this.boat.rotation.z=p?Math.sin(d*1.4)*.05:0,this.boat.rotation.y=Math.atan2(this.face.x,this.face.z),this.blob.visible=!p&&!this.dead&&!u,this.blob.scale.setScalar(a?1.8:1),this.fwd.set(n.z,0,-n.x);let g=this.face.dot(this.fwd),_=.62;this.facing===`side`?g>_?this.facing=`back`:g<-.62&&(this.facing=`front`):this.facing===`back`&&g<.5?this.facing=g<-.62?`front`:`side`:this.facing===`front`&&g>-.5&&(this.facing=g>_?`back`:`side`);let v=this.moving&&!p&&!a&&!u,y=u?`front`:this.facing,b=v?y===`front`?`walkFront`:y===`back`?`walkBack`:`run`:y===`front`?`idleFront`:y===`back`?`idleBack`:`idle`,x=this.players.get(b)??this.players.get(v?`run`:`idle`);if(x!==this.current&&(this.current=x,x.reset(),this.mat.map=x.tex),this.sprite.geometry=x.step(e),u!==this.iconOn&&(this.iconOn=u,eu(this.mat,u),this.sprite.renderOrder=u?11:2,u||(this.badge.visible=!1,this.mat.userData.tinted=!1,this.mat.color.copy(this.kit.light))),u){this.sprite.visible=!0,this.grave.visible=!1,this.mat.userData.tinted=this.dead,this.dead?this.mat.color.setScalar(.42):this.mat.color.copy(this.kit.light),$l(this.sprite,this.badge,i.y,r,.75),this.sprite.scale.setScalar(r.scale*this.appear);return}this.sprite.visible=!this.dead,this.grave.visible=this.dead;let S=p?bc[this.vessel]*Vl[1]-.03+m:a?this.balloon.position.y+.04:0;this.sprite.position.set(0,S,0);let C=this.root.getWorldPosition(new W);Xl(this.sprite,C,t),Xl(this.grave,C,t),this.grave.rotation.x=0;let w=this.face.dot(n);Math.abs(w)>.2&&(this.flip=w>0?1:-1);let T=y===`side`?this.flip:1;this.sprite.scale.set(T*this.appear,this.appear,this.appear)}dispose(){for(let e of this.players.values())e.dispose();this.kit.releaseMaterial(this.mat)}},nu=class{kit;spec;root=new $e;pick;badge;sprite=null;mat=null;geo=null;image=null;idlePlayer=null;walkPlayer=null;using=null;phase;height;aspect=1;segs=[];seg=null;onArrive=null;facingRight=!1;iconOn=!1;blob=null;constructor(e,t){this.kit=e,this.spec=t,this.phase=(t.q*7.13+t.r*3.7)%6.28,this.height=t.height??1.2;let n=t.kind===`grave`;if(this.badge=Ql(e,n?e.badgeMats.grave:e.badgeMats.monster,n?e.badgeMats.graveRing:e.badgeMats.monsterRing),this.badge.traverse(e=>{e.userData.tokenId=t.id}),this.root.add(this.badge),n){let n=new V(e.graveGeo,e.boatMat);n.castShadow=!0,n.scale.setScalar(1.6),n.userData.tokenId=t.id,this.root.add(n),this.pick=n;return}this.blob=new V(e.blobGeo,e.blobMat),this.blob.position.y=.012,this.blob.scale.setScalar(1.1),this.root.add(this.blob);let r=t=>new Zl(e,t,this.height/(t.frames[0].rect[3]*(t.scale??1)));t.anim&&(this.idlePlayer=r(t.anim)),t.walk&&(this.walkPlayer=r(t.walk)),this.geo=new pt(1,1).translate(0,.5,0),this.mat=e.spriteMaterial(this.idlePlayer?.tex??null),this.sprite=new V(this.idlePlayer?.geos[0]??this.geo,this.mat),!this.idlePlayer&&t.image&&(this.image=e.texture(t.image,e=>{this.mat&&this.image&&(this.using||(this.mat.map=this.image,this.mat.needsUpdate=!0),this.aspect=e.width/e.height)})),this.using=this.idlePlayer,this.sprite.rotation.order=`YXZ`,this.sprite.userData.tokenId=t.id,this.sprite.renderOrder=2,this.root.add(this.sprite),this.pick=this.sprite}get moving(){return!!this.seg||this.segs.length>0}walk(e,t){let n=this.root.position.clone();this.segs=e.map(e=>{let t={from:n.clone(),to:e.clone(),t:0,len:Math.max(.001,Math.hypot(e.x-n.x,e.z-n.z))};return n=e,t}),this.onArrive=t}opaqueAt(e,t){if(e!==this.sprite||!t)return!0;if(this.using)return this.using.opaque(this.kit,t);if(!this.image||!this.spec.image)return!0;let n=this.image.image;return this.kit.opaqueAt(this.image,this.spec.image,t.x*n.width,(1-t.y)*n.height)??!0}update(e,t,n,r){if(!this.seg&&this.segs.length){this.seg=this.segs.shift();let e=this.seg.to.x-this.seg.from.x,t=this.seg.to.z-this.seg.from.z,r=e*n.x+t*n.z;Math.abs(r)>.2*Math.hypot(e,t)&&(this.facingRight=r>0)}let i=this.root.position,a=0;if(this.seg){let t=this.seg,n=!!this.walkPlayer;if(t.t=Math.min(1,t.t+e*(n?Hl:Ul)/t.len),i.x=Gl(t.from.x,t.to.x,t.t),i.z=Gl(t.from.z,t.to.z,t.t),i.y=Gl(t.from.y,t.to.y,Kl(.2,.8,t.t)),n||(a=Math.sin(Math.PI*t.t),i.y+=a*.35),t.t>=1&&(this.seg=null,!this.segs.length&&this.onArrive)){let e=this.onArrive;this.onArrive=null,e()}}let o=!!r?.on;if(!this.sprite){o?(this.badge.visible=!0,this.badge.position.set(0,Wl-i.y,0),this.badge.scale.setScalar(r.scale*.5),this.pick.position.set(0,Wl-i.y+.02,0),this.pick.scale.setScalar(r.scale*.9),this.pick.rotation.set(-.9,r.az,0,`YXZ`)):(this.badge.visible=!1,this.pick.position.set(0,0,0),this.pick.scale.setScalar(1.6),Xl(this.pick,i,t),this.pick.rotation.x=0);return}let s=this.moving&&this.walkPlayer?this.walkPlayer:this.idlePlayer;s!==this.using&&(this.using=s,s?.reset(),this.mat.map=s?s.tex:this.image,this.mat.needsUpdate=!0),this.blob&&(this.blob.visible=!o),o!==this.iconOn&&(this.iconOn=o,eu(this.mat,o),this.sprite.renderOrder=o?11:2,o||(this.badge.visible=!1));let c=this.using&&this.using===this.walkPlayer&&this.using!==this.idlePlayer?!!this.spec.walkMirror:!!this.spec.mirror,l=(this.facingRight?-1:1)*(c?-1:1),u,d;if(this.using)this.sprite.geometry=this.using.step(e),u=l,d=1;else{this.sprite.geometry=this.geo;let e=performance.now()/1e3,t=1+Math.sin(e*2.2+this.phase)*.03+(this.seg?(a-.5)*.12:0);u=this.height*this.aspect*l/t,d=this.height*t}if(o){$l(this.sprite,this.badge,i.y,r,.65);let e=r.scale*1.3/this.height;this.sprite.scale.set(Math.abs(u)*e*(c?-1:1),d*e,1)}else this.sprite.position.set(0,0,0),Xl(this.sprite,i,t),this.sprite.scale.set(u,d,1)}dispose(){this.mat&&=(this.image?.dispose(),this.kit.releaseMaterial(this.mat),null),this.idlePlayer?.dispose(),this.walkPlayer?.dispose(),this.geo?.dispose()}},ru=`
attribute float aPhase;
attribute float aSpeed;
attribute vec3 aColor;
attribute float aSize;
uniform float uTime;
uniform float uSize;
uniform float uScale;
uniform float uKind;
varying float vAlpha;
varying vec2 vXZ;
varying vec3 vColor;
void main() {
  vec3 p = position;
  float a = 1.0;
  float sz = uSize * aSize;
  if (uKind < 0.5) {
    p += vec3(sin(uTime * 0.7 + aPhase) * 0.32, 0.35 + sin(uTime * 1.3 + aPhase * 2.0) * 0.15, cos(uTime * 0.6 + aPhase * 1.7) * 0.32);
    a = 0.35 + 0.65 * max(0.0, sin(uTime * (2.0 + aSpeed) + aPhase * 5.0));
  } else if (uKind < 1.5) {
    a = 0.8 + 0.2 * sin(uTime * (1.5 + aSpeed * 5.0) + aPhase) * sin(uTime * 3.1 + aPhase * 2.0);
  } else if (uKind < 2.5) {
    float life = fract(uTime * aSpeed + aPhase);
    p += vec3(sin(life * 6.0 + aPhase * 3.0) * 0.28, life * 2.4, cos(life * 5.0 + aPhase) * 0.28);
    a = sin(life * 3.14159);
  } else if (uKind > 3.5) {
    // 花瓣、葉子：從樹梢高度慢慢飄落、左右擺、被風往一邊吹
    float life = fract(uTime * aSpeed + aPhase);
    p += vec3(sin(life * 9.0 + aPhase) * 0.3 + life * 1.1, 1.5 - life * 1.45, cos(life * 7.0 + aPhase * 1.3) * 0.25 + life * 0.4);
    a = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.8, 1.0, life));
    sz *= 0.75 + 0.25 * sin(life * 23.0 + aPhase * 4.0); // 翻面時看起來忽大忽小
  } else {
    // 煙：慢慢往上飄、被風吹歪、越飄越大越淡
    float age = fract(uTime * aSpeed + aPhase);
    p += vec3(age * 0.5 + sin(age * 4.0 + aPhase) * 0.06, age * 1.2, age * 0.15);
    a = clamp(age / 0.1, 0.0, 1.0) * (1.0 - age * 0.9);
    sz = sz * (0.6 + age * 1.5);
  }
  vAlpha = a;
  vXZ = p.xz;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  // 燈火光暈往鏡頭後面推一點：站在城鎮上的主角板子擋得住它（光暈圍在角色四周，不會蓋在臉上）
  if (uKind > 0.5 && uKind < 1.5) mv.xyz += normalize(mv.xyz) * 0.8;
  gl_PointSize = sz * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,iu=`
uniform float uStrength;
uniform float uKind;
varying float vAlpha;
varying vec2 vXZ;
varying vec3 vColor;
${Gs}
void main() {
  if (uFowOn > 0.5 && fowSample(vXZ).r < 0.9) discard; // 看不到的地方不畫
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float glow = 1.0 - smoothstep(0.0, 0.5, d); // smoothstep 兩個邊界不能反過來寫（有些顯示卡會全變 0）
  // 煙（uKind 3）：一般混色、軟邊；其他：加亮、中間亮
  bool smoke = uKind > 2.5;
  // 煙：中間是實心的一團、邊緣才淡出（看起來像一朵一朵的煙）；花瓣：小小的實心片
  float g = smoke ? 1.0 - smoothstep(uKind > 3.5 ? 0.3 : 0.22, uKind > 3.5 ? 0.42 : 0.5, d) : glow * glow;
  // 發光的點點（燈火、螢火蟲、火星）：後製開著時乘上 uGlow 讓光暈抓得到；燈火光暈本身已經很大，只乘一半
  vec3 col = smoke ? vColor : vColor * (0.6 + 0.8 * g) * (uKind > 0.5 && uKind < 1.5 ? 1.0 + (uGlow - 1.0) * 0.3 : uGlow);
  gl_FragColor = vec4(col, g * vAlpha * uStrength);
}
`,au=class{group=new $e;foam=null;fireflies;embers;lights=null;smoke=null;halos=null;sparkles=null;petals;curse=null;disposables=[];level=`high`;scale={value:360};constructor(e){this.foam=this.buildFoam(e),this.foam&&this.group.add(this.foam);let t=[],n=[],r=[],i=[`#ffd0e0`,`#ffffff`,`#ffe9a8`,`#f7b6c8`,`#9fd36a`];for(let a of e.values()){let e=Ts(a.tile.q,a.tile.r,91),o=a.tile.terrain;(o===`forest`||o===`swamp`)&&e<.5?t.push({pos:new W(a.x+(e-.17)*2,a.h,a.z+(Ts(a.tile.q,a.tile.r,92)-.5)*1.2)}):o===`grass`&&e<.15&&t.push({pos:new W(a.x,a.h,a.z)});let s=fc[a.tile.region];(o===`forest`||o===`grass`)&&(s===`forest`||s===`plains`||s===`isles`)&&Ts(a.tile.q,a.tile.r,95)<.16&&r.push({pos:new W(a.x+(e-.5)*.9,a.h,a.z+(Ts(a.tile.q,a.tile.r,96)-.5)*.9),color:i[Math.floor(Ts(a.tile.q,a.tile.r,97)*i.length)]});let c=fc[a.tile.region]===`burning`;if((o===`lava`||c&&(o===`ash`||o===`mountain`))&&e<(o===`ash`?.5:.9)){let e=o===`ash`?2:4;for(let t=0;t<e;t++)n.push({pos:new W(a.x+(Ts(a.tile.q,t,93)-.5)*1.2,a.h+(o===`mountain`?.9:.05),a.z+(Ts(a.tile.r,t,94)-.5)*1.2)})}}this.fireflies=this.points(t,0,`#e2ff80`,1.1,!0),this.embers=this.points(n,2,`#ffa040`,.8,!0),this.petals=this.points(r,4,`#ffd0e0`,.16,!0),this.group.add(this.fireflies.points,this.embers.points,this.petals.points)}setCurse(e){if(this.curse&&=(this.group.remove(this.curse.points),this.curse.points.geometry.dispose(),this.curse.mat.dispose(),null),!e.length)return;let t=[];for(let n of e)for(let e=0;e<2;e++)t.push({pos:new W(n.x+(Ts(n.tile.q,e,98)-.5)*1.1,n.h+.05,n.z+(Ts(n.tile.r,e,99)-.5)*1.1),color:e?`#d6a8ff`:`#a060f0`});this.curse=this.points(t,2,`#c890ff`,.5,!0),this.group.add(this.curse.points),this.setQuality(this.level)}setLocationFx(e){for(let e of[this.lights,this.smoke,this.halos,this.sparkles])e&&(this.group.remove(e.points),e.points.geometry.dispose(),e.mat.dispose());this.lights=this.points(e.lights,1,`#ffc46a`,5,!1),this.smoke=this.points(e.smoke,3,`#e4e0da`,.38,!1),this.halos=this.points(e.halos,1,`#ffe08a`,4.6,!1),this.sparkles=this.points(e.sparkles,2,`#7af4ff`,.45,!0),this.group.add(this.lights.points,this.smoke.points,this.halos.points,this.sparkles.points),this.setQuality(this.level)}points(e,t,n,r,i){let a=e.map((e,t)=>({p:e,k:Ts(Math.round(e.pos.x*10),Math.round(e.pos.z*10),t)})).sort((e,t)=>e.k-t.k),o=a.length,s=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o),u=new Float32Array(o*3),d=new Float32Array(o),f=new U;a.forEach(({p:e,k:r},i)=>{s.set([e.pos.x,e.pos.y,e.pos.z],i*3),c[i]=r*6.283,l[i]=t===2?.18+r*.25:t===3?.12+r*.08:t===4?.06+r*.05:r,f.set(e.color??n),u.set([f.r,f.g,f.b],i*3),d[i]=e.size??1});let p=new nn;p.setAttribute(`position`,new zn(s,3)),p.setAttribute(`aPhase`,new zn(c,1)),p.setAttribute(`aSpeed`,new zn(l,1)),p.setAttribute(`aColor`,new zn(u,3)),p.setAttribute(`aSize`,new zn(d,1));let m=new Gt({vertexShader:ru,fragmentShader:iu,uniforms:{...J,uScale:this.scale,uSize:{value:r},uKind:{value:t},uStrength:{value:1}},transparent:!0,depthWrite:!1,blending:t===3||t===4?1:2}),h=new St(p,m);return h.frustumCulled=!1,h.renderOrder=5,{points:h,mat:m,count:o,kind:t,half:i}}buildFoam(e){let t=[],n=[],r=rc+.004;for(let i of e.values())if(ac(i.tile.terrain))for(let[a,o]of ys){let s=e.get(bs(i.tile.q+a,i.tile.r+o));if(!s||ac(s.tile.terrain))continue;let c=Math.atan2(s.x-i.x,s.z-i.z),l=i.x+Math.sin(c-Math.PI/6)*1,u=i.z+Math.cos(c-Math.PI/6)*1,d=i.x+Math.sin(c+Math.PI/6)*1,f=i.z+Math.cos(c+Math.PI/6)*1,p=.55,m=l+(i.x-l)*p,h=u+(i.z-u)*p,g=d+(i.x-d)*p,_=f+(i.z-f)*p,v=(l+u)*.6,y=(d+f)*.6;t.push(l,r,u,d,r,f,g,r,_,l,r,u,g,r,_,m,r,h),n.push(v,0,y,0,y,1,v,0,y,1,v,1)}if(!t.length)return null;let i=new nn;i.setAttribute(`position`,new ft(t,3)),i.setAttribute(`uv`,new ft(n,2)),i.computeVertexNormals();let a=new nt(new Uint8Array([255,255,255,255]),1,1);a.needsUpdate=!0;let o=tc(new Kn({color:`#f4fbff`,map:a,transparent:!0,depthWrite:!1,side:2,forceSinglePass:!0,toneMapped:!1}),{fow:`fragment`,foam:!0});this.disposables.push(i,a,o);let s=new V(i,o);return s.renderOrder=1,s}setQuality(e){this.level=e;let t=e!==`low`;this.foam&&(this.foam.visible=t);for(let n of[this.fireflies,this.embers,this.lights,this.smoke,this.halos,this.sparkles,this.petals,this.curse])n&&(n.points.visible=t,n.points.geometry.setDrawRange(0,e===`medium`&&n.half?Math.ceil(n.count/2):n.count))}update(e,t){this.scale.value=t*.5,this.fireflies.mat.uniforms.uStrength.value=.95*e,this.embers.mat.uniforms.uStrength.value=.7+.3*e,this.lights&&(this.lights.mat.uniforms.uStrength.value=.75*e),this.smoke&&(this.smoke.mat.uniforms.uStrength.value=.85-.45*e),this.halos&&(this.halos.mat.uniforms.uStrength.value=.6+.4*e),this.sparkles&&(this.sparkles.mat.uniforms.uStrength.value=.8+.2*e),this.petals.mat.uniforms.uStrength.value=.95*(1-e),this.curse&&(this.curse.mat.uniforms.uStrength.value=.85)}dispose(){for(let e of[this.fireflies,this.embers,this.lights,this.smoke,this.halos,this.sparkles,this.petals,this.curse])e&&(e.points.geometry.dispose(),e.mat.dispose());for(let e of this.disposables)e.dispose()}},ou=()=>new Dt(.74,.9,6,1,Math.PI/2).rotateX(-Math.PI/2),su=(e,t)=>new Kn({color:e,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),cu={reach:`#fff6c0`,danger:`#ff5a4a`,target:`#ffb020`,info:`#7ad8ff`},lu=class{mesh;m=new hn;constructor(e,t,n){this.mesh=new yt(e,t,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}set(e){let t=Math.min(e.length,this.mesh.instanceMatrix.count);for(let n=0;n<t;n++){let t=e[n];this.m.makeScale(t.s??1,1,t.s??1).setPosition(t.x,t.y,t.z),this.mesh.setMatrixAt(n,this.m)}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0}},uu=class{group=new $e;disposables=[];hoverRing;selRing;dots;highlights=new Map;beams=[];beamGeo;beamTex;curse=null;curseCells=[];rain=null;rainPos=null;time=0;constructor(){let e=ou();this.disposables.push(e);let t=su(`#fffbe0`,.8),n=su(`#ffb020`,.95);this.disposables.push(t,n),this.hoverRing=new V(e,t),this.hoverRing.visible=!1,this.hoverRing.renderOrder=1,this.selRing=new V(e,n),this.selRing.visible=!1,this.selRing.renderOrder=1,this.group.add(this.hoverRing,this.selRing);let r=new on(.1,14).rotateX(-Math.PI/2),i=su(`#ffffff`,.9);this.disposables.push(r,i),this.dots=new lu(r,i,80),this.group.add(this.dots.mesh);for(let e of Object.keys(cu)){let t=new Dt(.8,.88,6,1,Math.PI/2).rotateX(-Math.PI/2),n=su(cu[e],.55);this.disposables.push(t,n);let r=new lu(t,n,4e3);this.highlights.set(e,r),this.group.add(r.mesh)}this.beamGeo=new $t(.45,.45,4,20,1,!0).translate(0,2,0),this.beamTex=Vs(),this.disposables.push(this.beamGeo,this.beamTex)}hover(e){this.hoverRing.visible=!!e,e&&this.hoverRing.position.set(e.x,e.h+.014,e.z)}select(e){this.selRing.visible=!!e,e&&this.selRing.position.set(e.x,e.h+.016,e.z)}path(e){this.dots.set(e.map(e=>({x:e.x,y:e.h+.02,z:e.z})))}highlight(e,t){this.highlights.get(e).set(t.map(e=>({x:e.x,y:e.h+.01,z:e.z})))}setCurse(e){if(this.curse&&=(this.group.remove(this.curse),this.curse.dispose(),null),this.curseCells=[],!e.length)return;let t=new gs;t.add(q.octa,`#c060ff`,[.35,0,.1],void 0,[.1,.26,.1]),t.add(q.octa,`#9a40e0`,[-.3,.08,.25],[.3,0,.2],[.08,.2,.08]),t.add(q.octa,`#d890ff`,[.05,.15,-.38],[0,0,-.3],[.07,.17,.07]);let n=t.build(),r=new Kn({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.85});this.disposables.push(n,r),this.curse=new yt(n,r,e.length),this.curse.frustumCulled=!1,this.curseCells=e.map(e=>({x:e.x,y:e.h+.25,z:e.z,ph:(e.tile.q*1.7+e.tile.r*2.3)%6.28})),this.group.add(this.curse)}beam(e,t,n,r=`#7af4ff`,i=1.1){let a=new Kn({map:this.beamTex,color:r,transparent:!0,blending:2,depthWrite:!1,side:2,forceSinglePass:!0,toneMapped:!1}),o=new V(this.beamGeo,a);o.position.set(e,t,n),o.renderOrder=3,this.group.add(o),this.beams.push({mesh:o,t:0,dur:i})}setRain(e){if(!e){this.rain&&=(this.group.remove(this.rain),this.rain.geometry.dispose(),this.rain.material.dispose(),null);return}if(this.rain)return;let t=2500;this.rainPos=new Float32Array(t*6);for(let e=0;e<t;e++){let t=(Math.random()-.5)*50,n=Math.random()*18,r=(Math.random()-.5)*50;this.rainPos.set([t,n,r,t+.05,n+.45,r],e*6)}let n=new nn;n.setAttribute(`position`,new zn(this.rainPos,3));let r=new An({color:`#cfe0f0`,transparent:!0,opacity:.45,depthWrite:!1});this.rain=new vn(n,r),this.rain.frustumCulled=!1,this.group.add(this.rain)}update(e,t){if(this.time+=e,this.curse){let e=new hn,t=new tt,n=new W(1,1,1),r=new W,i=new W(0,1,0);this.curseCells.forEach((a,o)=>{t.setFromAxisAngle(i,this.time*.5+a.ph),e.compose(r.set(a.x,a.y+Math.sin(this.time*1.5+a.ph)*.08,a.z),t,n),this.curse.setMatrixAt(o,e)}),this.curse.instanceMatrix.needsUpdate=!0}for(let t=this.beams.length-1;t>=0;t--){let n=this.beams[t];n.t+=e;let r=n.t/n.dur,i=n.mesh.material;i.opacity=Math.sin(Math.min(1,r)*Math.PI),n.mesh.scale.set(1-r*.4,.4+r*.8,1-r*.4),n.mesh.rotation.y+=e*3,r>=1&&(this.group.remove(n.mesh),i.dispose(),this.beams.splice(t,1))}if(this.rain&&this.rainPos){let n=this.rainPos,r=e*16;for(let e=0;e<n.length;e+=6)if(n[e+1]=n[e+1]-r,n[e+4]=n[e+4]-r,n[e+1]<0){let r=t.x+(Math.random()-.5)*50,i=t.z+(Math.random()-.5)*50,a=14+Math.random()*4;n[e]=r,n[e+1]=a,n[e+2]=i,n[e+3]=r+.05,n[e+4]=a+.45,n[e+5]=i}this.rain.geometry.attributes.position.needsUpdate=!0}}get busy(){return this.beams.length>0}dispose(){this.setRain(!1);for(let e of this.beams)e.mesh.material.dispose();this.curse?.dispose();for(let e of this.disposables)e.dispose()}};function du(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new nn,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=fu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=fu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function fu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new zn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function pu(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var mu=3,hu=.6,gu=600,_u=(e,t,n=!1)=>new Kn({color:e,transparent:!0,opacity:t,depthWrite:!1,depthTest:!1,toneMapped:!1,blending:n?2:1});function vu(){let e=[];e.push(new on(.07,16).scale(1.25,1,1).translate(0,-.02,0));for(let[t,n]of[[-.085,.06],[-.03,.1],[.03,.1],[.085,.06]])e.push(new on(.03,10).translate(t,n,0));let t=du(e);for(let t of e)t.dispose();return t.rotateX(-Math.PI/2)}var yu=class{group=new $e;paws;glows;ring;ringInner;pawMat=_u(`#ffe27a`,.95);glowMat=_u(`#ffb020`,.42,!0);ringMat=_u(`#ffd04a`,.9,!0);innerMat=_u(`#fff1b0`,.35,!0);geos=[];total=0;t=0;dur=1;arrived=!1;live=!1;onArrive=null;constructor(){let e=vu(),t=new on(.17,18).rotateX(-Math.PI/2),n=new Dt(.6,.9,6,1,Math.PI/2).rotateX(-Math.PI/2),r=new on(.6,6,Math.PI/2).rotateX(-Math.PI/2);this.geos.push(e,t,n,r),this.paws=new yt(e,this.pawMat,gu),this.glows=new yt(t,this.glowMat,gu);for(let e of[this.paws,this.glows])e.count=0,e.frustumCulled=!1;this.glows.renderOrder=6,this.paws.renderOrder=7,this.ring=new V(n,this.ringMat),this.ringInner=new V(r,this.innerMat),this.ring.renderOrder=7,this.ringInner.renderOrder=6,this.group.add(this.glows,this.paws,this.ringInner,this.ring),this.group.visible=!1}show(e,t,n){let r=new hn,i=new tt,a=new W(1,1,1),o=new W,s=new W(0,1,0),c=0;for(let t=0;t+1<e.length&&c<gu;t++){let n=e[t],l=e[t+1],u=l.x-n.x,d=l.z-n.z,f=Math.hypot(u,d)||1;i.setFromAxisAngle(s,Math.atan2(-u,-d));for(let e of[.3,.75]){if(c>=gu)break;let t=c%2==0?1:-1,s=-d/f*.1*t,p=u/f*.1*t;o.set(n.x+u*e+s,n.h+(l.h-n.h)*e+.04,n.z+d*e+p),r.compose(o,i,a),this.paws.setMatrixAt(c,r),this.glows.setMatrixAt(c,r),c++}}this.total=c,this.paws.instanceMatrix.needsUpdate=!0,this.glows.instanceMatrix.needsUpdate=!0,this.paws.count=0,this.glows.count=0,this.ring.visible=this.ringInner.visible=!!t,t&&(this.ring.position.set(t.x,t.h+.05,t.z),this.ringInner.position.copy(this.ring.position)),this.t=0,this.dur=Math.max(.05,n),this.arrived=!1,this.live=!0,this.group.visible=!0,this.setAlpha(1)}clear(){this.live=!1,this.group.visible=!1,this.paws.count=0,this.glows.count=0}get active(){return this.live}get alpha(){return this.live?this.fade:0}fade=1;setAlpha(e){this.fade=e,this.pawMat.opacity=.95*e,this.glowMat.opacity=.42*e,this.innerMat.opacity=.35*e}update(e){if(!this.live)return!1;this.t+=e;let t=Math.min(1,this.t/this.dur),n=t*t*(3-2*t),r=Math.min(this.total,Math.ceil(n*this.total));this.paws.count=r,this.glows.count=r,t>=1&&!this.arrived&&(this.arrived=!0,this.onArrive?.());let i=Math.sin(this.t*5);this.ring.scale.setScalar(1+.1*i),this.ring.rotation.y=this.t*.6;let a=this.t-this.dur,o=a>mu?Math.max(0,1-(a-mu)/hu):1;return this.ringMat.opacity=(.65+.3*i)*o,this.setAlpha(o),o<=0?(this.clear(),!1):!0}dispose(){for(let e of this.geos)e.dispose();for(let e of[this.pawMat,this.glowMat,this.ringMat,this.innerMat])e.dispose();this.paws.dispose(),this.glows.dispose()}},bu=`
attribute float cover;
varying float vCover;
varying vec3 vWorld;
varying float vDepth;
void main() {
  vCover = cover;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mv = viewMatrix * wp;
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,xu=`
uniform float uTime;
uniform vec3 uDark;
uniform vec3 uLight;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uLow;
varying float vCover;
varying vec3 vWorld;
varying float vDepth;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { return 0.55 * vnoise(p) + 0.3 * vnoise(p * 2.03 + 3.1) + 0.15 * vnoise(p * 4.1 + 7.7); }
void main() {
  vec2 p = vWorld.xz;
  float n, n2;
  if (uLow > 0.5) { n = vnoise(p * 0.32 + vec2(uTime * 0.05, uTime * 0.03)); n2 = 0.5; } // 低畫質：一層雜訊就好
  else {
    n = fbm(p * 0.32 + vec2(uTime * 0.05, uTime * 0.03));
    n2 = fbm(p * 0.85 - vec2(uTime * 0.04, -uTime * 0.02));
  }
  float a = smoothstep(0.42, 0.92, vCover) * (0.86 + 0.14 * n);
  if (a < 0.01) discard;
  vec3 col = mix(uDark, uLight, clamp(n * 0.75 + n2 * 0.45 - 0.1, 0.0, 1.0));
  float f = smoothstep(uFogNear, uFogFar, vDepth);
  gl_FragColor = vec4(mix(col, uFogColor, f), a);
}
`,Su=class{mesh;cur;target;index=new Map;qs;rs;attr;animating=!1;uniforms={uTime:{value:0},uDark:{value:new U(`#232836`)},uLight:{value:new U(`#596277`)},uFogColor:{value:new U(`#bfe3f2`)},uFogNear:{value:40},uFogFar:{value:90},uLow:J.uLow};constructor(e){let t=[...e.values()];this.qs=new Int32Array(t.length),this.rs=new Int32Array(t.length);let n=new Float32Array(t.length*3);t.forEach((e,t)=>{this.index.set(bs(e.tile.q,e.tile.r),t),this.qs[t]=e.tile.q,this.rs[t]=e.tile.r;let r=e.tile.terrain===`mountain`?1.55:e.tile.terrain===`forest`||e.tile.terrain===`snow`?.9:e.tile.terrain===`hill`||e.tile.terrain===`rock`?.75:e.tile.location?1.1:.55;n.set([e.x,e.h+r,e.z],t*3)});let r=[];for(let e of t){let t=this.index.get(bs(e.tile.q,e.tile.r)),n=this.index.get(bs(e.tile.q+1,e.tile.r)),i=this.index.get(bs(e.tile.q,e.tile.r+1)),a=this.index.get(bs(e.tile.q+1,e.tile.r-1));n!==void 0&&i!==void 0&&r.push(t,i,n),n!==void 0&&a!==void 0&&r.push(t,n,a)}this.cur=new Float32Array(t.length),this.target=new Float32Array(t.length);let i=new nn;i.setAttribute(`position`,new zn(n,3)),this.attr=new zn(this.cur,1),this.attr.setUsage(Sn),i.setAttribute(`cover`,this.attr),i.setIndex(r),i.computeBoundingSphere();let a=new Gt({vertexShader:bu,fragmentShader:xu,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:2,forceSinglePass:!0});this.mesh=new V(i,a),this.mesh.renderOrder=4,this.mesh.frustumCulled=!1}set(e,t){let n=!1;for(let t=0;t<this.qs.length;t++){let r=+!!e(this.qs[t],this.rs[t]);this.target[t]!==r&&(this.target[t]=r,n=!0)}(n||t)&&(t?(this.cur.set(this.target),this.attr.needsUpdate=!0,this.animating=!1):this.animating=!0)}update(e,t,n,r){this.uniforms.uTime.value=t,this.uniforms.uFogColor.value.copy(n.color),this.uniforms.uFogNear.value=n.near,this.uniforms.uFogFar.value=n.far;let i=1-r*.45;if(this.uniforms.uDark.value.setRGB(.137*i,.157*i,.212*i),this.uniforms.uLight.value.setRGB(.35*i,.384*i,.467*i),!this.animating)return;let a=!1,o=Math.min(1,e*3);for(let e=0;e<this.cur.length;e++){let t=this.target[e]-this.cur[e];Math.abs(t)>.004?(this.cur[e]=this.cur[e]+t*o,a=!0):this.cur[e]=this.target[e]}this.attr.needsUpdate=!0,this.animating=a}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Cu=`
attribute float cover;
varying float vCover;
varying vec3 vWorld;
void main() {
  vCover = cover;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,wu=`
${Gs}
uniform vec3 uDeep;
uniform vec3 uLight;
uniform float uStrength;
varying float vCover;
varying vec3 vWorld;
float fbm(vec2 p) { return 0.55 * qkNoise(p) + 0.3 * qkNoise(p * 2.07 + 3.1) + 0.15 * qkNoise(p * 4.13 + 7.7); }
void main() {
  float cv = smoothstep(0.05, 0.85, vCover);
  if (cv < 0.01) discard;
  vec2 p = vWorld.xz;
  float n = fbm(p * 0.55 + vec2(uTime * 0.06, -uTime * 0.035));
  float n2 = fbm(p * 1.25 - vec2(uTime * 0.045, uTime * 0.05) + n * 1.3);
  float a = cv * (0.24 + 0.56 * smoothstep(0.28, 0.85, n2)) * uStrength;
  // 迷霧：看不到的地方淡一點、沒探索過的不畫（上面還蓋著雲）
  if (uFowOn > 0.5) { float L = fowSample(vWorld.xz).r; a *= smoothstep(0.02, 0.6, L); }
  if (a < 0.004) discard;
  vec3 col = mix(uDeep, uLight, smoothstep(0.2, 0.9, n * 0.6 + n2 * 0.6));
  gl_FragColor = vec4(col, a);
}
`,Tu=class{mesh;qs;rs;index=new Map;cur;target;attr;animating=!1;on=!0;any=!1;uniforms={...J,uDeep:{value:new U(`#5a2a8a`)},uLight:{value:new U(`#c9a0f0`)},uStrength:{value:1}};constructor(e){let t=[...e.values()];this.qs=new Int32Array(t.length),this.rs=new Int32Array(t.length);let n=new Float32Array(t.length*3);t.forEach((e,t)=>{this.index.set(bs(e.tile.q,e.tile.r),t),this.qs[t]=e.tile.q,this.rs[t]=e.tile.r,n.set([e.x,e.h+.16,e.z],t*3)});let r=[];for(let e of t){let t=this.index.get(bs(e.tile.q,e.tile.r)),n=this.index.get(bs(e.tile.q+1,e.tile.r)),i=this.index.get(bs(e.tile.q,e.tile.r+1)),a=this.index.get(bs(e.tile.q+1,e.tile.r-1));n!==void 0&&i!==void 0&&r.push(t,i,n),n!==void 0&&a!==void 0&&r.push(t,n,a)}this.cur=new Float32Array(t.length),this.target=new Float32Array(t.length);let i=new nn;i.setAttribute(`position`,new zn(n,3)),this.attr=new zn(this.cur,1),this.attr.setUsage(Sn),i.setAttribute(`cover`,this.attr),i.setIndex(r),i.computeBoundingSphere();let a=new Gt({vertexShader:Cu,fragmentShader:wu,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:2,forceSinglePass:!0});this.mesh=new V(i,a),this.mesh.renderOrder=3,this.mesh.frustumCulled=!1,this.mesh.visible=!1}set(e,t=!1){this.target.fill(0);let n=!1;for(let t of e){let e=this.index.get(bs(t.q,t.r));e!==void 0&&(this.target[e]=1,n=!0)}t?(this.cur.set(this.target),this.attr.needsUpdate=!0,this.animating=!1):this.animating=!0,n&&(this.any=!0),this.mesh.visible=this.on&&this.any}setEnabled(e){this.on=e,this.mesh.visible=this.on&&this.any}update(e,t){if(this.uniforms.uStrength.value=1-t*.25,!this.animating)return;let n=!1,r=!1,i=Math.min(1,e*2);for(let e=0;e<this.cur.length;e++){let t=this.target[e]-this.cur[e];Math.abs(t)>.004?(this.cur[e]=this.cur[e]+t*i,n=!0):this.cur[e]=this.target[e],this.cur[e]>0&&(r=!0)}this.attr.needsUpdate=!0,this.animating=n,this.any=r,this.mesh.visible=this.on&&this.any}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Eu={r1_forest:.35,r2_bog:.5,r2_plains:.2,r2_isles:.3},Du={r1_forest:1,r2_plains:2,r2_bog:3,r2_isles:4,r2_burning:5,r3_desert:6,r3_badlands:7,r3_ocean:8};function Ou(e){let t=Math.max(0,Math.floor(e)),n=new Set;for(let[e,r]of Object.entries(Eu))Ts(t,Du[e],4401)<r&&n.add(e);return{rain:n,seaStorm:Ts(t,0,4402)<.25,chaosStorm:Ts(t,0,4403)<.45}}function ku(e,t,n){return e.terrain===`snow`?[0,1,0]:(e.terrain===`deepWater`||e.region===`r3_ocean`)&&t.seaStorm||n&&t.chaosStorm?[1,0,1]:t.rain.has(e.region)?[.85,0,0]:[0,0,0]}var Au=`
attribute vec4 aSeed;
uniform vec3 uCenter;
uniform float uBox;
uniform float uHeight;
uniform float uScale;
varying float vKind;
varying float vAlpha;
varying vec2 vXZ;
${Gs}
void main() {
  // 世界座標固定的方框：鏡頭移動時雨滴不會跟著滑
  vec2 xz = uCenter.xz + mod(aSeed.xz * uBox - uCenter.xz + uBox * 0.5, uBox) - uBox * 0.5;
  vec3 w = texture2D(uWeatherTex, fieldUv(xz)).rgb;
  float snow = step(0.35, w.g);
  float rain = max(w.r, w.b) * (1.0 - snow);
  float dens = snow > 0.5 ? w.g : rain;
  vKind = snow;
  vAlpha = step(aSeed.w, dens * (1.0 + 0.4 * w.b)); // 這一顆在這裡要不要畫（越濃畫越多顆）
  float speed = snow > 0.5 ? 0.7 : 9.0 + 3.0 * w.b;
  float y = mod(aSeed.y * uHeight - uTime * speed * (0.8 + 0.4 * aSeed.w), uHeight);
  vec3 p = vec3(xz.x, uCenter.y - 1.5 + y, xz.y);
  if (snow > 0.5) p.xz += vec2(sin(uTime * 0.9 + aSeed.x * 40.0), cos(uTime * 0.7 + aSeed.z * 40.0)) * 0.35;
  else p.x += (uHeight - y) * 0.06; // 雨絲被風吹斜一點
  vXZ = p.xz;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  // 太靠近鏡頭的別畫成一大條（最大約畫面高度的 6%）
  gl_PointSize = min((snow > 0.5 ? 0.17 : 0.42) * uScale / max(0.5, -mv.z), uScale * 0.06);
  if (vAlpha < 0.5) gl_PointSize = 0.0;
  gl_Position = projectionMatrix * mv;
}
`,ju=`
uniform float uNightW;
varying float vKind;
varying float vAlpha;
varying vec2 vXZ;
${Gs}
void main() {
  if (vAlpha < 0.5) discard;
  if (uFowOn > 0.5 && fowSample(vXZ).r < 0.01) discard; // 沒探索過的地方（上面蓋著雲）不畫
  vec2 c = gl_PointCoord - 0.5;
  float a;
  vec3 col;
  if (vKind > 0.5) { // 雪花：軟軟的白點
    a = 1.0 - smoothstep(0.2, 0.5, length(c));
    col = vec3(1.0);
    a *= 0.95;
  } else { // 雨絲：細細的一條斜線
    float x = c.x + c.y * 0.12;
    a = (1.0 - smoothstep(0.0, 0.05, abs(x))) * (1.0 - smoothstep(0.25, 0.5, abs(c.y)));
    col = vec3(0.78, 0.86, 0.95);
    a *= 0.45;
  }
  col *= 1.0 - 0.55 * uNightW;
  gl_FragColor = vec4(col, a);
}
`;function Mu(e){let t=[],n=0,r=0;for(let i=0;i<=8;i++)t.push(new W(n,14-i*1.75,r)),n+=(Ts(e,i,1)-.5)*1.6,r+=(Ts(e,i,2)-.5)*1.6;let i=[];for(let e=0;e<t.length-1;e++){let n=t[e],r=t[e+1],a=.15*(1-e/12);i.push(n.x-a,n.y,n.z,n.x+a,n.y,n.z,r.x+a,r.y,r.z,n.x-a,n.y,n.z,r.x+a,r.y,r.z,r.x-a,r.y,r.z),i.push(n.x,n.y,n.z-a,n.x,n.y,n.z+a,r.x,r.y,r.z+a,n.x,n.y,n.z-a,r.x,r.y,r.z+a,r.x,r.y,r.z-a)}let a=new nn;return a.setAttribute(`position`,new ft(i,3)),a}var Nu=class{group=new $e;texture;data;size;radius;tiles;points;mat;count;bolt;boltMat;sig=``;flash=0;flashT=-1;nextFlash=4;thunderAt=-1;thunderStrength=0;overcast=0;stormNear=0;enabled=!0;onThunder=null;override=null;lastDay=0;lastCursed=new Set;constructor(e,t,n){this.tiles=[...e.values()],this.radius=t,this.hex=n,this.size=t*2+1,this.data=new Uint8Array(this.size*this.size*4),this.texture=new nt(this.data,this.size,this.size,In),this.texture.magFilter=Qt,this.texture.minFilter=Qt,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0,J.uWeatherTex.value=this.texture,this.count=9e3;let r=new Float32Array(this.count*4),i=12345,a=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296);for(let e=0;e<r.length;e++)r[e]=a();let o=new nn;o.setAttribute(`position`,new zn(new Float32Array(this.count*3),3)),o.setAttribute(`aSeed`,new zn(r,4)),this.mat=new Gt({vertexShader:Au,fragmentShader:ju,uniforms:{...J,uCenter:{value:new W},uBox:{value:34},uHeight:{value:9},uScale:{value:400},uNightW:{value:0}},transparent:!0,depthWrite:!1}),this.points=new St(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=6,this.points.visible=!1,this.group.add(this.points),this.boltMat=new Kn({color:new U(2.6,2.7,3.2),transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1,side:2,forceSinglePass:!0}),this.bolt=new V(Mu(7),this.boltMat),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.bolt.renderOrder=7,this.bolt.userData.noAO=!0,this.group.add(this.bolt)}set(e,t){this.lastDay=e,this.lastCursed=new Set([...t].map(e=>`${e.q},${e.r}`)),this.rebuild()}setOverride(e){this.override=e,this.rebuild()}rebuild(){let e=Ou(this.lastDay),t=this.override===`rain`?{rain:new Set(Object.keys(Du)),seaStorm:!1,chaosStorm:!1}:this.override===`storm`?{rain:new Set,seaStorm:!0,chaosStorm:!0}:this.override===`clear`?{rain:new Set,seaStorm:!1,chaosStorm:!1}:e,n=`${[...t.rain].sort().join()}|${t.seaStorm}|${t.chaosStorm}|${[...this.lastCursed].sort().join(`;`)}|${this.override===`storm`}`;if(n===this.sig)return;this.sig=n,this.data.fill(0);let r=!1;for(let e of this.tiles){let n=e.tile,i=ku(n,t,this.lastCursed.has(`${n.q},${n.r}`));this.override===`storm`&&n.terrain!==`snow`&&(n.terrain===`water`||n.terrain===`deepWater`)&&(i=[1,0,1]);let a=n.q+this.radius,o=n.r+this.radius;if(a<0||o<0||a>=this.size||o>=this.size)continue;let s=(o*this.size+a)*4;this.data[s]=Math.round(i[0]*255),this.data[s+1]=Math.round(i[1]*255),this.data[s+2]=Math.round(i[2]*255),this.data[s+3]=255,(i[0]||i[1]||i[2])&&(r=!0)}if(t.seaStorm)for(let e=0;e<this.size;e++)for(let t=0;t<this.size;t++){let n=(e*this.size+t)*4;this.data[n+3]===0&&(this.data[n]=255,this.data[n+2]=255)}for(let e=3;e<this.data.length;e+=4)this.data[e]=255;this.texture.needsUpdate=!0,this.anyWeather=r||t.seaStorm,this.points.visible=this.enabled&&this.anyWeather}anyWeather=!1;setQuality(e){this.enabled=e!==`off`,J.uWeatherOn.value=+!!this.enabled,this.points.geometry.setDrawRange(0,e===`few`?Math.round(this.count/3):this.count),this.points.visible=this.enabled&&this.anyWeather,this.enabled||(this.flash=0,J.uFlash.value=0,this.bolt.visible=!1,this.overcast=0)}sample(e,t){let n=(.5773502692*e-.3333333333*t)/this.hex,r=.6666666667*t/this.hex,i=Math.round(n)+this.radius,a=Math.round(r)+this.radius;if(i<0||a<0||i>=this.size||a>=this.size)return[this.data[0]/255,0,this.data[2]/255];let o=(a*this.size+i)*4;return[this.data[o]/255,this.data[o+1]/255,this.data[o+2]/255]}hex=1;strike(e,t){let n=t??this.mat.uniforms.uCenter.value,r=Math.atan2(n.x-this.camPos.x,n.z-this.camPos.z)+(Math.random()-.5)*1.4,i=9+Math.random()*8,a=e??new W(n.x+Math.sin(r)*i,n.y-1,n.z+Math.cos(r)*i);this.bolt.position.copy(a),this.bolt.rotation.y=Math.random()*6.28,this.flashT=0,this.thunderAt=.5+Math.min(1.8,i*.08),this.thunderStrength=1-Math.min(.6,i/30)}camPos=new W;update(e,t,n,r,i){i&&this.camPos.copy(i);let a=this.mat.uniforms;if(a.uCenter.value.copy(t),a.uScale.value=r*.5,a.uNightW.value=n,!this.enabled)return;let o=0,s=0;for(let[e,n]of[[0,0],[6,0],[-6,0],[0,6],[0,-6]]){let r=this.sample(t.x+e,t.z+n);o+=Math.max(r[0],r[2]),s+=r[2]}o/=5,s/=5;let c=Math.min(1,e*.8);if(this.overcast+=(o-this.overcast)*c,this.stormNear+=(s-this.stormNear)*c,this.stormNear>.15&&this.flashT<0&&(this.nextFlash-=e,this.nextFlash<=0&&(this.strike(),this.nextFlash=5+Math.random()*8)),this.flashT>=0){this.flashT+=e;let t=this.flashT;this.flash=t<.06?t/.06:t<.12?1-(t-.06)*8:t<.2?.5+(t-.12)*6:Math.max(0,1-(t-.2)*3.5),this.boltMat.opacity=t<.3?1:Math.max(0,1-(t-.3)*6),this.bolt.visible=this.boltMat.opacity>.01,this.thunderAt>0&&t>=this.thunderAt&&(this.onThunder?.(this.thunderStrength),this.thunderAt=-1),t>.6&&this.thunderAt<0&&(this.flashT=-1,this.flash=0,this.bolt.visible=!1)}J.uFlash.value=this.flash}dispose(){this.points.geometry.dispose(),this.mat.dispose(),this.bolt.geometry.dispose(),this.boltMat.dispose(),this.texture.dispose(),J.uWeatherTex.value===this.texture&&(J.uWeatherTex.value=null)}},Pu=new Set([`capital`,`town`,`port`,`dungeon`,`portal`]),Fu={capital:0,town:1,port:1,dungeon:2,portal:3},Iu=[`.world-hud .skel-top`,`.world-hud .skel-sub`,`.world-hud .hud-quest .quest-track`,`.world-hud .end-tip`,`.world-hud .party .pcard`,`.world-hud .hud-bottom`,`.world-hud .hud-modal.open .ftk-left`,`.world-hud .qg-back:not([hidden])`,`.g-modal .ftk-left`,`.g-modal .ftk-town`,`.g-modal .ftk-shop`,`.g-modal .ftk-outcome`,`.g-modal .modal-back > .panel`,`.g-modal .equip-panel`].join(`, `),Lu=class{root;labels=new Map;v=new W;order=[];constructor(e){if(this.root=document.createElement(`div`),this.root.className=`qk-labels`,Object.assign(this.root.style,{position:`absolute`,inset:`0`,pointerEvents:`none`,overflow:`hidden`}),e.appendChild(this.root),window.addEventListener(`qk-safe-area`,this.onHudChange),!document.getElementById(`qk-label-style`)){let e=document.createElement(`style`);e.id=`qk-label-style`,e.textContent=`.qk-label{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;
        font:600 13px "Microsoft JhengHei","PingFang TC",sans-serif;color:#3b2a18;background:#fff3dcde;
        border:2px solid #8a6a40;border-radius:8px;padding:1px 8px;box-shadow:0 2px 0 #6b4f2e88;will-change:transform;}
        .qk-label.major{font-size:14px;background:#fff6e2f0}
        .qk-label.capital{font-size:15px;border-color:#b08020;color:#5a3a08}`,document.head.appendChild(e)}}upsert(e){let t=this.labels.get(e.id);if(!e.name)t&&(t.el.remove(),this.labels.delete(e.id),this.order=this.order.filter(([t])=>t!==e.id)),this.dirty=!0;else{if(t)t.el.textContent!==e.name&&(t.el.textContent=e.name,t.w=e.name.length*15+20),t.kind!==e.kind&&(t.kind=e.kind,t.pri=Fu[e.kind]??4,t.el.className=`qk-label ${Pu.has(e.kind)?`major`:``} ${e.kind}`),t.pos.copy(e.pos);else{let t=document.createElement(`div`);t.className=`qk-label ${Pu.has(e.kind)?`major`:``} ${e.kind}`,t.textContent=e.name,t.style.display=`none`,this.root.appendChild(t),this.labels.set(e.id,{el:t,pos:e.pos.clone(),kind:e.kind,visible:!1,w:e.name.length*15+20,pri:Fu[e.kind]??4})}this.order=[...this.labels.entries()].sort((e,t)=>e[1].pri-t[1].pri),this.dirty=!0}}dirty=!0;set(e){this.dirty=!0;for(let e of this.labels.values())e.el.remove();this.labels.clear();for(let t of e){if(!t.name)continue;let e=document.createElement(`div`);e.className=`qk-label ${Pu.has(t.kind)?`major`:``} ${t.kind}`,e.textContent=t.name,e.style.display=`none`,this.root.appendChild(e),this.labels.set(t.id,{el:e,pos:t.pos.clone(),kind:t.kind,visible:!1,w:t.name.length*15+20,pri:Fu[t.kind]??4})}this.order=[...this.labels.entries()].sort((e,t)=>e[1].pri-t[1].pri)}update(e,t,n,r,i,a=()=>0){let o=r*2.2,s=this.blockers(),c=Number(document.documentElement.style.getPropertyValue(`--ui-zoom`))||1;for(let[l,u]of this.order){let d=i(l)&&(Pu.has(u.kind)||r<20),f=0,p=0,m=0;if(d&&(f=u.pos.distanceTo(e.position),this.v.copy(u.pos),this.v.y+=a(l),this.v.project(e),d=this.v.z<1&&Math.abs(this.v.x)<1.1&&Math.abs(this.v.y)<1.1&&f<o,p=(this.v.x*.5+.5)*t,m=(-this.v.y*.5+.5)*n),d){let e=[p-u.w/2,m-24*c,p+u.w/2,m];s.some(t=>e[0]<t[2]&&e[2]>t[0]&&e[1]<t[3]&&e[3]>t[1])?d=!1:(s.push(e),u.rect=e)}d!==u.visible&&(u.el.style.display=d?``:`none`,u.visible=d,d&&this.measureLater(u)),d&&(u.el.style.transform=`translate(${p.toFixed(1)}px, ${m.toFixed(1)}px) translate(-50%, -100%)`,u.el.style.opacity=String(Math.max(.25,Math.min(1,(o-f)/(o*.4)))))}}blockRects=[];blockAt=-1e9;blockPending=!1;widthQueue=new Set;afterFrame=0;measureLater(e){e&&this.widthQueue.add(e),!this.afterFrame&&(this.afterFrame=requestAnimationFrame(()=>{window.setTimeout(()=>{this.afterFrame=0;for(let e of this.widthQueue)e.w=e.el.offsetWidth||e.w;this.widthQueue.clear(),this.blockPending&&(this.blockPending=!1,this.measureBlockers()),this.dirty=!0},0)}))}blockers(){return!this.blockPending&&performance.now()-this.blockAt>400&&(this.blockPending=!0,this.measureLater()),[...this.blockRects]}measureBlockers(){{this.blockAt=performance.now();let e=this.root.getBoundingClientRect();this.blockRects=[];for(let t of document.querySelectorAll(Iu)){let n=t.getBoundingClientRect();n.width>0&&n.height>0&&this.blockRects.push([n.left-e.left-4,n.top-e.top-4,n.right-e.left+4,n.bottom-e.top+4])}}for(let e of this.labels.values()){let t=e.rect;e.visible&&t&&this.blockRects.some(e=>t[0]<e[2]&&t[2]>e[0]&&t[1]<e[3]&&t[3]>e[1])&&(e.el.style.display=`none`,e.visible=!1)}}onHudChange=()=>{this.blockAt=-1e9,this.blockPending=!0,this.measureLater()};dispose(){window.removeEventListener(`qk-safe-area`,this.onHudChange),this.root.remove()}},Ru={type:`change`},zu={type:`start`},Bu={type:`end`},Vu=new at,Hu=new Mt,Uu=Math.cos(70*On.DEG2RAD),Wu=new W,Gu=2*Math.PI,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ku=1e-6,qu=class extends pn{constructor(e,t=null){super(e,t),this.state=$.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:qt.ROTATE,TWO:qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new tt,this._lastTargetPosition=new W,this._quat=new tt().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _t,this._sphericalDelta=new _t,this._scale=1,this._panOffset=new W,this._rotateStart=new dn,this._rotateEnd=new dn,this._rotateDelta=new dn,this._panStart=new dn,this._panEnd=new dn,this._panDelta=new dn,this._dollyStart=new dn,this._dollyEnd=new dn,this._dollyDelta=new dn,this._dollyDirection=new W,this._mouse=new dn,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yu.bind(this),this._onPointerDown=Ju.bind(this),this._onPointerUp=Xu.bind(this),this._onContextMenu=rd.bind(this),this._onMouseWheel=$u.bind(this),this._onKeyDown=ed.bind(this),this._onTouchStart=td.bind(this),this._onTouchMove=nd.bind(this),this._onMouseDown=Zu.bind(this),this._onMouseMove=Qu.bind(this),this._interceptControlDown=id.bind(this),this._interceptControlUp=ad.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=$.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ru),this.update(),this.state=$.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Wu.copy(t).sub(this.target),Wu.applyQuaternion(this._quat),this._spherical.setFromVector3(Wu),this.autoRotate&&this.state===$.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Gu:n>Math.PI&&(n-=Gu),r<-Math.PI?r+=Gu:r>Math.PI&&(r-=Gu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Wu.setFromSpherical(this._spherical),Wu.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Wu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new W(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new W(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Wu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Vu.origin.copy(this.object.position),Vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vu.direction))<Uu?this.object.lookAt(this.target):(Hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vu.intersectPlane(Hu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ku||this._lastTargetPosition.distanceToSquared(this.target)>Ku?(this.dispatchEvent(Ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Gu/60/60*this.autoRotateSpeed:Gu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wu.setFromMatrixColumn(t,0),Wu.multiplyScalar(-e),this._panOffset.add(Wu)}_panUp(e,t){this.screenSpacePanning===!0?Wu.setFromMatrixColumn(t,1):(Wu.setFromMatrixColumn(t,0),Wu.crossVectors(this.object.up,Wu)),Wu.multiplyScalar(e),this._panOffset.add(Wu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Wu.copy(r).sub(this.target);let i=Wu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dn,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ju(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Yu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Xu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Bu),this.state=$.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Zu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=$.DOLLY;break;case fn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}break;case fn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(zu)}function Qu(e){switch(this.state){case $.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case $.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case $.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function $u(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===$.NONE&&(e.preventDefault(),this.dispatchEvent(zu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Bu))}function ed(e){this.enabled!==!1&&this._handleKeyDown(e)}function td(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=$.TOUCH_ROTATE;break;case qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=$.TOUCH_PAN;break;default:this.state=$.NONE}break;case 2:switch(this.touches.TWO){case qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=$.TOUCH_DOLLY_PAN;break;case qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=$.TOUCH_DOLLY_ROTATE;break;default:this.state=$.NONE}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(zu)}function nd(e){switch(this._trackPointer(e),this.state){case $.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case $.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case $.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case $.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=$.NONE}}function rd(e){this.enabled!==!1&&e.preventDefault()}function id(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function ad(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var od=new W(0,1,0),sd=class{camera;controls;rotLeft=0;focusTarget=null;zoomTarget=null;follow=null;boundRadius=50;tween=null;constructor(e,t){this.camera=new Ot(38,t,.1,600),this.controls=new qu(this.camera,e);let n=this.controls;n.enableDamping=!0,n.minPolarAngle=.75,n.maxPolarAngle=1.2,n.minDistance=5,n.maxDistance=48,n.screenSpacePanning=!1,n.zoomSpeed=1.1,this.camera.position.set(0,6,9),n.target.set(0,0,0)}rotate(e){this.rotLeft+=e}rotateNow(e){let t=this.camera.position.clone().sub(this.controls.target).applyAxisAngle(od,e);this.camera.position.copy(this.controls.target).add(t)}focus(e,t){this.focusTarget=e.clone(),t!==void 0&&(this.zoomTarget=On.clamp(t,this.controls.minDistance,this.controls.maxDistance))}jump(e,t){let n=this.camera.position.clone().sub(this.controls.target);t!==void 0&&n.setLength(t),this.controls.target.copy(e),this.camera.position.copy(e).add(n),this.focusTarget=null}setDistance(e){let t=this.camera.position.clone().sub(this.controls.target).setLength(e);this.camera.position.copy(this.controls.target).add(t)}get distance(){return this.camera.position.distanceTo(this.controls.target)}right(e=new W){let t=this.controls.target.clone().sub(this.camera.position).setY(0).normalize();return e.set(-t.z,0,t.x)}moveTarget(e){this.controls.target.add(e),this.camera.position.add(e)}tweenTo(e,t,n,r,i){this.focusTarget=null,this.zoomTarget=null,this.tween={t0:this.controls.target.clone(),t1:e.clone(),d0:this.distance,d1:t,p0:this.controls.getPolarAngle(),p1:n,k:0,dur:r,done:i}}cancelTween(){this.tween=null}get tweenProgress(){return this.tween?this.tween.k:1}setLimits(e,t,n,r){let i=this.controls;i.minPolarAngle=e,i.maxPolarAngle=t,i.minDistance=n,i.maxDistance=r}stepTween(e){let t=this.tween;t.k=Math.min(1,t.k+e/t.dur);let n=t.k*t.k*(3-2*t.k),r=this.controls,i=t.t0.clone().lerp(t.t1,n),a=t.d0+(t.d1-t.d0)*n,o=t.p0+(t.p1-t.p0)*n,s=r.getAzimuthalAngle();this.setLimits(o,o,a,a),r.target.copy(i),this.camera.position.set(i.x+a*Math.sin(o)*Math.sin(s),i.y+a*Math.cos(o),i.z+a*Math.sin(o)*Math.cos(s)),t.k>=1&&(this.tween=null,t.done())}update(e){if(this.tween){this.stepTween(e),this.controls.update();return}if(Math.abs(this.rotLeft)>1e-4){let t=Math.sign(this.rotLeft)*Math.min(Math.abs(this.rotLeft),e*4);this.rotateNow(t),this.rotLeft-=t}let t=this.controls.target;if(this.focusTarget){let n=this.focusTarget.clone().sub(t);n.length()<.01?this.focusTarget=null:this.moveTarget(n.multiplyScalar(Math.min(1,e*4)))}else if(this.follow){let n=this.follow();n&&this.moveTarget(n.clone().sub(t).multiplyScalar(Math.min(1,e*3)))}if(this.zoomTarget!==null){let t=this.distance,n=t+(this.zoomTarget-t)*Math.min(1,e*4);this.setDistance(n),Math.abs(this.zoomTarget-n)<.02&&(this.zoomTarget=null)}let n=Math.hypot(t.x,t.z);if(n>this.boundRadius){let e=this.boundRadius/n;this.moveTarget(new W(t.x*e-t.x,0,t.z*e-t.z))}this.controls.update()}dispose(){this.controls.dispose()}},cd={zenith:`#86bfe6`,horizon:`#d6eaee`,hemiSky:`#dcecff`,hemiGround:`#8a7250`,hemi:1.55,sun:`#ffe2b4`,sunI:2.95,sprite:`#ffffff`,rim:`#ffe6b8`,rimI:.32},ld={zenith:`#1a1640`,horizon:`#433a78`,hemiSky:`#8476d0`,hemiGround:`#3a2e52`,hemi:1.05,sun:`#b4b2ff`,sunI:.95,sprite:`#a4a2d6`,rim:`#9aa6ff`,rimI:.24},ud=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // 永遠畫在最遠處
}
`,dd=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform float uNight;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float e = d.y;
  vec3 c = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, e));
  // 太陽那一側的地平線暖一點（白天）；晚上月亮那側一圈淡淡的光
  float s = max(dot(d, uSunDir), 0.0);
  c += uSunCol * (pow(s, 6.0) * 0.28 + pow(s, 64.0) * 0.35) * (1.0 - 0.6 * uNight) * smoothstep(-0.1, 0.15, e);
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}
`,fd=class{hemi=new mt(cd.hemiSky,cd.hemiGround,cd.hemi);sun=new it(cd.sun,cd.sunI);sky=new U(cd.horizon);fog;night=0;target=0;spriteColor=new U(1,1,1);sunOffset=new W(-12,15,9);maxExtent=40;b=new U;skyDome;probe=new ln(void 0,0);probeOn=!1;skyU={uZenith:{value:new U(cd.zenith)},uHorizon:{value:new U(cd.horizon)},uSunDir:{value:new W},uSunCol:{value:new U(cd.sun)},uNight:{value:0}};constructor(e,t){e.background=this.sky,this.fog=new xt(this.sky,38,85),e.fog=this.fog,e.add(this.hemi,this.sun,this.sun.target,this.probe),this.sun.castShadow=t,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80}),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02,this.skyU.uSunDir.value.copy(this.sunOffset).normalize(),J.uSunDir.value.copy(this.skyU.uSunDir.value);let n=new Gt({vertexShader:ud,fragmentShader:dd,uniforms:this.skyU,side:1,depthWrite:!1,depthTest:!0,fog:!1});this.skyDome=new V(new Fn(100,24,12),n),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-10,e.add(this.skyDome),this.apply()}setProbe(e){e&&this.probe.sh.fromArray(e.flat()),this.probeOn=!!e,this.apply()}set(e,t=!1){this.target=+(e===`night`),t&&(this.night=this.target,this.apply())}get isChanging(){return Math.abs(this.night-this.target)>.001}mix(e,t,n,r){return e.set(t).lerp(this.b.set(n),r)}apply(){let e=this.night*this.night*(3-2*this.night);this.mix(this.sky,cd.horizon,ld.horizon,e),this.fog.color.copy(this.sky),this.skyU.uHorizon.value.copy(this.sky),J.uSkyColor.value.copy(this.sky),this.mix(this.skyU.uZenith.value,cd.zenith,ld.zenith,e),this.mix(this.hemi.color,cd.hemiSky,ld.hemiSky,e),this.mix(this.hemi.groundColor,cd.hemiGround,ld.hemiGround,e);let t=cd.hemi+(ld.hemi-cd.hemi)*e;this.hemi.intensity=this.probeOn?t*.45:t,this.probe.intensity=this.probeOn?t*.55/.36*(1-.35*e):0,this.mix(this.sun.color,cd.sun,ld.sun,e),this.sun.intensity=cd.sunI+(ld.sunI-cd.sunI)*e,this.skyU.uSunCol.value.copy(this.sun.color),this.skyU.uNight.value=e,this.mix(this.spriteColor,cd.sprite,ld.sprite,e),J.uExposure.value=1+.22*e,this.mix(J.uRimColor.value,cd.rim,ld.rim,e).multiplyScalar(cd.rimI+(ld.rimI-cd.rimI)*e)}place(e,t){let n=On.clamp(t*.9+4,16,this.maxExtent+4),r=this.sun.shadow.camera;r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.updateProjectionMatrix()),this.sun.target.position.copy(e),this.sun.position.copy(e).add(this.sunOffset)}wx={overcast:0,flash:0,applied:!1};setWeather(e,t){Math.abs(e-this.wx.overcast)<.002&&Math.abs(t-this.wx.flash)<.002&&this.wx.applied||(this.wx.overcast=e,this.wx.flash=t,this.wx.applied=!1)}update(e,t,n){if(this.isChanging){let t=this.target-this.night;this.night+=Math.sign(t)*Math.min(Math.abs(t),e*.8),this.apply(),this.wx.applied=!1}if(!this.wx.applied){this.wx.applied=!0,this.apply();let{overcast:e,flash:t}=this.wx;if(e>.001||t>.001){this.sun.intensity=this.sun.intensity*(1-.45*e)+t*1.2,this.hemi.intensity=this.hemi.intensity*(1-.15*e)+t*.9;let n=this.b.setRGB(.55,.58,.62);this.sky.lerp(n.multiplyScalar(1-.75*this.night),.45*e),this.fog.color.copy(this.sky),this.skyU.uHorizon.value.copy(this.sky),this.skyU.uZenith.value.lerp(this.sky,.5*e).addScalar(t*.35),this.skyU.uHorizon.value.addScalar(t*.25),this.spriteColor.multiplyScalar((1-.12*e)*(1+.3*t))}}this.skyDome.position.copy(t),this.fog.near=n*1.3+12,this.fog.far=n*3.2+40}dispose(){this.skyDome.geometry.dispose(),this.skyDome.material.dispose()}},pd=e=>!!e&&e.type===`atlas`,md=e=>!!e&&e.type===`image`;function hd(e,t){return{url:t+e.path,size:[e.w,e.h],frames:e.frames.map(e=>({rect:[...e.rect],pivot:[...e.pivot],duration:e.duration})),scale:e.scale}}function gd(e){return new Promise(t=>{let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{try{let e=document.createElement(`canvas`);e.width=n.naturalWidth,e.height=n.naturalHeight;let r=e.getContext(`2d`,{willReadFrequently:!0});r.drawImage(n,0,0);let i=r.getImageData(0,0,e.width,e.height).data,a=e.width,o=e.height,s=-1,c=-1;for(let t=0;t<e.height;t++)for(let n=0;n<e.width;n++)i[(t*e.width+n)*4+3]>20&&(n<a&&(a=n),n>s&&(s=n),t<o&&(o=t),t>c&&(c=t));t(s<0?null:[a,o,s-a+1,c-o+1])}catch{t(null)}},n.onerror=()=>t(null),n.src=e})}async function _d(e,t,n){let r=e,i=r[`hero:${t}:run`];if(!pd(i))throw Error(`素材清單沒有 hero:${t}:run`);let a=hd(i,n),o=e=>{let i=r[`hero:${t}:${e}`];return pd(i)?hd(i,n):void 0},s={...a,frames:[{...a.frames[0],duration:1}]},c=r[`hero:${t}:idle`];if(md(c)){let e=n+c.path,t=await gd(e)??[0,0,c.w,c.h],r=i.frames.map(e=>e.rect[3]).sort((e,t)=>e-t),a=r[Math.floor(r.length/2)]*i.scale*.96;s={url:e,size:[c.w,c.h],scale:a/t[3],frames:[{rect:t,pivot:[t[2]/2,t[3]],duration:1}]}}return{idle:s,run:a,idleFront:o(`idle_front`),idleBack:o(`idle_back`),walkFront:o(`walk_front`),walkBack:o(`walk_back`)}}async function vd(e,t,n){n??=await(await fetch(`${e}assets/manifest.json?v=c784a3ac75`)).json();let r={};for(let i of t)r[i]=await _d(n,i,e);return r}function yd(e,t,n,r=!1){let i=e,a=i[`monster:${t}`],o={};if(md(a)){o.image=n+a.path;let e=a.anims?.idle,t=e?i[e]:void 0;pd(t)&&t.idleIsWalk&&(o.walk=hd(t,n),o.walkMirror=!!t.mirror,r&&(o.anim=o.walk,o.mirror=!!t.mirror))}else pd(a)&&(o.anim=hd(a,n),o.mirror=!!a.mirror);return o}var bd=(e,t)=>(e+4096)*8192+(t+4096),xd=.62,Sd={ultra:{pixelRatio:2,shadows:!0,shadowMap:4096,decor:2,low:!1,cloudShadow:!0,shadowRadius:4,post:`ultra`,life:!0},high:{pixelRatio:2,shadows:!0,shadowMap:2048,decor:1,low:!1,cloudShadow:!0,shadowRadius:3,post:`high`,life:!0},medium:{pixelRatio:2,shadows:!0,shadowMap:1024,decor:.75,low:!1,cloudShadow:!0,shadowRadius:2,post:`none`,life:!0},low:{pixelRatio:2,shadows:!1,shadowMap:1024,decor:.5,low:!0,cloudShadow:!1,shadowRadius:1,post:`none`,life:!1}},Cd={low:0,medium:1,high:1,ultra:2},wd=[`low`,`medium`,`high`,`ultra`];function Td(e){if(/laptop|mobile|max-q/i.test(e))return!1;if(/rtx\s*(?:a\d{4}|pro|\d{4}\s*ada)/i.test(e))return!0;let t=/rtx\s*(\d)0(\d)0/i.exec(e);if(t)return Number(t[1])>=3&&Number(t[2])>=7;let n=/\brx\s*(\d{4})/i.exec(e);if(n){let e=Number(n[1]);return e>=6800&&e<7e3||e>=7800&&e<8e3||e>=9070}return!1}function Ed(e,t=!1){return/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(e)||/intel|iris|uhd|hd graphics|mali|adreno|powervr|videocore/i.test(e)?`low`:/apple/i.test(e)||t?`medium`:Td(e)?`ultra`:`high`}function Dd(){try{return matchMedia(`(pointer: coarse)`).matches&&Math.min(screen.width,screen.height)<820}catch{return!1}}function Od(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`)??e.getContext(`webgl`);if(!t)return``;let n=t.getExtension(`WEBGL_debug_renderer_info`),r=String(n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER));return t.getExtension(`WEBGL_lose_context`)?.loseContext(),r}catch{return``}}var kd=class{renderer;scene=new et;container;rig;lighting;effects=new uu;labels;kit=new ql;locMats=new ll;terrain=null;decor=null;fow=null;clouds=null;ambient=null;mist=null;weather=null;weatherDay=0;batches={stable:null,stateful:null};quality=`high`;shadowsAllowed;maxPixelRatio;probe=null;autoQuality;overview=!1;savedView=null;iconView={on:!1,az:0,scale:1};locations=new Map;heroes=new Map;tokens=new Map;vehicles=new Map;vehicleGroup=new $e;pegGeo=new $t(.03,.04,.22,6).translate(0,.11,0);markGeo=new Dt(.55,.72,32).rotateX(-Math.PI/2);markMat=new Kn({color:`#ffd24a`,transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1,side:2,forceSinglePass:!0});ropeMat=new An({color:`#4a3a2a`});arrowGeo=new gn(.16,.34,4).rotateX(Math.PI);arrowMat=new Kn({color:`#ffd24a`,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95,toneMapped:!1});fogOn;visible=null;explored=new Set;cursed=[];selectedHero=null;selectedTile=null;hoverInfo=null;pointer=null;downAt=null;ray=new At;ndc=new dn;time=0;last=performance.now();fpsFrames=0;fpsT=0;fps=0;resizeObs;cleanup=[];tmpV=new W;tmpR=new W;post=null;postWant=`none`;postLoading=!1;disposed=!1;vignette;onTileClick=null;onTileHover=null;onTokenClick=null;onQualityChange=null;constructor(e,t={}){this.container=e,this.fogOn=t.fog!==!1,getComputedStyle(e).position===`static`&&(e.style.position=`relative`);let n=e.clientWidth||800,r=e.clientHeight||600,i=!t.quality||t.quality===`auto`?Ed(Od(),Dd()):t.quality;this.renderer=new is({antialias:t.antialias??i!==`low`}),this.maxPixelRatio=t.maxPixelRatio??2,this.shadowsAllowed=t.shadows!==!1,this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.maxPixelRatio)),this.renderer.setSize(n,r),this.renderer.shadowMap.enabled=this.shadowsAllowed,this.renderer.shadowMap.type=1,this.kit.anisotropy=Math.min(16,this.renderer.capabilities.getMaxAnisotropy()),this.kit.onTextureReady=e=>this.queueUpload(e),this.renderer.info.autoReset=!1,this.renderer.domElement.style.display=`block`,this.renderer.domElement.style.touchAction=`none`,e.prepend(this.renderer.domElement),this.vignette=document.createElement(`div`),Object.assign(this.vignette.style,{position:`absolute`,inset:`0`,pointerEvents:`none`,display:`none`,background:`radial-gradient(ellipse 80% 75% at 50% 46%, rgba(0,0,0,0) 58%, rgba(22,12,34,0.26) 100%)`}),this.renderer.domElement.after(this.vignette),this.labels=new Lu(e),this.rig=new sd(this.renderer.domElement,n/r),this.lighting=new fd(this.scene,t.shadows!==!1),this.lighting.skyDome.renderOrder=50,this.lighting.skyDome.userData.noAO=!0,this.scene.add(this.effects.group),this.scene.add(this.vehicleGroup),this.bindInput(t.keyboard!==!1),this.autoQuality=!t.quality||t.quality===`auto`,this.applyQuality(this.autoQuality?Ed(this.gpuName(),Dd()):t.quality),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.renderer.setAnimationLoop(()=>this.frame())}setMap(e,t){this.clearMap(),this.vehicleSig=``,this.terrain=new dc(e),this.scene.add(this.terrain.group),this.decor=new _c(this.terrain.tiles.values()),this.scene.add(this.decor.group),this.kenneyApplied=!1,this.fow=new nc(this.terrain.radius+1),J.uFowTex.value=this.fow.texture,J.uFowRadius.value=this.fow.radius,J.uFowSize.value=this.fow.size,J.uWaterDepth.value=this.terrain.waterDepthTexture(),J.uTerrainField.value=this.terrain.terrainFieldTexture(),this.clouds=new Su(this.terrain.tiles),this.scene.add(this.clouds.mesh),this.ambient=new au(this.terrain.tiles),this.scene.add(this.ambient.group),this.mist=new Tu(this.terrain.tiles),this.scene.add(this.mist.mesh),this.weather=new Nu(this.terrain.tiles,this.fow.radius,1),this.weather.onThunder=e=>this.onThunder?.(e),this.scene.add(this.weather.group),ml(Cd[this.quality]);for(let e of t)this.addLocation(e);this.rebuildBatch(),this.refreshLabels(),this.refreshLights(),this.applyQuality(this.quality),this.autoQuality&&(this.probe={t:-1,frames:0,steps:0}),this.rig.boundRadius=this.terrain.radius*1.6,this.explored.clear(),this.applyFog(!0),this.setCursed(this.cursed),this.selectedHero||this.rig.jump(new W(0,.3,0)),this.precompile()}uploadQueue=[];uploading=!1;queueUpload(e){if(this.uploadQueue.push(e),this.uploading)return;this.uploading=!0;let t=e=>typeof requestIdleCallback==`function`?requestIdleCallback(e,{timeout:1500}):setTimeout(e,50),n=()=>{let e=this.uploadQueue.shift();if(!e)this.uploading=!1;else{if(e.image&&!this.paused)try{this.renderer.initTexture(e)}catch{}else e.image&&this.uploadQueue.push(e);t(n)}};t(n)}precompiling=!1;precompileAgain=!1;precompile(){if(this.precompiling){this.precompileAgain=!0;return}this.precompiling=!0;let e=()=>{this.precompiling=!1,this.precompileAgain&&(this.precompileAgain=!1,this.precompile())};this.renderer.compileAsync(this.scene,this.rig.camera).then(e,e)}precompileObject(e){let t=!1;e.traverse(e=>{if(t)return;let n=e.material;for(let e of Array.isArray(n)?n:n?[n]:[])if(!this.renderer.properties.get(e).currentProgram){t=!0;break}}),t&&this.renderer.compileAsync(e,this.rig.camera,this.scene).catch(()=>void 0)}async warmup(){let e=new Set;this.scene.traverse(t=>{let n=t.material;for(let t of Array.isArray(n)?n:n?[n]:[])for(let n of Object.values(t))n instanceof Jt&&!e.has(n)&&e.add(n)});for(let t of e)t.image&&this.renderer.initTexture(t);await this.renderer.compileAsync(this.scene,this.rig.camera).catch(()=>void 0),await this.compileOtherShadowState(),this.renderer.shadowMap.needsUpdate=!0,this.renderer.render(this.scene,this.rig.camera)}async compileAllAsync(e,t=!0){let n=[];for(let r of t?[...this.scene.children]:[this.scene]){let i=[];r.traverse(e=>{e.visible||=(i.push(e),!0)});let a=this.renderer.getRenderTarget();e!==void 0&&this.renderer.setRenderTarget(e);try{n.push(this.renderer.compileAsync(r,this.rig.camera,r===this.scene?null:this.scene).catch(()=>void 0))}finally{this.renderer.setRenderTarget(a);for(let e of i)e.visible=!1}t&&await new Promise(e=>setTimeout(e,0))}await Promise.all(n)}async compileOtherShadowState(){let e=this.lighting.sun,t=this.renderer.shadowMap.enabled,n=e.castShadow,r=()=>this.scene.traverse(e=>{let t=e.material;Array.isArray(t)?t.forEach(e=>{e.needsUpdate=!0}):t&&(t.needsUpdate=!0)});this.renderer.shadowMap.enabled=!t,e.castShadow=!t,r();try{await this.compileAllAsync(void 0,!1)}catch{}!t&&this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.needsUpdate=!0,this.renderer.render(this.scene,this.rig.camera)),this.renderer.shadowMap.enabled===!t&&(this.renderer.shadowMap.enabled=t,e.castShadow=n,r())}updateLocation(e){this.updateLocations([e])}updateLocations(e){if(!e.length||!this.terrain)return;let t=!1,n=!1,r=!1;for(let i of e){let e=this.locations.get(i.id),a=!!e&&Ml(e.loc)===Ml(i);if(e&&a&&e.loc.active===i.active&&e.loc.name===i.name){e.loc=i;continue}if(e&&a&&e.loc.active===i.active){e.loc=i,this.upsertLabel(i.id);continue}e&&(Nl(e.loc,e.model)&&(r=!0),this.scene.remove(e.model.group),e.model.dispose(),this.locations.delete(i.id)),this.addLocation(i);let o=this.locations.get(i.id);o&&Nl(i,o.model)&&(r=!0),a||(jl.has(i.kind)||e&&jl.has(e.loc.kind)?n=!0:t=!0),this.upsertLabel(i.id)}t&&this.rebuildBatch(`stable`),n&&this.rebuildBatch(`stateful`),r&&this.refreshLights()}rebuildBatch(e){for(let t of e?[e]:[`stable`,`stateful`]){let e=this.batches[t];e&&(this.scene.remove(e.group),e.dispose());let n=new Fl([...this.locations.values()].filter(({loc:e})=>jl.has(e.kind)===(t===`stateful`)).map(({model:e})=>(e.group.updateMatrix(),{model:e,matrix:e.group.matrix.clone(),fowX:e.group.position.x,fowZ:e.group.position.z})),this.locMats);this.batches[t]=n,this.scene.add(n.group)}this.shadowDirty()}upsertLabel(e){let t=this.locations.get(e);if(!t||!this.terrain)return;let n=this.terrain.get(t.loc.q,t.loc.r);if(!n)return;let r=t.model.labelAnchor;this.labels.upsert({id:e,name:t.loc.name,kind:t.loc.kind,pos:new W(n.x+r.x,n.h+r.y,n.z+r.z)})}refreshLights(){if(!this.ambient||!this.terrain)return;let e={lights:[],smoke:[],halos:[],sparkles:[]},t=new W;for(let{loc:n,model:r}of this.locations.values()){let i=this.terrain.get(n.q,n.r);if(!i)continue;Pl.has(n.kind)&&e.lights.push({pos:new W(i.x,i.h+Math.min(.6,r.labelHeight*.4),i.z)}),r.group.updateMatrix();let a=e=>t.set(e[0],e[1],e[2]).applyMatrix4(r.group.matrix).clone();for(let t of r.fx.smoke)for(let n=0;n<4;n++)e.smoke.push({pos:a(t)});for(let t of r.fx.halos)e.halos.push({pos:a(t.at),color:t.color,size:t.size});for(let t of r.fx.sparkles)e.sparkles.push({pos:a(t.at),color:t.color})}this.ambient.setLocationFx(e)}topAt(e,t){let n=this.terrain?.get(e,t);if(!n)return .5;if(n.tile.location)return n.h+1.75;switch(n.tile.terrain){case`mountain`:return n.h+1.7;case`forest`:return n.h+.95;case`snow`:return n.h+.85;case`rock`:return n.h+.8;case`hill`:return n.h+.5;default:return n.h+.35}}addLocation(e){let t=this.makeModel(e);t&&(this.scene.add(t.group),this.locations.set(e.id,{loc:e,model:t,shown:this.computeShown(e)}))}makeModel(e,t){let n=this.terrain?.get(e.q,e.r);if(!n)return null;let r=0;if(e.kind===`port`)for(let[t,i]of ys){let a=this.terrain.get(e.q+t,e.r+i);if(a&&ac(a.tile.terrain)){r=Math.atan2(a.x-n.x,a.z-n.z);break}}let i=Al(e,this.locMats,r,t);return i.setLow(Sd[this.quality].low),i.group.position.set(n.x,n.h,n.z),i}refreshLabels(){this.labels.set([...this.locations.values()].map(({loc:e,model:t})=>{let n=this.terrain.get(e.q,e.r),r=t.labelAnchor;return{id:e.id,name:e.name,kind:e.kind,pos:new W(n.x+r.x,n.h+r.y,n.z+r.z)}}))}clearMap(){this.cancelDetailRebuild(),this.terrain&&=(this.scene.remove(this.terrain.group),this.terrain.dispose(),null),this.decor&&=(this.scene.remove(this.decor.group),this.decor.dispose(),null);for(let{model:e}of this.locations.values())this.scene.remove(e.group),e.dispose();this.locations.clear(),this.fow&&=(this.fow.texture.dispose(),null),this.clouds&&=(this.scene.remove(this.clouds.mesh),this.clouds.dispose(),null),this.ambient&&=(this.scene.remove(this.ambient.group),this.ambient.dispose(),null),this.mist&&=(this.scene.remove(this.mist.mesh),this.mist.dispose(),null),this.weather&&=(this.scene.remove(this.weather.group),this.weather.dispose(),null);for(let e of[`stable`,`stateful`]){let t=this.batches[e];t&&(this.scene.remove(t.group),t.dispose(),this.batches[e]=null)}}tileAt(e,t){return this.terrain?.get(e,t)?.tile}setHeroes(e){let t=new Set(e.map(e=>e.id));for(let[e,n]of this.heroes)t.has(e)||(this.scene.remove(n.root),n.dispose(),this.heroes.delete(e));for(let t of e){let e=this.heroes.get(t.id);if(e||(e=new tu(this.kit,t.id,t.sprite),this.precompileObject(e.root),this.heroes.set(t.id,e),this.scene.add(e.root),e.q=t.q,e.r=t.r,e.place(this.heroPos(t.q,t.r))),e.setDead(!!t.dead),e.setVessel(t.vessel??`fishing`),e.inBalloon=!!t.balloon,!e.moving){let n=e.q!==t.q||e.r!==t.r;e.q=t.q,e.r=t.r,n&&e.place(this.heroPos(t.q,t.r));let r=this.terrain?.get(t.q,t.r);e.onBoat=t.boat??(r?ac(r.tile.terrain):!1)}}}vehicleSig=``;setVehicles(e){let t=e=>e.id??`${e.kind}@${e.q},${e.r}`,n=e.map(e=>`${t(e)}:${e.kind}:${e.q},${e.r}`).join(`|`);if(n===this.vehicleSig&&this.terrain)return;this.vehicleSig=n;let r=new Set(e.map(t));for(let e of[...this.vehicles.keys()])r.has(e)||this.removeVehicle(e);for(let n of e){let e=t(n),r=this.vehicles.get(e);if(r&&r.spec.kind!==n.kind&&(this.removeVehicle(e),r=void 0),!r){let t=new $e,i=n.kind===`balloon`,a=new V(this.markGeo,this.markMat);a.renderOrder=1,t.add(a);let o=new $e,s=new V(i?this.kit.balloonGeo:this.kit.boatGeo(n.kind),this.kit.boatMat);s.castShadow=!0,i||s.scale.set(...Vl),o.add(s),t.add(o);let c=null;if(!i){let e=new V(this.arrowGeo,this.arrowMat);e.renderOrder=12,e.userData.arrow=!0,t.add(e)}if(i){let e=new V(this.pegGeo,this.kit.boatMat);e.position.set(.62,0,.3),t.add(e);let n=new nn().setAttribute(`position`,new ft([.62,.2,.3,.38,.5,.2],3));c=new vn(n,this.ropeMat),t.add(c)}r={spec:n,mesh:t,body:o,rope:c,phase:(n.q*3.1+n.r*1.7)%6.28,hover:0},this.vehicles.set(e,r),this.vehicleGroup.add(t),this.precompileObject(t)}r.spec=n,this.placeVehicle(r)}this.decor?.setHiddenTiles([...this.vehicles.values()].map(e=>bs(e.tileQ??e.spec.q,e.tileR??e.spec.r))),this.shadowDirty(),this.applyTokenFog()}removeVehicle(e){let t=this.vehicles.get(e);t&&(this.vehicleGroup.remove(t.mesh),t.rope?.geometry.dispose(),this.vehicles.delete(e))}placeVehicle(e){let{spec:t}=e,n=this.terrain?.get(t.q,t.r),r=this.heroPos(t.q,t.r);e.tileQ=t.q,e.tileR=t.r;let i=e.phase,a=e.mesh.children[0];if(a.position.set(0,.03,0),t.kind!==`balloon`){if(n&&!ac(n.tile.terrain)){let a=ys.map(([e,n])=>this.terrain?.get(t.q+e,t.r+n)).filter(e=>!!e&&ac(e.tile.terrain)),o=n.tile.location&&a.length>1?a[1]:a[0];if(o){let t=o.x-n.x,s=o.z-n.z;if(n.tile.location&&a.length===1){let e=Math.hypot(t,s),a=s/e,c=-t/e;r.set(n.x+t*.78-a*.62,o.h,n.z+s*.78-c*.62),i=Math.atan2(t,s)}else r.set(n.x+t*.88,o.h,n.z+s*.88),i=Math.atan2(t,s)+Math.PI/2;e.tileQ=o.tile.q,e.tileR=o.tile.r}}else for(let[e,n]of ys){let a=this.terrain?.get(t.q+e,t.r+n);if(a&&!ac(a.tile.terrain)){i=Math.atan2(a.x-r.x,a.z-r.z)+Math.PI/2;break}}e.hover=0,a.scale.setScalar(1.25)}else{let t=n?.tile.location?.42:.18;r.x+=Math.sin(e.phase)*t,r.z+=Math.cos(e.phase)*t,e.hover=n?.tile.location?.75:.32,a.scale.setScalar(.95)}e.mesh.position.copy(r),e.mesh.rotation.y=i}setTokens(e){let t=new Set(e.map(e=>e.id));for(let[e,n]of this.tokens)t.has(e)||(this.scene.remove(n.root),n.dispose(),this.tokens.delete(e));for(let t of e){let e=this.tokens.get(t.id);if(e&&(e.spec.image!==t.image||e.spec.kind!==t.kind||e.spec.height!==t.height)&&(this.scene.remove(e.root),e.dispose(),this.tokens.delete(t.id),e=void 0),e||(e=new nu(this.kit,t),this.tokens.set(t.id,e),this.scene.add(e.root),this.precompileObject(e.root)),e.moving)continue;e.spec.q=t.q,e.spec.r=t.r;let n=this.terrain?.get(t.q,t.r);n&&e.root.position.set(n.x,n.h,n.z)}this.applyTokenFog()}heroPos(e,t){let n=this.terrain?.get(e,t);if(!n){let n=xs(e,t);return new W(n.x,.3,n.z)}return new W(n.x,n.h,n.z)}playMove(e,t,n={}){let r=this.heroes.get(e);if(!r||!t.length)return Promise.resolve();let i=t.map(e=>{let t=this.terrain?.get(e.q,e.r);return{pos:this.heroPos(e.q,e.r),boat:!n.fly&&(n.boat||(t?ac(t.tile.terrain):!1))}});return n.follow&&this.followHero(e),n.vessel&&r.setVessel(n.vessel),n.fly&&(r.inBalloon=!0,r.onBoat=!1),new Promise(e=>{r.walk(i,()=>{let i=t[t.length-1];r.q=i.q,r.r=i.r,n.boat&&(r.onBoat=!0),e()},!!n.fly,n.fly?this.cruiseFor(r,t):void 0)})}moveToken(e,t){let n=this.tokens.get(e);if(!n||!t.length)return Promise.resolve();let r=t.map(e=>this.heroPos(e.q,e.r));return new Promise(e=>{n.walk(r,()=>{let r=t[t.length-1];n.spec.q=r.q,n.spec.r=r.r,e()})})}cruiseFor(e,t){let n=this.topAt(e.q,e.r);for(let e of t)n=Math.max(n,this.topAt(e.q,e.r));return n+.45}playTeleport(e,t){let n=this.heroes.get(e);if(!n)return Promise.resolve();let r=n.root.position.clone();return this.effects.beam(r.x,r.y,r.z),new Promise(e=>{let r=this.heroPos(t.q,t.r),i=0;this.tasks.push(a=>{if(i+=a,i<.5)n.appear=1-i/.5;else if(i<.55){if(n.q!==t.q||n.r!==t.r){n.q=t.q,n.r=t.r,n.place(r);let e=this.terrain?.get(t.q,t.r);n.onBoat=e?ac(e.tile.terrain):!1,this.effects.beam(r.x,r.y,r.z),this.rig.follow&&this.rig.jump(r)}n.appear=0}else if(i<1.05)n.appear=(i-.55)/.5;else return n.appear=1,e(),!0;return!1})})}tasks=[];selectHero(e){this.selectedHero=e,this.selectedTile=null}selectTile(e){this.selectedTile=e,this.selectedHero=null}followHero(e){this.rig.follow=e?()=>this.heroes.get(e)?.followPoint()??null:null}guide=null;guideTask=!1;guideSaved=null;guideShow(e,t,n=1){if(!this.terrain||this.overview)return;let r=this.rig;this.guideSaved||={follow:r.follow},r.follow=null;let i=this.heroPos(t.q,t.r);r.tweenTo(i,r.distance,r.controls.getPolarAngle(),n,()=>r.setLimits(.75,1.2,5,48)),this.guide||(this.guide=new yu,this.scene.add(this.guide.group));let a=this.guide,o=this.terrain.get(t.q,t.r)??null;a.onArrive=()=>{o&&this.effects.beam(o.x,o.h,o.z,`#ffcf4a`,1.6)},a.show(this.infos(e),o,n),this.guideTask||(this.guideTask=!0,this.tasks.push(e=>{let t=!!this.guide&&this.guide.update(e);return t||(this.guideTask=!1),!t}))}flyTo(e,t=1){if(!this.terrain||this.overview)return;let n=this.rig;n.follow=null,n.tweenTo(this.heroPos(e.q,e.r),n.distance,n.controls.getPolarAngle(),t,()=>n.setLimits(.75,1.2,5,48))}isGuiding(){return!!this.guideSaved}guideMarkAlpha(){return this.guide?.alpha??0}guideEnd(e){if(!this.guideSaved)return;this.guide?.clear();let t=this.rig,n=()=>{let e=this.guideSaved?.follow??null;this.guideSaved=null,t.setLimits(.75,1.2,5,48),t.follow||=e};e&&!this.overview?t.tweenTo(this.heroPos(e.q,e.r),t.distance,t.controls.getPolarAngle(),.8,n):(t.cancelTween(),n())}setFog(e,t){if(e===null){this.visible&&(this.visible=null,this.applyFog(!1));return}let n=new Set,r=!1;for(let t of e){let e=bd(t.q,t.r);n.add(e),this.explored.has(e)||(this.explored.add(e),r=!0)}if(t)for(let e of t){let t=bd(e.q,e.r);this.explored.has(t)||(this.explored.add(t),r=!0)}let i=this.visible;if(i&&!r&&i.size===n.size){let e=!0;for(let t of n)if(!i.has(t)){e=!1;break}if(e)return}this.visible=n,this.applyFog(!1)}resetExplored(){this.explored.clear(),this.applyFog(!0)}light(e,t){if(!this.visible)return 1;let n=bd(e,t);return this.visible.has(n)?1:this.explored.has(n)?.5:0}applyFog(e){if(!this.fow||!this.terrain)return;let t=this.fogOn&&!!this.visible;J.uFowOn.value=1,this.fow.setLight((e,n)=>this.terrain.get(e,n)?t?this.light(e,n):1:void 0,t?.55:1,e),this.clouds?.set((e,n)=>t&&this.light(e,n)===0,e);for(let e of this.locations.values())e.shown=this.computeShown(e.loc);this.labels.dirty=!0,this.applyTokenFog()}locationShown(e){return this.locations.get(e.id)?.shown??this.computeShown(e)}computeShown(e){return!(this.fogOn&&this.visible)||this.light(e.q,e.r)>0}applyTokenFog(){for(let e of this.vehicles.values())e.mesh.visible=!(this.fogOn&&this.visible)||this.light(e.spec.q,e.spec.r)>0||this.light(e.tileQ??e.spec.q,e.tileR??e.spec.r)>0;let e=this.fogOn&&!!this.visible;for(let t of this.tokens.values()){let n=t.spec.q,r=t.spec.r;if(t.moving){let e=Ss(t.root.position.x,t.root.position.z);n=e.q,r=e.r}t.root.visible=!e||this.light(n,r)===1}}setCursed(e){if(this.cursed=[...e],!this.fow||!this.terrain)return;this.fow.setCurse(this.cursed);let t=this.cursed.map(e=>this.terrain.get(e.q,e.r)).filter(e=>!!e);this.effects.setCurse(t),this.mist?.set(this.cursed),this.ambient?.setCurse(t),this.weather?.set(this.weatherDay,this.cursed)}setTimeOfDay(e,t=!1){this.lighting.set(e,t)}setWeather(e){e===this.weatherDay&&this.weather||(this.weatherDay=e,this.weather?.set(e,this.cursed))}setWeatherOverride(e){this.weather?.setOverride(e)}strikeLightning(){this.weather?.strike(void 0,this.rig.controls.target)}onThunder=null;setRain(e){this.effects.setRain(e)}highlight(e,t=`reach`){this.effects.highlight(t,this.infos(e))}clearHighlight(e){for(let t of e?[e]:[`reach`,`danger`,`target`,`info`])this.effects.highlight(t,[])}showPath(e){this.effects.path(e?this.infos(e):[])}infos(e){return e.map(e=>this.terrain?.get(e.q,e.r)).filter(e=>!!e)}focusOn(e,t={}){let n=this.heroPos(e.q,e.r);t.instant?this.rig.jump(n,t.distance):this.rig.focus(n,t.distance)}rotate(e){this.rig.rotate(e*Math.PI/3)}setView(e,t,n){let r=this.rig.controls.target,i=t??this.rig.distance,a=On.clamp(n??this.rig.controls.getPolarAngle(),.75,1.2),o=On.degToRad(e);this.rig.camera.position.set(r.x+i*Math.sin(a)*Math.sin(o),r.y+i*Math.cos(a),r.z+i*Math.sin(a)*Math.cos(o)),this.rig.controls.update()}screenPosition(e,t=.8){let n=this.heroPos(e.q,e.r);return n.y+=t,n.project(this.rig.camera),n.z>1?null:{x:(n.x*.5+.5)*this.viewW,y:(-n.y*.5+.5)*this.viewH}}getStats(){return{tiles:this.terrain?.tiles.size??0,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,fps:this.fps}}bindInput(e){let t=this.renderer.domElement,n=e=>{this.downAt=[e.clientX,e.clientY]},r=e=>{if(this.paused)return;let t=this.downAt;if(this.downAt=null,!t||e.button!==0||Math.hypot(e.clientX-t[0],e.clientY-t[1])>6)return;this.setRay(e.clientX,e.clientY);let n=this.pickToken();if(n){this.onTokenClick?.(n.id,n.kind,e);return}let r=this.terrain?.pick(this.ray.ray);r&&this.onTileClick?.(r.tile,e)},i=e=>{this.pointer=e.buttons||this.paused?null:{x:e.clientX,y:e.clientY},this.pointerMoved=!0},a=()=>{this.pointer=null};if(t.addEventListener(`pointerdown`,n),t.addEventListener(`pointerup`,r),t.addEventListener(`pointermove`,i),t.addEventListener(`pointerleave`,a),this.cleanup.push(()=>{t.removeEventListener(`pointerdown`,n),t.removeEventListener(`pointerup`,r),t.removeEventListener(`pointermove`,i),t.removeEventListener(`pointerleave`,a)}),e){let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.key===`q`||e.key===`Q`)&&this.rotate(-1),(e.key===`e`||e.key===`E`)&&this.rotate(1),(e.key===`m`||e.key===`M`)&&this.setOverview(!this.overview))};window.addEventListener(`keydown`,e),this.cleanup.push(()=>window.removeEventListener(`keydown`,e))}}setRay(e,t){let n=this.renderer.domElement.getBoundingClientRect();this.ndc.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.rig.camera)}piecePicking=!0;pointerMoved=!1;lastCam=new W(1/0,0,0);lastTarget=new W;labelsQuiet=0;setPiecePicking(e){this.piecePicking=e}pickToken(){if(!this.piecePicking)return null;let e=[];for(let t of this.heroes.values())e.push(t.root);for(let t of this.tokens.values())t.root.visible&&e.push(t.root);let t=this.ray.intersectObjects(e,!0);this.iconView.on&&t.sort((e,t)=>Number(t.object.renderOrder>=10)-Number(e.object.renderOrder>=10)||e.distance-t.distance);for(let e of t){let t=e.object;if(t.visible&&Ad(t)){if(t.userData.heroId){let n=this.heroes.get(t.userData.heroId);if(!n||!n.opaqueAt(t,e.uv))continue;return{id:t.userData.heroId,kind:n.dead?`grave`:`hero`}}if(t.userData.tokenId){let n=this.tokens.get(t.userData.tokenId);if(!n||!n.opaqueAt(t,e.uv))continue;return{id:t.userData.tokenId,kind:n.spec.kind===`grave`?`grave`:`monster`}}}}return null}viewW=800;viewH=600;resize(){let e=this.container.clientWidth,t=this.container.clientHeight;e&&t&&(this.viewW=e,this.viewH=t,this.labels.dirty=!0,this.pointerMoved=!0,this.rig.camera.aspect=e/t,this.rig.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.post?.setSize(),this.paused&&this.terrain&&this.renderer.render(this.scene,this.rig.camera))}paused=!1;setPaused(e){e!==this.paused&&(this.paused=e,e?(this.renderer.setAnimationLoop(null),this.pointer=null,this.downAt=null,this.labels.root.style.visibility=`hidden`):(this.last=performance.now(),this.labels.root.style.visibility=``,this.renderer.shadowMap.needsUpdate=!0,this.monitor.sec=0,this.monitor.frames=0,this.monitor.low=0,this.monitor.high=0,this.probe&&={t:-1,frames:0,steps:this.probe.steps},this.renderer.setAnimationLoop(()=>this.frame())))}isPaused(){return this.paused}frame(){let e=performance.now(),t=Math.min((e-this.last)/1e3,.05);this.last=e,this.renderer.info.reset(),this.time+=t,J.uTime.value=this.time,this.fpsFrames++,this.fpsT+=t,this.fpsT>=1&&(this.fps=this.fpsFrames/this.fpsT,this.fpsFrames=0,this.fpsT=0);for(let e=this.tasks.length-1;e>=0;e--)this.tasks[e](t)&&this.tasks.splice(e,1);this.stepDetailRebuild(),this.rig.update(t);let n=this.rig.camera.position,r=this.rig.right(this.tmpR),i=this.rig.controls.target,a=this.rig.distance;this.lighting.update(t,this.rig.camera.position,a),this.kit.setLight(this.lighting.spriteColor),this.locMats.setNight(this.lighting.night,this.time),this.layoutStacks(r,t),this.updateIconView(a);for(let e of this.heroes.values())e.update(t,n,r,this.iconView);for(let e of this.tokens.values())e.update(t,n,r,this.iconView);let o=.55+.35*Math.sin(this.time*2.6);this.markMat.opacity=o;let s=this.iconView.on?Math.max(1,this.iconView.scale*.55):1;for(let e of this.vehicles.values()){let t=e.body;if(e.mesh.scale.setScalar(s),e.spec.kind===`balloon`){t.position.y=e.hover+Math.sin(this.time*1.1+e.phase)*.05,t.rotation.z=Math.sin(this.time*.8+e.phase)*.03;let n=e.rope?.geometry.getAttribute(`position`);n&&(n.setXYZ(1,.38,t.position.y+.1,.2),n.needsUpdate=!0)}else{t.position.y=Math.sin(this.time*1.6+e.phase)*.02-.03,t.rotation.z=Math.sin(this.time*1.3+e.phase)*.06;let n=e.mesh.children.find(e=>e.userData.arrow);n&&(n.position.y=1.35+Math.abs(Math.sin(this.time*2.4+e.phase))*.18,n.rotation.y=this.time*1.5)}}if(this.fogOn&&this.visible){for(let e of this.tokens.values())if(e.moving){this.applyTokenFog();break}}this.ambient?.update(this.lighting.night,this.renderer.domElement.height),J.uCloudShadow.value=Sd[this.quality].cloudShadow?1-this.lighting.night:0,this.runProbe(t),this.runMonitor(t);let c=!(this.quality===`low`&&a>30);for(let{loc:e,model:n}of this.locations.values())n.group.visible=c&&this.locationShown(e),n.group.visible&&n.update(this.time,t);this.effects.update(t,i),this.fow?.update(t),this.clouds?.update(t,this.time,this.lighting.fog,this.lighting.night),this.mist?.update(t,this.lighting.night),this.weather&&(this.weather.update(t,i,this.lighting.night,this.renderer.domElement.height,n),this.lighting.setWeather(this.weather.overcast,this.weather.flash));let l=this.lastCam.distanceToSquared(n)>1e-8||this.lastTarget.distanceToSquared(i)>1e-8;l&&(this.lastCam.copy(n),this.lastTarget.copy(i));let u=!1;for(let e of this.heroes.values())if(e.moving){u=!0;break}if(this.pointer&&this.terrain&&(this.pointerMoved||l)){this.pointerMoved=!1,this.setRay(this.pointer.x,this.pointer.y);let e=this.terrain.pick(this.ray.ray);e!==this.hoverInfo&&(this.hoverInfo=e,this.onTileHover?.(e?.tile??null))}else this.hoverInfo&&!this.pointer&&(this.hoverInfo=null,this.onTileHover?.(null));if(this.effects.hover(this.hoverInfo),this.selectedHero){let e=this.heroes.get(this.selectedHero);if(e){let t=e.root.position;this.effects.selRing.visible=!0,this.effects.selRing.position.set(t.x,t.y+.016,t.z)}}else this.effects.select(this.selectedTile?this.terrain?.get(this.selectedTile.q,this.selectedTile.r)??null:null);let d=l||u||this.labels.dirty||this.iconView.on;this.labelsQuiet=d?0:this.labelsQuiet+1,this.labelsQuiet<3&&this.labels.update(this.rig.camera,this.viewW,this.viewH,a,e=>{let t=this.locations.get(e);if(!t||!this.locationShown(t.loc))return!1;if(this.iconView.on){for(let e of this.heroes.values())if(e.q===t.loc.q&&e.r===t.loc.r)return!1}return!0},e=>{let t=this.locations.get(e);if(!t)return 0;let n=t.model.labelAnchor;if(Math.hypot(n.x,n.z)>.45)return 0;for(let e of this.heroes.values())if(!e.moving&&e.q===t.loc.q&&e.r===t.loc.r)return Math.max(0,1.95-n.y);return 0}),this.labels.dirty=!1,this.updateShadows(i,a),this.post?(this.post.update(a,this.lighting.night),this.post.render(t)):this.renderer.render(this.scene,this.rig.camera)}kenney=null;kenneyLoading=!1;kenneyApplied=!1;applyModels(e){if(!this.decor)return;if(this.applyProbe(e),!e){this.kenneyApplied&&(this.decor.useModels(null),this.kenneyApplied=!1,this.shadowDirty());return}if(this.kenney){this.kenneyApplied||(this.decor.useModels(this.kenney),this.kenneyApplied=!0,this.shadowDirty(),this.precompile());return}if(this.kenneyLoading)return;this.kenneyLoading=!0;let t=this.decor.heights();Be(()=>import(`./kenney-fqHPgvPB.js`).then(e=>e.loadKenneyDecor(t)),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>{this.kenneyLoading=!1,!this.disposed&&(this.kenney=e,this.quality===`ultra`&&this.applyModels(!0))},()=>{this.kenneyLoading=!1})}detailJob=null;detailHint=null;startDetailRebuild(e,t){if(this.cancelDetailRebuild(),!this.terrain||!this.locations.size){ml(e);return}if(e===hl())return;let n=this.detailJob={detail:e,queue:[...this.locations.values()].map(e=>e.loc).reverse(),built:new Map,batches:null};t&&this.setBusy(`detail`,!0);let r=()=>{this.detailJob!==n||this.disposed||(this.paused&&(this.stepDetailRebuild(),this.detailJob!==n&&this.terrain&&this.renderer.render(this.scene,this.rig.camera)),setTimeout(r,this.paused?16:250))};setTimeout(r,16)}cancelDetailRebuild(){let e=this.detailJob;if(e){for(let{model:t}of e.built.values())t.dispose();e.batches?.stable.dispose(),e.batches?.stateful.dispose(),this.detailJob=null,this.setBusy(`detail`,!1)}}busy=new Set;setBusy(e,t){t?this.busy.add(e):this.busy.delete(e),this.showDetailHint(this.busy.size>0)}showDetailHint(e){if(!e){this.detailHint?.remove(),this.detailHint=null;return}if(this.detailHint)return;let t=document.createElement(`div`);t.className=`qk-quality-busy`,t.textContent=`調整畫質中…`,Object.assign(t.style,{position:`absolute`,left:`50%`,top:`40%`,transform:`translateX(-50%)`,pointerEvents:`none`,padding:`8px 18px`,borderRadius:`999px`,background:`rgba(24,16,34,0.72)`,color:`#fff3dc`,font:`600 16px/1.3 sans-serif`,letterSpacing:`0.05em`,whiteSpace:`nowrap`,zIndex:`5`}),this.container.appendChild(t),this.detailHint=t}stepDetailRebuild(){let e=this.detailJob;if(!e||!this.terrain)return;let t=performance.now()+6;for(;e.queue.length;){let n=e.queue.pop(),r=this.makeModel(n,e.detail);if(r&&e.built.set(n.id,{loc:n,model:r}),performance.now()>t)return}if(!e.batches){let n=t=>[...e.built.values()].filter(({loc:e})=>jl.has(e.kind)===t).map(({model:e})=>(e.group.updateMatrix(),{model:e,matrix:e.group.matrix.clone(),fowX:e.group.position.x,fowZ:e.group.position.z}));if(e.batches={stable:new Fl(n(!1),this.locMats,!0),stateful:new Fl(n(!0),this.locMats,!0)},performance.now()>t)return}e.batches.stable.step(t)&&e.batches.stateful.step(t)&&this.swapDetailRebuild(e)}swapDetailRebuild(e){this.detailJob=null,ml(e.detail);let t=[];for(let[n,r]of this.locations){this.scene.remove(r.model.group),r.model.dispose();let i=e.built.get(n);e.built.delete(n),i?(this.scene.add(i.model.group),r.model=i.model,(Ml(i.loc)!==Ml(r.loc)||i.loc.active!==r.loc.active)&&t.push(r.loc)):(t.push(r.loc),this.locations.delete(n))}for(let{model:t}of e.built.values())t.dispose();for(let t of[`stable`,`stateful`]){let n=this.batches[t];n&&(this.scene.remove(n.group),n.dispose()),this.batches[t]=e.batches[t],this.scene.add(e.batches[t].group)}if(this.shadowDirty(),this.refreshLabels(),this.refreshLights(),this.labels.dirty=!0,this.setBusy(`detail`,!1),t.length){let e=!1,n=!1;for(let r of t){let t=this.locations.get(r.id);t&&(this.scene.remove(t.model.group),t.model.dispose(),this.locations.delete(r.id)),this.addLocation(r),jl.has(r.kind)?n=!0:e=!0}e&&this.rebuildBatch(`stable`),n&&this.rebuildBatch(`stateful`),this.refreshLabels(),this.refreshLights()}}probeSh=null;probeLoading=!1;applyProbe(e){e?this.probeSh?this.lighting.setProbe(this.probeSh):this.probeLoading||(this.probeLoading=!0,fetch(new URL(`assets/cc0/polyhaven/kloofendal_48d_partly_cloudy_puresky_sh.json`,document.baseURI).href).then(e=>e.json()).then(e=>{this.probeSh=e.coefficients,!this.disposed&&this.quality===`ultra`&&this.lighting.setProbe(this.probeSh)}).catch(()=>void 0).finally(()=>{this.probeLoading=!1})):this.lighting.setProbe(null)}ensurePost(e){if(this.postWant=e,e===`none`)this.post&&=(this.post.dispose(),null),J.uGlow.value=1;else if(this.post){let t=e===`ultra`&&this.post.level!==`ultra`;if(this.post.setLevel(e),this.post.setSize(),t){let e=this.post;this.post=null,this.postLoading=!0,this.qualityByUser&&this.setBusy(`post`,!0),this.precompilePost(e).catch(()=>void 0).then(()=>{this.postLoading=!1,this.setBusy(`post`,!1),this.disposed||this.postWant===`none`?e.dispose():(this.post=e,e.setLevel(this.postWant),e.setSize())})}}else this.postLoading||(this.postLoading=!0,this.qualityByUser&&this.setBusy(`post`,!0),Be(async()=>{let{PostFx:e}=await import(`./post-DgLcNEzq.js`);return{PostFx:e}},__vite__mapDeps([3,4]),import.meta.url).then(async({PostFx:e})=>{if(this.disposed||this.postWant===`none`){this.postLoading=!1,this.setBusy(`post`,!1);return}let t=new e(this.renderer,this.scene,this.rig.camera,this.postWant);await this.precompilePost(t).catch(()=>void 0),this.postLoading=!1,this.setBusy(`post`,!1),this.disposed||this.postWant===`none`?t.dispose():(this.post=t,t.setLevel(this.postWant),t.setSize(),J.uGlow.value=1.8)},()=>{this.postLoading=!1,this.setBusy(`post`,!1)}))}async precompilePost(e){let t=this.renderer,n=this.compileAllAsync(e.composer.readBuffer),r=new Set,i=new Set([e.composer.readBuffer,e.composer.writeBuffer]),a=(e,t)=>{if(!(!e||typeof e!=`object`||e instanceof Jt)){if(e instanceof Pn)r.add(e);else if(e instanceof Xt)i.add(e);else if(e instanceof V){let t=e.material;(Array.isArray(t)?t:[t]).forEach(e=>r.add(e))}else if(!(e instanceof Qe||t>2))for(let n of Array.isArray(e)?e:Object.values(e))a(n,t+1)}};for(let t of[...e.composer.passes,e.composer.copyPass])a(t,0);let o=0;for(let e of i)t.initRenderTarget(e),++o%3==0&&await new Promise(e=>setTimeout(e,0));let s=new et,c=new pt(2,2);for(let e of r){let t=new V(c,e);t.frustumCulled=!1,s.add(t)}let l=[],u=new jn;for(let n of e.composer.passes){if(!n.normalMaterial)continue;let e=new et,r=new yt(u,n.normalMaterial,1),i=new yt(u,n.normalMaterial,1);i.setColorAt(0,new U),e.add(new V(u,n.normalMaterial),r,i);for(let t of e.children)t.frustumCulled=!1;let a=t.getRenderTarget();t.setRenderTarget(n.normalRenderTarget??null),l.push(t.compileAsync(e,this.rig.camera,this.scene).catch(()=>void 0)),t.setRenderTarget(a)}let d=t.compileAsync(s,this.rig.camera),f=t.getRenderTarget();t.setRenderTarget(e.composer.readBuffer);let p=t.compileAsync(s,this.rig.camera);t.setRenderTarget(f);try{await Promise.all([n,d,p,...l])}finally{c.dispose(),u.dispose()}let m=t.getRenderTarget();for(let n of e.composer.passes){if(n.enabled===!1||!n.render)continue;let r=n.renderToScreen;n.renderToScreen=!1;try{n.render(t,e.composer.writeBuffer,e.composer.readBuffer,0,!1)}catch{}n.renderToScreen=r,t.setRenderTarget(m),await new Promise(e=>setTimeout(e,0))}}shadowAt=new W(1/0,0,0);shadowDist=0;updateShadows(e,t){this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.autoUpdate=!1,(this.shadowAt.distanceToSquared(e)>9||Math.abs(this.shadowDist-t)>this.shadowDist*.1)&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowAt.copy(e),this.shadowDist=t,this.lighting.place(e,t)))}shadowDirty(){this.renderer.shadowMap.needsUpdate=!0}layoutStacks(e,t){let n=new Map;for(let e of this.heroes.values()){if(e.moving)continue;let t=bs(e.q,e.r),r=n.get(t)??[];r.push(e),n.set(t,r)}let r=this.iconView;for(let i of n.values()){let n=this.heroPos(i[0].q,i[0].r);i.sort((e,t)=>e.id.localeCompare(t.id));let a=i.length>1&&i.every(e=>e.inBalloon&&!e.dead);i.forEach((o,s)=>{if(o.shareVehicle=a&&s>0,r.on&&i.length>1){let e=r.scale*(i.length===2?.62:.78),t=r.az+Math.PI+s/i.length*Math.PI*2;this.tmpV.copy(n).add(new W(Math.sin(t)*e,0,Math.cos(t)*e))}else{let t=i.length>1?a?.26:Math.min(xd,1.5/(i.length-1)):0,r=(s-(i.length-1)/2)*t;this.tmpV.copy(n).addScaledVector(e,r)}o.root.position.lerp(this.tmpV,Math.min(1,t*8))})}}setQuality(e){e===`auto`?(this.autoQuality=!0,this.applyQuality(Ed(this.gpuName(),Dd())),this.terrain&&(this.probe={t:-1,frames:0,steps:0})):(this.autoQuality=!1,this.probe=null,this.qualityByUser=!0,this.applyQuality(e),this.qualityByUser=!1)}qualityByUser=!1;applyQuality(e){let t=Sd[e];this.quality=e;let n=this.container.clientWidth||800,r=this.container.clientHeight||600;this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.maxPixelRatio,t.pixelRatio)*this.resScale),this.renderer.setSize(n,r);let i=this.shadowsAllowed&&t.shadows,a=this.lighting.sun;a.shadow.mapSize.x!==t.shadowMap&&(a.shadow.map?.dispose(),a.shadow.map=null,a.shadow.mapSize.set(t.shadowMap,t.shadowMap)),this.renderer.shadowMap.enabled!==i&&(this.renderer.shadowMap.enabled=i,a.castShadow=i,this.scene.traverse(e=>{let t=e.material;Array.isArray(t)?t.forEach(e=>{e.needsUpdate=!0}):t&&(t.needsUpdate=!0)})),a.shadow.radius=t.shadowRadius,this.renderer.shadowMap.needsUpdate=!0,this.shadowAt.set(1/0,0,0),J.uLow.value=+!!t.low,J.uWind.value=+!!t.life,J.uRim.value=+!t.low,this.ensurePost(t.post),this.post?.setSize(),this.vignette.style.display=e===`medium`?`block`:`none`,this.lighting.skyDome.visible=!t.low,this.decor?.setDensity(t.decor),this.applyModels(e===`ultra`),this.startDetailRebuild(Cd[e],this.qualityByUser),this.ambient?.setQuality(e),this.mist?.setEnabled(t.life),this.weather?.setQuality(t.low?`off`:e===`medium`?`few`:`full`);for(let{model:e}of this.locations.values())e.setLow(t.low);this.onQualityChange?.(e)}getQuality(){return this.quality}isAutoQuality(){return this.autoQuality}gpuName(){try{let e=this.renderer.getContext(),t=e.getExtension(`WEBGL_debug_renderer_info`);return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return``}}monitor={sec:0,frames:0,low:0,high:0,cooldown:0,banned:new Map};resScale=1;autoCeiling(){return Ed(this.gpuName(),Dd())===`ultra`?wd:wd.slice(0,3)}weakGpu(){let e=Ed(this.gpuName(),Dd());return e!==`high`&&e!==`ultra`}runMonitor(e){if(!this.autoQuality||this.probe||document.hidden||!this.terrain)return;let t=this.monitor;t.cooldown=Math.max(0,t.cooldown-e);for(let[n,r]of t.banned)r-e<=0?t.banned.delete(n):t.banned.set(n,r-e);if(t.sec+=e,t.frames++,t.sec<1)return;let n=t.frames/t.sec;if(t.sec=0,t.frames=0,t.low=n<40?t.low+1:0,t.high=n>55?t.high+1:0,t.vlow=n<30?(t.vlow??0)+1:0,t.cooldown>0)return;let r=this.autoCeiling(),i=r.indexOf(this.quality);this.quality===`low`&&this.resScale===1&&(t.vlow??0)>=4&&this.weakGpu()&&devicePixelRatio*.67>=.75?(this.resScale=.67,this.applyQuality(`low`),t.cooldown=20,t.vlow=0,t.low=0,t.high=0):this.resScale<1&&t.high>=10?(this.resScale=1,this.applyQuality(this.quality),t.cooldown=20,t.high=0):t.low>=4&&i>0?(t.banned.set(this.quality,300),this.applyQuality(r[i-1]),t.cooldown=20,t.low=0,t.high=0):t.high>=10&&i>=0&&i<r.length-1&&!t.banned.has(r[i+1])&&(this.applyQuality(r[i+1]),t.cooldown=20,t.low=0,t.high=0)}runProbe(e){let t=this.probe;t&&!document.hidden&&(t.t+=e,!(t.t<0)&&(t.t<1?t.frames=0:(t.frames++,!(t.t<4)&&(t.frames/(t.t-1)<40&&this.quality!==`low`&&t.steps<3?(this.monitor.banned.set(this.quality,300),this.applyQuality(wd[wd.indexOf(this.quality)-1]),this.probe={t:0,frames:0,steps:t.steps+1}):this.probe=null))))}setOverview(e){if(e===this.overview||!this.terrain)return;e&&this.guideEnd(),this.overview=e;let t=this.rig;if(e){this.savedView={target:t.controls.target.clone(),dist:t.distance,polar:t.controls.getPolarAngle(),follow:t.follow},t.follow=null;let e=1/0,n=-1/0,r=1/0,i=-1/0,a=this.fogOn&&!!this.visible;for(let[t,o]of this.terrain.tiles)(a?!this.explored.has(bd(o.tile.q,o.tile.r)):ac(o.tile.terrain))||(e=Math.min(e,o.x),n=Math.max(n,o.x),r=Math.min(r,o.z),i=Math.max(i,o.z));isFinite(e)||(e=-10,n=10,r=-10,i=10);let o=new W((e+n)/2,.3,(r+i)/2),s=(n-e)/2+2,c=(i-r)/2+2,l=Math.tan(On.degToRad(t.camera.fov/2)),u=On.clamp(Math.max(c/l,s/(l*t.camera.aspect))*1.04,22,230);this.lighting.maxExtent=Math.max(40,this.terrain.radius*1.8),t.tweenTo(o,u,.22,.9,()=>t.setLimits(.12,.5,Math.max(10,u*.35),Math.max(60,u*1.4)))}else{let e=this.savedView;this.lighting.maxExtent=40;let n=e?.target??t.controls.target.clone();t.tweenTo(n,e?.dist??11,e?.polar??1,.9,()=>{t.setLimits(.75,1.2,5,48),t.follow=e?.follow??null}),this.savedView=null}}isOverview(){return this.overview}updateIconView(e){let t=this.overview&&this.rig.tweenProgress>.5;this.iconView.on=t,this.iconView.az=this.rig.controls.getAzimuthalAngle(),this.iconView.scale=On.clamp(e/34,1.2,4.5)}dispose(){this.disposed=!0,this.busy.clear(),this.showDetailHint(!1),this.post?.dispose(),this.post=null,this.lighting.dispose(),this.renderer.setAnimationLoop(null),this.resizeObs.disconnect();for(let e of this.cleanup)e();this.clearMap();for(let e of this.heroes.values())e.dispose();for(let e of this.tokens.values())e.dispose();this.pegGeo.dispose(),this.markGeo.dispose(),this.markMat.dispose(),this.ropeMat.dispose(),this.arrowGeo.dispose(),this.arrowMat.dispose();for(let e of this.vehicles.values())e.rope?.geometry.dispose();this.heroes.clear(),this.tokens.clear(),this.effects.dispose(),this.guide?.dispose(),this.kit.dispose(),this.locMats.dispose(),this.labels.dispose(),this.rig.dispose(),this.renderer.dispose(),this.renderer.domElement.remove(),this.vignette.remove()}};function Ad(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}function jd(e){return e<=0?0:e===1?10:e===2?15:e===3?17:19}function Md(e){return Math.max(5,Math.min(95,Math.round(e)))}function Nd(e,t,n){return Math.max(0,Math.min(Math.floor(e),t,Math.max(0,n)))}function Pd(e,t,n){let r=Nd(n,t,t),i=Md(e+jd(r));return Array.from({length:t},(e,t)=>t<r?100:i)}function Fd(e,t,n=0){return Pd(e,t,n).reduce((e,t)=>t/100*e,1)}function Id(e,t,n,r=0){let i=Pd(e,t,r).map(e=>e/100),a=[1];for(let e of i){let t=Array(a.length+1).fill(0);a.forEach((n,r)=>{t[r]=(t[r]??0)+n*(1-e),t[r+1]=(t[r+1]??0)+n*e}),a=t}let o=Math.max(0,Math.min(n,t));return a.slice(o).reduce((e,t)=>e+t,0)}function Ld(e,t,n=0){let r=Pd(e,t,n).map(e=>e/100),i=[1];for(let e of r){let t=Array(i.length+1).fill(0);i.forEach((n,r)=>{t[r]=(t[r]??0)+n*(1-e),t[r+1]=(t[r+1]??0)+n*e}),i=t}return i}function Rd(e){let t=e*100;return t>0&&t<1?`<1%`:`${Math.round(t)}%`}function zd(e,t){return e.filter(Boolean).length>=(t===void 0?e.length:t)}var Bd={lockedStep:110,firstSpin:520,step:300,suspense:420};function Vd(e,t,n=Bd){let r=e.length,i=Nd(t,r,r),a=[],o=0;for(let e=0;e<i;e++)o+=n.lockedStep,a.push({index:e,at:o,locked:!0});for(let t=i;t<r;t++){o+=t===i?n.firstSpin:n.step;let s=t===r-1,c=e.slice(0,t).every(Boolean);s&&r-i>=2&&c&&(o+=n.suspense),a.push({index:t,at:o,locked:!1})}return a}var Hd=null;function Ud(e){Hd=e}var Wd=1300;function Gd(e,t,n){return e===t&&t>0?{big:`完美！ ${e}／${t}`,kind:`perfect`}:n!==void 0&&n>0?e>=n?{big:`成功 ${e}／${t}`,kind:`ok`}:{big:`失敗 ${e}／${t}`,kind:`ng`}:{big:`中 ${e}／${t} 格`,kind:`plain`}}function Kd(e){return e.title===`移動`?{what:`擲骰子移動`,paren:``}:{what:`擲${We[e.stat]}`,paren:e.title?`（${e.title}）`:``}}var qd=`<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="currentColor"><ellipse cx="32" cy="42" rx="14" ry="12"/><ellipse cx="15" cy="27" rx="6" ry="8"/><ellipse cx="26" cy="17" rx="6" ry="8"/><ellipse cx="38" cy="17" rx="6" ry="8"/><ellipse cx="49" cy="27" rx="6" ry="8"/></g></svg>`,Jd=`<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M18 18 L46 46 M46 18 L18 46" stroke="currentColor" stroke-width="9" stroke-linecap="round" fill="none"/></svg>`,Yd=`<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="28" width="36" height="28" rx="6" fill="currentColor"/><path d="M22 28 V20 a10 10 0 0 1 20 0 V28" stroke="currentColor" stroke-width="7" fill="none"/></svg>`;function Xd(e,t){let n=p(`span`,{class:t});return n.innerHTML=e,n}var Zd=class{el;check;opts;lockedN;slotEls=[];rowEl;chanceEl;bonusEl;infoEl;distEl;lockLabel;minusBtn;plusBtn;rollBtn;controlsEl;resultEl;fxEl;rollResolve=null;busy=!1;who;skipHold=null;constructor(e,t={}){this.check=e,this.opts=t,this.lockedN=this.clampN(e.locked??0),this.el=p(`div.roller`,{class:t.compact?`compact`:``}),this.who=t.who===void 0?Hd?.()??null:t.who,this.who?.monster&&(this.el.classList.add(`monster`),this.el.dataset.monster=`1`),this.el.style.setProperty(`--stat`,i[e.stat]),Qd(this.el,e.stat),this.el.style.setProperty(`--n`,String(Math.max(1,e.slots))),this.build(),this.refresh(!1)}get locked(){return this.lockedN}clampN(e){let t=this.check,n=this.opts.allowLock===!1?t.locked??0:t.maxLock;return t.focusBonus?Math.max(0,Math.min(Math.floor(e),n)):Nd(e,t.slots,n)}get lockedSlots(){return this.check.focusBonus?0:this.lockedN}build(){let e=this.check;this.chanceEl=p(`span.roller-chance`),this.bonusEl=p(`span.roller-bonus`);let t=this.who,n=t?.portrait?Array.isArray(t.portrait)?t.portrait:[t.portrait]:[],i=t?g(n,{text:t.name.slice(0,1),cls:`roller-face`,face:!t.monster}):null,a=Kd(e),o=p(`div.roller-head`,null,i,p(`span.roller-title`,null,t?p(`b.roller-who`,null,t.name):null,t?`・`:null,a.what,a.paren?p(`span.roller-what`,null,a.paren):null),p(`span.roller-chance-wrap`,null,this.chanceEl,this.bonusEl));this.rowEl=p(`div.roller-row`);let s=e.note?p(`div.roller-note`,null,e.note):null;this.slotEls=Array.from({length:e.slots},(t,n)=>{let r=p(`div.slot`,{"data-i":n},p(`div.tok.tok-front`,null,p(`span.tok-icon`),p(`span.slot-pct`),Xd(Yd,`tok-lock`)),p(`div.tok.tok-back`,null,Xd(qd,`tok-hit`),Xd(Jd,`tok-miss`)));return this.opts.allowLock!==!1&&!e.focusBonus&&r.addEventListener(`click`,()=>{if(this.busy||!this.canAdjust())return;let e=n+1===this.lockedN?n:n+1;this.setLocked(e)}),this.rowEl.append(r),r}),this.fxEl=p(`div.roller-fx`),this.infoEl=p(`div.roller-info`),this.distEl=p(`div.roller-dist`),this.lockLabel=p(`span.lock-label`),this.minusBtn=f(`minus`,`少用一點專注`,()=>this.setLocked(this.lockedN-1),`small`,!1,`－`),this.plusBtn=f(`plus`,`多用一點專注`,()=>this.setLocked(this.lockedN+1),`small`,!1,`＋`),this.rollBtn=r(this.opts.rollLabel??`擲！`,()=>this.rollResolve?.(this.lockedN),`primary roll-btn`);let c=p(`div.lock-box`,null,this.minusBtn,this.lockLabel,this.plusBtn);if(this.canAdjust()||c.classList.add(`hidden`),this.controlsEl=p(`div.roller-controls`,null,c),this.opts.onCancel){let e=r(p(`span.rb-label`,null,p(`span.rb-icon`,{"aria-hidden":`true`},`↩`),p(`span.rb-text`,null,`返回`)),()=>this.opts.onCancel?.(),`small ghost roller-back`);e.title=`返回`,e.setAttribute(`aria-label`,`返回`),this.controlsEl.append(e)}this.opts.hideRollButton||this.controlsEl.append(this.rollBtn),this.resultEl=p(`div.roller-result`),this.el.append(o,...s?[s]:[],p(`div.roller-stage`,null,this.rowEl,this.fxEl),this.infoEl,this.distEl,this.controlsEl,this.resultEl)}canAdjust(){return this.opts.allowLock!==!1&&this.check.maxLock>0}setLocked(e){let t=this.clampN(e);if(t===this.lockedN)return;let n=t>this.lockedN;this.lockedN=t,z.sfx(n?o.lock:o.unlock),this.refresh(!0),this.opts.onLockChange?.(t)}refresh(e){let t=this.check,n=this.lockedSlots,r=Pd(t.chance,t.slots,n),i=r[n]??r[0]??t.chance,a=jd(n);this.slotEls.forEach((e,t)=>{let i=t<n;e.classList.toggle(`locked`,i);let a=e.querySelector(`.slot-pct`);a.textContent=i?``:`${r[t]}%`}),this.chanceEl.textContent=`每格 ${n>=t.slots?100:i}%`,this.bonusEl.textContent=a>0&&n<t.slots?`＋${a}`:``,e&&a>0&&(A(this.bonusEl,`pop`),A(this.chanceEl,`pop`));let o=[],s=t.need;if(s!==void 0&&s>0&&s<t.slots&&o.push(`需要 ${s} 格　過關 ${Rd(Id(t.chance,t.slots,s,n))}`),o.push(`完美 ${Rd(Fd(t.chance,t.slots,n))}`),this.infoEl.textContent=o.join(`　・　`),this.distEl.textContent=``,s!==void 0&&s>0&&t.slots<=6){let e=Ld(t.chance,t.slots,n);for(let n=t.slots;n>=0;n--)this.distEl.append(p(`span.dist-chip`,{class:n>=s?`pass`:`fail`},p(`b`,null,`${n}`),`格 ${Rd(e[n]??0)}`))}let c=t.focusBonus?`專注 ＋${this.lockedN} 步（${this.lockedN}／${t.maxLock}）`:`鎖 ${this.lockedN} 格（專注 ${this.lockedN}／${t.maxLock}）`,l=t.focusBonus?`專注 ${this.lockedN}／${t.maxLock}`:`鎖 ${this.lockedN}／${t.maxLock}`;this.lockLabel.textContent=``,this.lockLabel.append(p(`span.ll-long`,null,c),p(`span.ll-short`,null,l)),this.minusBtn.disabled=this.lockedN<=0,this.plusBtn.disabled=this.lockedN>=(t.focusBonus?t.maxLock:Math.min(t.slots,t.maxLock))}waitForRoll(){return this.rollBtn.disabled=!1,new Promise(e=>{this.rollResolve=t=>{this.rollResolve=null,e(t)}})}async run(e){let t=await this.waitForRoll();this.rollBtn.disabled=!0;let n=await e(t),r=Array.isArray(n)?{results:n,locked:t}:n;return this.reveal(r)}async reveal(e){this.busy=!0;let t=this.check.slots,n=e.results.slice(0,t);for(;n.length<t;)n.push(!1);let r=Nd(e.locked,t,t);!this.check.focusBonus&&r!==this.lockedN&&(this.lockedN=r,this.refresh(!1)),this.el.classList.add(`rolling`),this.controlsEl.classList.add(`hidden`),this.distEl.classList.add(`hidden`),this.resultEl.textContent=``,this.resultEl.className=`roller-result`,this.el.classList.remove(`perfect`,`failed`),z.sfx(o.rollStart),this.slotEls.forEach((e,t)=>{e.classList.remove(`hit`,`miss`,`land`),t>=r&&e.classList.add(`spinning`)});let i=Vd(n,r),a=0;for(let e of i){await M(e.at-a),a=e.at;let t=this.slotEls[e.index],r=n[e.index];t.classList.remove(`spinning`),t.classList.add(r?`hit`:`miss`,`land`),e.locked||z.sfx(r?o.slotHit:o.slotMiss);let s=i.filter(t=>t.at>e.at&&!t.locked),c=n.slice(0,e.index+1).every(Boolean);this.el.classList.toggle(`tense`,s.length===1&&c)}this.el.classList.remove(`tense`,`rolling`);let s=n.filter(Boolean).length,c=s===t,l=zd(n,this.check.need),u=this.check.describe?this.check.describe(s,t,c,this.check.focusBonus?this.lockedN:0):``,d=Gd(s,t,this.check.need);return this.resultEl.textContent=``,this.resultEl.append(p(`span.result-big`,{class:d.kind},d.big)),u&&this.resultEl.append(p(`span.result-text`,null,u)),c?(this.el.classList.add(`perfect`),this.celebrate(),z.sfx(o.perfect)):(l||this.el.classList.add(`failed`),s===0&&z.sfx(o.allMiss)),A(this.resultEl,`show`),await new Promise(e=>{let t=!1,n=()=>{t||(t=!0,this.skipHold=null,this.el.removeEventListener(`pointerdown`,n),e())};this.skipHold=n,this.el.addEventListener(`pointerdown`,n);let r=this.who?.monster?800:Wd;M(c?r+300:r).then(n)}),this.busy=!1,{hits:s,total:t,perfect:c,passed:l,locked:r}}celebrate(){let e=this.fxEl;e.textContent=``,e.append(p(`div.perfect-ring`));let t=[`#ffd257`,`#ff8a3d`,`#fff3c4`,`#e85d75`,`#7fd1a8`,`#6fb6ff`];for(let n=0;n<26;n++){let r=p(`i.confetti`),i=Math.PI*2*n/26+Math.random()*.3,a=70+Math.random()*90;r.style.setProperty(`--dx`,`${Math.cos(i)*a}px`),r.style.setProperty(`--dy`,`${Math.sin(i)*a*.7-30}px`),r.style.setProperty(`--rot`,`${Math.round(Math.random()*720-360)}deg`),r.style.background=t[n%t.length],r.style.animationDelay=`${Math.random()*80}ms`,e.append(r)}window.setTimeout(()=>{e.textContent=``},1600)}reset(e){this.check=e,this.lockedN=this.clampN(e.locked??0),this.el.textContent=``,this.el.className=`roller${this.opts.compact?` compact`:``}`,this.el.style.setProperty(`--stat`,i[e.stat]),Qd(this.el,e.stat),this.el.style.setProperty(`--n`,String(Math.max(1,e.slots))),this.build(),this.refresh(!1)}};function Qd(e,t){let n=j(`icon:stat_${t}`);n?e.style.setProperty(`--stat-icon`,`url("${n}")`):e.style.removeProperty(`--stat-icon`)}function $d(e,t,n){let r=e.length;if(r===0)return 0;let i=e.reduce((e,t)=>e+t,0);if(i<=0)return 0;let a=t;if(n)a=(t%i+i)%i;else if(a>=i)return r-1;for(let t=0;t<r;t++)if(a-=e[t],a<0)return t;return r-1}function ef(e,t=1){return e.reduce((e,t)=>e+t,0)/(t>0?t:1)}async function tf(e){if(typeof createImageBitmap!=`function`||typeof fetch!=`function`)return null;try{let t=await fetch(e);return t.ok?await createImageBitmap(await t.blob()):null}catch{return null}}var nf=new Map;function rf(e){let t=nf.get(e);if(t)return nf.delete(e),nf.set(e,t),t;let n=ae(e);if(!n)return Promise.resolve(null);let r=P(n.path);t=tf(r).then(async t=>{if(t)return sf(e,n,t);let i=await ke(r);return i?sf(e,n,i):null}),nf.set(e,t);for(let e of nf.keys()){if(nf.size<=40)break;af(e)}return t}function af(e){nf.delete(e);let t=ae(e);t&&T(P(t.path))}function of(e=[]){let t=new Set(e);for(let e of[...nf.keys()])t.has(e)||af(e)}function sf(e,t,n){let r=`naturalWidth`in n?n.naturalWidth:n.width,i=`naturalHeight`in n?n.naturalHeight:n.height;return{img:n,frames:t.frames&&t.frames.length?t.frames:[{rect:[0,0,r,i],pivot:[r/2,i],duration:.6}],scale:t.frames&&t.frames.length?typeof t.scale==`number`?t.scale:1:null,loop:typeof t.loop==`boolean`?t.loop:!t.frames,speed:he(e,t),mirror:t.mirror===!0}}function cf(e,t,n,r){let i=n??t,a=Math.min(e[0]/i[2],e[1]/i[3]);return!n||!r||t[3]>=n[3]*.88?a:Math.max(a,Math.min(a*n[3]/t[3],r/t[2]))}var lf=new WeakMap;function uf(e,t,n){let r=t.join(`,`)+`|`+n,i=lf.get(e);i||lf.set(e,i=new Map);let a=i.get(r);if(a!==void 0)return a;let o=0;try{let[r,i,a,s]=t,c=Math.min(1,256/s),l=Math.max(1,Math.round(a*c)),u=Math.max(1,Math.round(s*c)),d=document.createElement(`canvas`);d.width=l,d.height=u;let f=d.getContext(`2d`,{willReadFrequently:!0});if(f){f.drawImage(e,r,i,a,s,0,0,l,u);let t=f.getImageData(0,0,l,u).data,d=-1;for(let e=u-1;e>=0&&d<0;e--){let n=0;for(let r=0;r<l;r++)t[(e*l+r)*4+3]>40&&n++;n>=Math.max(2,l*.01)&&(d=e)}d>=0&&(o=Math.max(0,n-i-(d+1)/c))}}catch{o=0}return i.set(r,o),o}var df=class{canvas;ctx;opts;current=null;currentKey=``;startT=0;idleKey=``;raf=0;finish=null;disposed=!1;dpr=Math.min(2,typeof devicePixelRatio==`number`?devicePixelRatio:1);idleRect=null;headFrac=null;constructor(e){this.opts={footPad:6,zoom:1,flip:!1,faceLeft:!1,fitBox:[270,300],fallbackText:`?`,fallbackColor:`#c9702a`,groundTrim:!1,poseScaleFromIdle:!1,...e},this.canvas=document.createElement(`canvas`),this.canvas.className=`sprite-canvas`,this.canvas.width=Math.round(e.width*this.dpr),this.canvas.height=Math.round(e.height*this.dpr),this.canvas.style.aspectRatio=`${e.width} / ${e.height}`,this.ctx=this.canvas.getContext(`2d`),this.drawFallback()}async idle(e){this.idleKey=e,await this.play(e,!0)}play(e,t=!1){return this.finish?.(),this.finish=null,rf(e).then(n=>{if(!this.disposed){if(!n)return this.current||this.drawFallback(),t?void 0:new Promise(e=>setTimeout(e,250));if(e===this.idleKey&&n.scale===null&&(this.idleRect=n.frames[0].rect),this.current={...n,loop:t||n.loop&&e===this.idleKey},this.currentKey=e,this.startT=performance.now(),this.tick(),!this.current.loop)return new Promise(e=>{this.finish=e})}})}tick=()=>{if(cancelAnimationFrame(this.raf),this.disposed||!this.current)return;let e=this.current,t=(performance.now()-this.startT)/1e3*e.speed,n=e.frames.map(e=>e.duration),r=n.reduce((e,t)=>e+t,0),i=$d(n,t,e.loop);if(this.draw(e,e.frames[i]),!e.loop&&t>=r){let e=this.finish;this.finish=null,e?.(),this.idleKey&&this.currentKey!==this.idleKey&&!this.holdLast&&this.play(this.idleKey,!0)}else(e.frames.length>1||!e.loop)&&(this.raf=requestAnimationFrame(this.tick))};holdLast=!1;draw(e,t){let n=this.ctx;if(!n)return;let{width:r,height:i,footPad:a,zoom:o,faceLeft:s,fitBox:c}=this.opts,l=this.opts.flip!==(s&&e.mirror);n.setTransform(this.dpr,0,0,this.dpr,0,0),n.clearRect(0,0,r,i);let u=this.opts.poseScaleFromIdle&&this.currentKey!==this.idleKey&&!this.currentKey.endsWith(`:down`),d=cf(c,t.rect,this.opts.poseScaleFromIdle?this.idleRect:null,u?r-4:void 0),f=(e.scale??d)*o,[p,m,h,g]=t.rect,[_,v]=t.pivot,y=e.frames[0],b=this.opts.groundTrim?v-uf(e.img,y.rect,y.pivot[1]):v,x=r/2,S=i-a;this.headFrac=Math.max(0,Math.min(1,(S-b*f)/i)),n.save(),n.translate(x,S),l&&n.scale(-1,1),n.drawImage(e.img,p,m,h,g,-_*f,-b*f,h*f,g*f),n.restore()}drawFallback(){let e=this.ctx;if(!e)return;let{width:t,height:n,footPad:r,fallbackText:i,fallbackColor:a}=this.opts;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,t,n);let o=Math.min(t,n)*.28,s=t/2,c=n-r-o;e.fillStyle=`rgba(0,0,0,.18)`,e.beginPath(),e.ellipse(s,n-r,o*.9,o*.22,0,0,Math.PI*2),e.fill(),e.fillStyle=a,e.beginPath(),e.arc(s,c,o,0,Math.PI*2),e.fill(),e.lineWidth=4,e.strokeStyle=`#2b2118`,e.stroke(),e.fillStyle=`#fff8ea`,e.font=`bold ${Math.round(o*.9)}px "Microsoft JhengHei", sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(i,s,c+2)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.finish?.(),this.finish=null}},ff=[[],[{x:20,y:100,z:7,scale:1}],[{x:14,y:100,z:7,scale:1},{x:26,y:82,z:6,scale:.92}],[{x:9,y:100,z:7,scale:1},{x:18,y:84,z:6,scale:.92},{x:27,y:70,z:5,scale:.85}]],pf=[[],[{x:78,y:10,z:3,scale:1}],[{x:74,y:12,z:3,scale:1},{x:88,y:2,z:2,scale:.94}],[{x:72,y:14,z:3,scale:1},{x:83,y:6,z:2,scale:.95},{x:93,y:0,z:1,scale:.9}]],mf=[[],[{x:24,y:100,z:7,scale:1}],[{x:16,y:100,z:7,scale:1},{x:33,y:80,z:6,scale:.92}],[{x:12,y:100,z:7,scale:1},{x:27,y:82,z:6,scale:.92},{x:42,y:64,z:5,scale:.85}]],hf=[[],[{x:76,y:12,z:3,scale:1}],[{x:66,y:16,z:3,scale:1},{x:86,y:4,z:2,scale:.94}],[{x:52,y:18,z:3,scale:1},{x:72,y:8,z:2,scale:.95},{x:90,y:0,z:1,scale:.9}]];function gf(e,t,n){return(n?t===`hero`?ff:pf:t===`hero`?mf:hf)[Math.max(0,Math.min(3,e))].map(e=>({...e}))}function _f(e,t,n,r){if(n){let n=t*(r>=3?.42:.45),i=e*(r>=3?.23:.26);return Math.max(80,Math.round(Math.min(n,i)))}let i=t*(r>=3?.19:.22),a=e*(r>=3?.36:.44);return Math.max(64,Math.round(Math.min(i,a)))}var vf=.6;function yf(e,t,n,r,i=t/n>1.15){let a=1080*Math.max(t/1920,n/1080),o=(n-a)*.6+a*vf,s=Math.max(n*(i?.52:.56),o+n*.03),c=Math.max(s+20,Math.min(n*(i?.77:.84),r-24));return Math.round(s+(c-s)*Math.max(0,Math.min(100,e))/100)}var bf={qiuqiu:`#3d6fc4`,feifei:`#8e4fc0`,fengfeng:`#e07a2a`,dangdang:`#3b3b3b`},xf=[`str`,`vit`,`int`,`awa`,`tal`,`spd`,`lck`];function Sf(e,t={}){let n=p(`i`),r=p(`b`),i=p(`span`),a=p(`b.big-hp`),o=p(`span.pips`),s=p(`div.status-list`),c=p(`div.pc-extra`),l=g(m(e.id,e.portrait),{text:e.name.slice(0,1),face:!0});s.classList.add(`pc-status`);let u=p(`div.pcard`,{"data-hero":e.id,style:`--hc:${bf[e.id]??`#c9702a`}`},p(`div.pc-grid`,null,p(`div.pc-face`,null,p(`div.pc-hex`,null,l),p(`span.pc-lv`,null,String(e.level??1))),p(`div.pc-name.plate-name`,null,p(`span`,null,e.name)),s,p(`div.pc-pips`,null,o),a,c,p(`div.bar.hp`,null,r,n,i))),d={el:u,hpFill:n,hpLag:r,hpText:i,hpBig:a,focusEl:o,statusEl:s,extraEl:c};if(t.onClick&&(u.classList.add(`clickable`),u.addEventListener(`click`,t.onClick)),t.onFace)for(let e of u.querySelectorAll(`.pc-face, .pc-name`))e.classList.add(`pc-focus`),e.title=`點一下看他在哪`,e.addEventListener(`click`,e=>{e.stopPropagation(),t.onFace?.()});return d.opts=t,wf(d,e),d}var Cf=new WeakMap;function wf(e,t){let n=e.opts??{};e.el.classList.toggle(`active`,!!t.active&&!t.down),e.el.classList.toggle(`down`,!!t.down),Tf(e,t.hp,t.hpMax,!1),Ef(e,t.focus??0,t.focusMax??0),Df(e,t.statuses);let r=JSON.stringify([t.armor,t.resist,t.evasion,t.quick,t.gold,t.weapon,t.skills,t.xp,t.xpNext,t.stats]);if(Cf.get(e)===r)return;Cf.set(e,r);let i=e.extraEl;k(i);let a=(e,t,n)=>p(`span.shield.${e}`,{title:`${n} ${t}`},String(t));i.append(p(`div.pc-defs`,null,a(`armor`,t.armor??0,`護甲`),a(`resist`,t.resist??0,`魔抗`),t.evasion===void 0?null:a(`evade`,Math.round(t.evasion*100),`閃避 %`)));let o=p(`div.pc-quick`),s=t.quick??[];for(let e=0;e<10;e++){let t=s[e],r=t?p(`span.pc-slot.filled`,{title:`${t.name} ×${t.count}`},g([t.icon],{text:t.name.slice(0,1)}),t.count>1?p(`small`,null,String(t.count)):null):p(`span.pc-slot`);t&&n.onQuick&&(r.classList.add(`usable`),r.addEventListener(`click`,t=>{t.stopPropagation(),n.onQuick?.(e)})),o.append(r)}let c=p(`button.pc-bag`,{type:`button`,title:`背包與裝備`});if(n.onBag?c.addEventListener(`click`,e=>{e.stopPropagation(),n.onBag?.()}):c.setAttribute(`disabled`,``),i.append(o,p(`div.pc-side`,null,p(`span.pc-gold`,{title:`小魚乾`},p(`b`,null,String(t.gold??0)),g([`icon:gold`],{text:`魚`})),c,Of(t,n),t.skills?.length?p(`span.pc-skill.on`,{title:`招牌技能：${t.skills.join(`、`)}`},`技`):null)),t.xpNext){let e=Math.max(0,Math.min(100,(t.xp??0)/t.xpNext*100));i.append(p(`div.pc-xp`,null,p(`div.xpbar`,null,p(`i`,{style:`width:${e}%`})),p(`span`,null,`${t.xp??0}／${t.xpNext}`)))}if(t.stats){let e=p(`div.pc-stats`);for(let n of xf){let r=t.stats[n];r!==void 0&&e.append(p(`span.pc-stat`,{title:We[n],class:`s-${n}`},g([`icon:stat_${n}`],{text:We[n].slice(0,1)}),p(`b`,null,String(r))))}i.append(e)}}function Tf(e,t,n,r){let i=n>0?Math.max(0,Math.min(100,t/n*100)):0;e.hpFill.style.width=`${i}%`,r?requestAnimationFrame(()=>e.hpLag.style.width=`${i}%`):e.hpLag.style.width=`${i}%`,e.hpText.textContent=`${Math.max(0,t)}／${n}`,e.hpBig.textContent=String(Math.max(0,t)),e.el.classList.toggle(`low`,i<=30)}function Ef(e,t,n){k(e.focusEl);for(let r=0;r<n;r++)e.focusEl.append(p(`i`,{class:r<t?`on`:``}))}function Df(e,t){k(e.statusEl);for(let n of t)e.statusEl.append(Bf(n))}function Of(e,t){let n=p(`span.pc-weapon`,{class:e.weapon?`on`:``,title:e.weapon?`武器：${e.weapon.name}`:`沒拿武器`},e.weapon?g([e.weapon.icon],{text:e.weapon.name.slice(0,1)}):null);return t.onWeapon&&e.weapon&&(n.classList.add(`usable`),n.addEventListener(`click`,e=>{e.stopPropagation(),t.onWeapon?.()})),n}function kf(e){return e.swapped?`已換過武器`:`換武器（${Af(e)}）`}function Af(e){return(e.weapons??[]).filter(e=>!e.disabled).length}function jf(e){return!Af(e)||!!e.swapped}function Mf(e,t){return[p(`div.weapon-now`,null,`換武器不花這回合的行動（一回合換一次）；招牌招式一直都在。`,e.weapon?` 現在拿：${e.weapon.name}`:``),...(e.weapons??[]).map(e=>Nf(e,t))]}function Nf(e,t){return p(`button.weapon-card`,{type:`button`,"data-item":e.id,disabled:!!e.disabled,onclick:()=>{z.sfx(o.click),t(e.id)}},g([e.icon],{text:e.name.slice(0,1),cls:`icon-box rarity-${e.rarity??`common`}`}),p(`div.wc-text`,null,p(`b`,null,e.name),p(`div.wc-moves`,null,`招式：${e.moves.join(`、`)}`),e.effects.length||e.bonuses.length?p(`div.wc-fx`,null,...[...e.effects,...e.bonuses].map(e=>p(`span.fx-chip`,null,e))):null,e.disabled&&e.disabledReason?p(`div.wc-why`,null,e.disabledReason):null))}function Pf(e){return e.weapon?p(`div.weapon-line`,null,p(`span`,null,`武器：`),p(`span.wl-name`,null,e.weapon.name),...e.weapon.effects.map(e=>p(`span.fx-chip`,{title:e},e))):null}function Ff(e){return e.source===`weapon`?p(`span.move-src.weapon`,{title:`武器的招式：吃得到武器效果`},`武器`):e.source===`base`?p(`span.move-src.base`,{title:`招牌招式：換武器也一直都在`},`招牌`):null}var If={qiuqiu:`#e0a42a`,feifei:`#d36fa0`,dangdang:`#7a8a52`,fengfeng:`#4f7fd1`};function Lf(e,t=!1){return{id:e.heroId??`qiuqiu`,name:e.name,level:e.level,hp:e.hp,hpMax:e.hpMax,focus:e.focus,focusMax:e.focusMax,armor:e.armor,resist:e.resist,evasion:e.evasion,gold:e.gold,xp:e.xp,xpNext:e.xpNext,quick:e.quick,stats:e.stats,weapon:e.weapon,skills:e.skills,statuses:e.statuses,down:e.down,active:t}}var Rf={small:[175,185],medium:[180,210],large:[230,280]},zf=class{el;handlers;vm=null;bgEl;timelineEl;dayEl;subEl;partyEl;bannerEl;fieldEl;overEl;panelEl;overlayEl;units=new Map;resizeObs=null;landscape=!0;pendingRoller=null;lastActor=``;playing=!1;targeting=null;tab=`moves`;victory=null;panelTop0=0;pendingLoot=null;constructor(e,t={}){this.handlers=t,this.bgEl=p(`div.combat-bg`),this.timelineEl=p(`div.timeline`),this.dayEl=p(`div.cb-day`),this.subEl=p(`div.cb-sub`),this.partyEl=p(`div.party`),this.bannerEl=p(`div.combat-banner`),this.fieldEl=p(`div.field`),this.overEl=p(`div.field-over`),this.panelEl=p(`div.action-panel`),this.panelEl.addEventListener(`click`,e=>{!this.landscape&&e.target instanceof Element&&e.target.closest(`.cb-info`)&&!e.target.closest(`button`)&&this.el.classList.toggle(`info-full`)}),this.overlayEl=p(`div.combat-overlay`),this.el=p(`div.combat.ftk`,null,this.bgEl,p(`div.combat-top`,null,p(`div.cb-brand`,null,`為了師傅`),this.timelineEl,this.dayEl),this.subEl,p(`div.field-wrap`,null,this.fieldEl,this.overEl,this.bannerEl,this.panelEl),this.partyEl,this.overlayEl),e.append(this.el),typeof ResizeObserver<`u`&&(this.resizeObs=new ResizeObserver(()=>this.layout()),this.resizeObs.observe(this.fieldEl)),typeof MutationObserver<`u`&&new MutationObserver(()=>this.fitPanel()).observe(this.panelEl,{childList:!0})}layoutKey=``;setState(e){e.actor&&e.actor.uid!==this.lastActor&&(this.tab=`moves`),e.actor&&this.tab===`items`&&!e.actor.items.some(e=>e.count>0)&&(this.tab=`moves`),e.actor&&this.tab===`weapons`&&jf(e.actor)&&(this.tab=`moves`),this.lastActor=e.actor?.uid??this.lastActor,this.vm=e;let t=j(e.bg);this.bgEl.style.backgroundImage=t?`url("${t}")`:``,this.bgEl.classList.toggle(`no-art`,!t);let n=[...e.heroes,...e.monsters];for(let[e,t]of this.units){let r=n.find(t=>t.uid===e);(!r||Hf(r)!==Hf(t.vm))&&this.removeUnit(e)}for(let e of n){let t=this.units.get(e.uid)??this.makeUnit(e);this.updateUnit(t,e)}this.renderTimeline(),this.renderHud(),this.orderParty(),this.setBanner(e.banner);let r=[innerWidth,innerHeight,Wf(),this.subEl.textContent??``,...n.map(e=>`${e.uid}:${e.sprite}:${+!!e.boss}`)].join(`|`);r!==this.layoutKey&&(this.layoutKey=r,this.layout()),!this.playing&&!this.pendingRoller&&this.renderPanel()}resetPanel(){this.pendingRoller=null,this.playing||this.renderPanel()}get hasPendingRoll(){return!!this.pendingRoller}removeUnit(e){let t=this.units.get(e);t&&(t.sprite.dispose(),t.el.remove(),t.over.remove(),t.vm.side===`hero`&&t.plate.remove(),this.units.delete(e))}newBattle(){this.layoutKey=``;for(let e of[...this.units.keys()])this.removeUnit(e)}unitNames(){return[...this.units.values()].map(e=>e.plate.querySelector(`.plate-name`)?.textContent??``)}makeUnit(e){let t=e.side===`hero`,n=ae(e.sprite)?.size??`medium`,r=new df({width:300,height:300,fallbackText:e.name.slice(0,1),fallbackColor:t?If[e.heroId??``]??`#c9702a`:`#7b5ea7`,fitBox:t?[270,300]:Rf[n]??Rf.medium,faceLeft:!t,groundTrim:!t,poseScaleFromIdle:!t,footPad:t?6:2}),i=p(`i`),a=p(`b`),o=p(`span`),s=p(`b.big-hp`),c=p(`span.pips`),l=p(`div.status-list`),u=p(`div.unit-extra`),d,f;if(t)f=Sf(Lf(e),{onClick:()=>{this.targeting&&f?.el.classList.contains(`targetable`)&&this.targeting(e.uid)},onQuick:t=>this.useQuick(e.uid,t),onWeapon:()=>this.openSwap(e.uid)}),{hpFill:i,hpLag:a,hpText:o,hpBig:s,focusEl:c,statusEl:l}=f,d=f.el,d.dataset.uid=e.uid,this.partyEl.append(d);else{let t=p(`div.bar.hp`,null,a,i,o);d=p(`div.plate.mplate`,null,p(`span.mp-lv`,null,String(e.level??`?`)),p(`div.mp-face`,null,g([e.sprite],{text:e.name.slice(0,1),face:!0})),p(`div.mp-main`,null,p(`div.mp-col`,null,p(`div.plate-name`,null,p(`span`,null,e.name),e.level?p(`small`,null,`Lv${e.level}`):null),t),s),p(`div.mp-sub`,null,u,l))}let m=p(`div.floats`),h=p(`div.unit-body`,null,r.canvas),_=p(`div.unit`,{class:`${e.side}${e.boss?` boss`:``}`,"data-uid":e.uid},p(`div.unit-shadow`),h),v=p(`div.stun-ring`,{"aria-hidden":`true`},p(`i`,null,`★`),p(`i`,null,`★`),p(`i`,null,`★`)),y=p(`div.unit-over`,{class:`${e.side}${e.boss?` boss`:``}`,"data-uid":e.uid},v,m,t?null:d);t||d.addEventListener(`click`,()=>{this.targeting&&_.classList.contains(`targetable`)&&this.targeting(e.uid)}),this.overEl.append(y),_.addEventListener(`click`,()=>{this.targeting&&_.classList.contains(`targetable`)&&this.targeting(e.uid)}),this.fieldEl.append(_);let b={vm:e,el:_,body:h,plate:d,over:y,hpFill:i,hpLag:a,hpText:o,focusEl:c,statusEl:l,floats:m,sprite:r,hpBig:s,extraEl:u,card:f};return this.units.set(e.uid,b),t&&e.heroId?r.idle(`hero:${e.heroId}:idle`):e.sprite&&r.idle(Ce(e.sprite,`idle`)??e.sprite),e.down&&this.markDown(b,!1),b}updateUnit(e,t){e.vm=t,e.card&&wf(e.card,Lf(t,e.card.el.classList.contains(`active`))),this.renderExtra(e),this.setHp(e,t.hp,!1),t.side===`hero`&&this.setFocus(e,t.focus??0,t.focusMax??0),this.renderStatuses(e,t.statuses),t.down&&!e.el.classList.contains(`down`)&&this.markDown(e,!1),!t.down&&e.el.classList.contains(`down`)&&(e.el.classList.remove(`down`,`dead`),e.over.classList.remove(`down`,`dead`),e.plate.classList.remove(`down`),e.sprite.holdLast=!1,t.heroId&&e.sprite.idle(`hero:${t.heroId}:idle`))}setHp(e,t,n){let r=e.vm.hpMax>0?Math.max(0,Math.min(100,t/e.vm.hpMax*100)):0;e.hpFill.style.width=`${r}%`,n?requestAnimationFrame(()=>e.hpLag.style.width=`${r}%`):e.hpLag.style.width=`${r}%`,e.hpText.textContent=`${Math.max(0,t)}／${e.vm.hpMax}`,e.hpBig.textContent=String(Math.max(0,t)),e.plate.classList.toggle(`low`,r<=30),e.vm={...e.vm,hp:t}}renderExtra(e){let t=e.vm;if(t.side===`hero`)return;k(e.extraEl);let n=(e,t,n)=>t===void 0?null:p(`span.shield.${e}`,{title:`${n} ${t}`},String(t));e.extraEl.append(...[n(`armor`,t.armor,`護甲`),n(`resist`,t.resist,`魔抗`)].filter(e=>!!e))}openSwap(e){let t=this.vm?.actor;!t||t.uid!==e||this.playing||this.pendingRoller||jf(t)||(this.tab=`weapons`,this.renderPanel())}useQuick(e,t){let n=this.vm?.actor,r=this.units.get(e);if(!n||n.uid!==e||this.playing||this.pendingRoller||!r)return;let i=r.vm.quick?.[t],a=i?n.items.find(e=>e.name===i.name&&e.count>0&&!e.disabled):void 0;a&&this.chooseItem(a.id,!!a.needsTarget,a.targetSide??`monster`)}orderParty(){if(this.vm){for(let e of this.vm.heroes){let t=this.units.get(e.uid);t&&this.partyEl.append(t.plate)}this.partyEl.dataset.n=String(this.vm.heroes.length)}}setActive(e){this.units.forEach(t=>{t.el.classList.toggle(`active`,t.vm.uid===e),t.vm.side===`hero`&&t.plate.classList.toggle(`active`,t.vm.uid===e)})}renderHud(){let e=this.vm?.hud;if(k(this.dayEl),k(this.subEl),!e)return;e.day!==void 0&&this.dayEl.append(g([e.night?`icon:night`:`icon:day`],{text:e.night?`夜`:`日`}),p(`span`,null,`第 ${e.day} 天`));let t=p(`div.cb-chaos`,{title:`紫霧 ${e.chaos??0} 級`});for(let n=1;n<=3;n++)t.append(p(`span.cb-seal`,{class:n<=(e.chaos??0)?`on`:``}));let n=p(`div.cb-lives`,{title:`共用命數`});for(let t=0;t<Math.min(5,e.lives??0);t++)n.append(p(`span.cb-heart`));(e.lives??0)>5&&n.append(p(`b`,null,`×${e.lives}`)),this.subEl.append(t,p(`div.cb-place`,null,e.place||`戰鬥`),n)}setFocus(e,t,n){k(e.focusEl);for(let r=0;r<n;r++)e.focusEl.append(p(`i`,{class:r<t?`on`:``}));e.vm={...e.vm,focus:t,focusMax:n}}renderStatuses(e,t){k(e.statusEl);for(let n of t)e.statusEl.append(Bf(n));e.vm={...e.vm,statuses:t};let n=t.some(e=>e.id===`stun`);e.over.classList.toggle(`stunned`,n),n&&e.over.style.setProperty(`--head`,String(1-(e.sprite.headFrac??.15)))}layout(){if(!this.vm)return;let e=this.fieldEl.clientWidth||800,t=this.fieldEl.clientHeight||400,n=this.el.clientWidth||e,r=this.el.clientHeight||t;this.landscape=n/r>1.15,this.el.classList.toggle(`is-portrait`,!this.landscape);let i=this.el.getBoundingClientRect(),a=this.fieldEl.getBoundingClientRect().top-i.top,o=this.partyEl.getBoundingClientRect().top-i.top||r*.81,s=this.subEl.getBoundingClientRect(),c=s.height?s.bottom-i.top-a+8:0;this.overEl.style.setProperty(`--plate-y`,`${Math.round(Math.max(30,r*(this.landscape?.095:.075)-a+6,c))}px`);let l=Math.max(this.vm.heroes.length,this.vm.monsters.length),u=this.vm.monsters.length,d=Wf();this.overEl.style.setProperty(`--plate-w`,`${Math.round(Math.max(170,Math.min(320*d,(e-40)/Math.max(1,u)-24)))}px`),this.panelEl.style.setProperty(`--panel-top`,`${Math.round(r*.4-a)}px`),this.panelTop0=Math.round(r*.4-a);let f=Math.floor((e-12)/Math.max(1,u))-6;this.overEl.style.setProperty(`--plate-w-p`,`${f}px`);let p=parseFloat(this.overEl.style.getPropertyValue(`--plate-y`))||40;this.panelEl.style.setProperty(`--panel-top-p`,`${Math.round(p+62)}px`);let m=(t,i)=>{let s=gf(t.length,i,this.landscape),c=_f(e,r,this.landscape,l),u=(e,t)=>c*t.scale*(i===`monster`?this.landscape?.95:.9:1)*(e.boss?1.2:1),d=1;if(i===`monster`&&t.length){let n=t.map((e,t)=>u(e,s[t]??{scale:1})*((Rf[ae(e.sprite)?.size??`medium`]??Rf.medium)[0]/300)/2);for(let r=0;r+1<t.length;r++){let t=((s[r+1]?.x??0)-(s[r]?.x??0))/100*e,i=n[r]+n[r+1];i>0&&t>0&&(d=Math.min(d,t/i))}let r=t.length-1,i=e-(s[r]?.x??0)/100*e-6;n[r]>0&&(d=Math.min(d,i/n[r])),d=Math.max(.65,Math.min(1,d))}t.forEach((t,c)=>{let l=this.units.get(t.uid),p=s[c];if(!l||!p)return;let m=Math.round(u(t,p)*d),h=yf(p.y,n,r,o,this.landscape)-a;for(let t of[l.el,l.over])t.style.left=`${p.x}%`,t.style.top=`${h}px`,t.style.setProperty(`--sz`,`${m}px`),t.style.setProperty(`--foot`,`${h}px`),t.classList.toggle(`edge-l`,p.x<20),t.classList.toggle(`edge-r`,p.x>80),t.style.setProperty(`--plate-dx`,!this.landscape&&i===`monster`?`${Math.round(9+c*(f+6)+f/2-p.x/100*e)}px`:`0px`);l.el.style.zIndex=String(10+p.z)})};m(this.vm.heroes,`hero`),m(this.vm.monsters,`monster`),this.landscape&&this.spreadPlates(e),this.fitPanel(),this.fitVictory()}topLimit(e){let t=0;for(let n of[this.el.querySelector(`.combat-top`),this.subEl]){let r=n?.getBoundingClientRect();r&&r.height&&(t=Math.max(t,r.bottom-e.top))}return t}fitPanel(){let e=this.panelEl;if(e.style.removeProperty(`--uz`),!this.landscape||!this.panelTop0||(e.style.setProperty(`--panel-top`,`${this.panelTop0}px`),!e.firstElementChild))return;let t=this.fieldEl.getBoundingClientRect(),n=this.partyEl.getBoundingClientRect();if(!n.height)return;let r=Wf(),i=50*r,a=n.top-t.top-10,o=this.topLimit(t)+10,s=e.offsetHeight+i;if(this.panelTop0+s<=a)return;if(o+s<=a){e.style.setProperty(`--panel-top`,`${Math.round(a-s)}px`);return}let c=Math.max(.4,(a-o)/s);e.style.setProperty(`--uz`,String(Math.floor(r*c*1e3)/1e3)),e.style.setProperty(`--panel-top`,`${Math.round(o)}px`)}fitVictory(){if(!this.victory?.el.isConnected)return;let e=this.overlayEl.getBoundingClientRect(),t=this.partyEl.getBoundingClientRect(),n=this.topLimit(e)+6,r=t.height&&t.top-e.top>n+120?t.top-e.top-6:e.height-6;this.victory.fit(n,r)}lootUsed(e,t,n,r){let i=[...this.units.values()].find(t=>t.vm.heroId===e);i&&n>0&&(z.sfx(o.heal),A(i.body,`heal-glow`),this.float(i,`+${n}`,`heal`),r!==null&&this.setHp(i,r,!0)),this.victory?.note(t),this.fitVictory()}spreadPlates(e){let t=(this.vm?.monsters??[]).map(e=>this.units.get(e.uid)?.over).filter(e=>!!e).map(t=>({over:t,plate:t.querySelector(`.plate.mplate`),x:parseFloat(t.style.left)/100*e})).filter(e=>e.plate&&Number.isFinite(e.x)).sort((e,t)=>e.x-t.x);if(!t.length)return;let n=Math.max(...t.map(e=>e.plate.getBoundingClientRect().width||150)),r=n+18,i=n/2+8,a=e-n/2-8,o=t.map(e=>e.x);for(let e=1;e<o.length;e++)o[e]=Math.max(o[e],o[e-1]+r);let s=(t.reduce((e,t)=>e+t.x,0)-o.reduce((e,t)=>e+t,0))/o.length,c=o.map(e=>e+s),l=c[c.length-1]-a;l>0&&(c=c.map(e=>e-l));let u=i-c[0];u>0&&(c=c.map(e=>e+u)),t.forEach((e,t)=>e.over.style.setProperty(`--plate-dx`,`${Math.round(c[t]-e.x)}px`))}renderTimeline(){let e=this.vm;e&&(k(this.timelineEl),this.timelineEl.append(p(`span.timeline-label`,null,`順序`)),e.timeline.forEach((t,n)=>{let r=[...e.heroes,...e.monsters].find(e=>e.uid===t);if(!r)return;let i=r.side===`hero`&&r.heroId?g(m(r.heroId),{text:r.name.slice(0,1),face:!0}):g([r.sprite],{text:r.name.slice(0,1),face:!0});this.timelineEl.append(p(`div.tl-item`,{class:`${r.side}${n===0?` now`:``}${r.down?` down`:``}`,title:r.name},i,n===0?p(`span.tl-now`,null,`行動`):null))}))}setBanner(e){this.bannerEl.textContent=e??``,this.bannerEl.classList.toggle(`show`,!!e),e&&A(this.bannerEl,`show`)}renderPanel(){k(this.panelEl),this.pendingRoller=null,this.panelEl.classList.remove(`rolling`);let e=this.vm;if(!e)return;let t=e.actor;if(!t){let t=e.timeline[0],n=t?this.units.get(t):void 0;this.panelEl.classList.add(`waiting`),this.panelEl.append(p(`div.panel-wait`,null,n?`${n.vm.name} 行動中……`:`……`));return}this.panelEl.classList.remove(`waiting`);let n=this.units.get(t.uid);this.setActive(t.uid);let i=p(`div.action-tabs`,null,r(`招式`,()=>(this.tab=`moves`,this.renderPanel()),`small${this.tab===`moves`?` on`:``}`),r(`道具（${t.items.reduce((e,t)=>e+t.count,0)}）`,()=>(this.tab=`items`,this.renderPanel()),`small${this.tab===`items`?` on`:``}`,t.items.length===0),r(kf(t),()=>(this.tab=`weapons`,this.renderPanel()),`small${this.tab===`weapons`?` on`:``}`,jf(t)),r(`逃跑`,()=>void this.chooseFlee(),`small danger`,!t.canFlee)),a=p(`div.actor-name`,null,p(`b`,null,n?.vm.name??``),` 的回合`),o=p(`div.move-list`),s=p(`div.cb-tokens`),c=p(`div.cb-info`),l=n?.vm.focus??0;if(this.tab===`moves`){for(let e of qe(t,e=>void this.handlers.onSkill?.({skillId:e}))){let n=t.skills?.find(t=>e.dataset.skill===t.id),r=()=>{k(s),k(c),n&&c.append(p(`div.cb-info-title`,null,n.name),p(`div.cb-info-perfect`,null,`${n.trigger}（${n.chance}）`),p(`div.cb-info-desc`,null,n.desc)),n?.disabledReason&&c.append(p(`div.cb-info-tag`,null,n.disabledReason))};e.addEventListener(`mouseenter`,r),e.addEventListener(`focus`,r),o.append(e)}let e=e=>this.showMoveInfo(s,c,e,l,t.weapon);for(let n of t.moves)o.append(this.moveCard(n,l,e));let n=t.moves.find(e=>!e.disabled&&(e.focusCost??0)<=l)??t.moves[0];n&&e(n)}else if(this.tab===`weapons`){o.append(...Mf(t,e=>(this.tab=`moves`,void this.handlers.onSwap?.({itemId:e}))));let e=Pf(t);c.append(p(`div.cb-info-title`,null,`換武器`)),e&&c.append(e)}else{for(let e of t.items){let t=p(`button.item-card`,{type:`button`,"data-item":e.id,disabled:e.disabled||e.count<=0,"aria-label":`${e.name}：${e.desc??``}`,onclick:()=>void this.chooseItem(e.id,!!e.needsTarget,e.targetSide??`monster`)},g([e.icon],{text:e.name.slice(0,1),cls:`icon-box`}),p(`div.item-card-text`,null,p(`b`,null,`${e.name} ×${e.count}`),p(`small`,null,e.desc??``))),n=()=>{k(c),c.append(p(`div.cb-info-title`,null,e.name),p(`div.cb-info-desc`,null,e.desc??``),p(`div.cb-info-tag`,null,`剩 ${e.count} 個`))};t.addEventListener(`mouseenter`,n),t.addEventListener(`focus`,n),o.append(t)}let e=t.items[0];e&&c.append(p(`div.cb-info-title`,null,e.name),p(`div.cb-info-desc`,null,e.desc??``))}this.panelEl.append(p(`div.action-head`,null,a,i),s,o,c)}moveCard(e,t,n){let r=e.focusCost??0,a=r>t,o=e.disabled&&e.disabledReason?e.disabledReason:a?`專注不夠`:``,s=p(`button.move-card`,{type:`button`,disabled:e.disabled||a,"aria-label":`${e.name}：${o||e.desc||``}`,style:`--stat:${i[e.stat]}`,"data-move":e.id},p(`span.move-icon`,null,g([`icon:stat_${e.stat}`],{text:We[e.stat].slice(0,1)})),p(`b.move-name`,null,e.name),r?p(`span.focus-cost`,null,p(`i.fc-word`,null,`專注 `),String(r)):null,Ff(e),o?p(`div.move-why`,null,o):null);return s.addEventListener(`mouseenter`,()=>n(e)),s.addEventListener(`focus`,()=>n(e)),s.addEventListener(`click`,()=>void this.chooseMove(e)),s}showMoveInfo(e,t,n,r,a){k(e);for(let t=0;t<n.slots;t++)e.append(p(`span.cb-token`,{style:`--stat:${i[n.stat]}`},g([`icon:stat_${n.stat}`],{text:``}),p(`b`,null,`${n.chance}%`)));k(t),t.append(...Uf(n,r,a))}pickTarget(e){let t=[...this.units.values()].filter(t=>t.vm.side===e&&!t.vm.down);return t.length===1?Promise.resolve(t[0].vm.uid):(t.forEach(e=>{e.el.classList.add(`targetable`),e.over.classList.add(`targetable`),e.vm.side===`hero`&&e.plate.classList.add(`targetable`)}),k(this.panelEl),this.panelEl.append(p(`div.panel-wait`,null,e===`monster`?`點一隻怪物當目標`:`點一位隊友`,r(`返回`,()=>this.targeting?.(null),`small ghost`))),new Promise(e=>{this.targeting=n=>{this.targeting=null,t.forEach(e=>{e.el.classList.remove(`targetable`),e.over.classList.remove(`targetable`),e.plate.classList.remove(`targetable`)}),e(n)}}))}async chooseMove(e){let t=this.vm;if(!t?.actor)return;z.sfx(o.click);let n;if(e.needsTarget){let e=await this.pickTarget(`monster`);if(!e)return this.renderPanel();n=e}let r=this.units.get(t.actor.uid),i=Math.max(0,(r?.vm.focus??0)-(e.focusCost??0)),a=new Zd({title:e.name,stat:e.stat,chance:e.chance,slots:e.slots,need:0,maxLock:Math.min(i,e.slots)},{allowLock:!0,onCancel:()=>this.renderPanel(),who:this.rollWho(t.actor.uid)});k(this.panelEl),this.panelEl.classList.add(`rolling`),this.panelEl.append(p(`div.roll-host`,null,a.el),p(`div.cb-info`,null,...Uf(e,r?.vm.focus??0,t.actor.weapon)));let s=await a.waitForRoll();this.pendingRoller={uid:t.actor.uid,roller:a},a.el.classList.add(`waiting`),await this.handlers.onMove?.({moveId:e.id,target:n,locked:s})}async chooseItem(e,t,n=`monster`){let r;if(t){let e=await this.pickTarget(n);if(!e)return this.renderPanel();r=e}await this.handlers.onItem?.({itemId:e,target:r})}async chooseFlee(){let e=this.vm?.actor;if(!e)return;let t=e.fleeCheck??{chance:50,slots:3,need:2},n=this.units.get(e.uid),r=new Zd({title:`逃跑`,stat:`spd`,chance:t.chance,slots:t.slots,need:t.need,maxLock:Math.min(n?.vm.focus??0,t.slots)},{allowLock:!0,onCancel:()=>this.renderPanel(),rollLabel:`逃！`,who:this.rollWho(e.uid)});k(this.panelEl),this.panelEl.classList.add(`rolling`),this.panelEl.append(p(`div.roll-host`,null,r.el),p(`div.cb-info`,null,p(`div.cb-info-title`,null,`逃跑`),p(`div.cb-info-desc`,null,`速度 ${t.slots} 格、至少 ${t.need} 格成功就逃走（全隊一起）`),p(`div.cb-info-nums`,null,p(`div`,null,p(`b`,null,`${t.chance}%`),p(`small`,null,`每格成功`)))));let i=await r.waitForRoll();this.pendingRoller={uid:e.uid,roller:r},r.el.classList.add(`waiting`),await this.handlers.onFlee?.({locked:i})}async play(e){this.playing=!0;try{for(let t of e)await this.playOne(t)}finally{this.playing=!1,this.pendingRoller=null}this.overlayEl.childElementCount||this.renderPanel()}async playOne(e){switch(e.type){case`turn`:if(this.setActive(e.uid),this.vm){let t=this.vm.timeline.filter(t=>t!==e.uid);this.vm={...this.vm,timeline:[e.uid,...t]},this.renderTimeline()}z.sfx(o.turn),await M(250);return;case`roll`:{let t;this.pendingRoller&&this.pendingRoller.uid===e.uid?(t=this.pendingRoller.roller,t.el.classList.remove(`waiting`)):(t=new Zd(e.check,{allowLock:!1,hideRollButton:!0,who:this.rollWho(e.uid)}),k(this.panelEl),this.panelEl.classList.remove(`waiting`),this.panelEl.classList.add(`rolling`),this.panelEl.append(p(`div.roll-host`,null,t.el))),this.pendingRoller=null,(await t.reveal(e.result)).perfect&&this.flashScreen(),await M(250);return}case`act`:{let t=this.units.get(e.uid);if(!t)return;e.moveName&&this.setBanner(e.moveName);let n=t.vm.side===`hero`;if(A(t.el,n?`lunge-right`:`lunge-left`),n&&t.vm.heroId){let n=`hero:${t.vm.heroId}:${e.anim}`,r=ae(n),i=r?.frames?ef(r.frames.map(e=>e.duration))*1e3:500;t.sprite.play(n);let a=Ve(n);await M(Math.min(1e3,Math.max(220,a??i*.5)))}else{let e=Ce(t.vm.sprite,`attack`);e&&t.sprite.play(e);let n=e?Ve(e):null;await M(Math.min(900,Math.max(300,n??380)))}return}case`damage`:{let t=this.units.get(e.uid);if(!t)return;if(A(t.body,`hit-flash`),A(t.el,e.crit||e.perfect?`shake-big`:`shake`),t.vm.side===`hero`&&t.vm.heroId)t.sprite.play(`hero:${t.vm.heroId}:hurt`),z.sfx(o.heroHurt);else{let n=Ce(t.vm.sprite,`hurt`);n&&t.sprite.play(n),z.sfx(e.crit||e.perfect?o.hitHeavy:o.hit)}this.float(t,`-${e.amount}`,e.crit?`crit`:e.perfect?`perfect`:`dmg`,e.crit?`暴擊！`:e.perfect?`完美！`:void 0),this.setHp(t,e.hpAfter,!0),await M(e.crit?520:380);return}case`heal`:{let t=this.units.get(e.uid);if(!t)return;z.sfx(o.heal),A(t.body,`heal-glow`),this.float(t,`+${e.amount}`,`heal`),this.setHp(t,e.hpAfter,!0),await M(380);return}case`skill`:{let t=this.units.get(e.uid),n=t?.over??this.overEl;await M(le(n,{heroId:t?.vm.heroId,name:e.name,text:e.text}));return}case`miss`:{let t=this.units.get(e.uid);if(!t)return;z.sfx(e.text===`擋下！`?o.block:o.dodge),A(t.el,t.vm.side===`hero`?`dodge-left`:`dodge-right`),this.float(t,e.text??`閃避`,`miss`),await M(380);return}case`status`:{let t=this.units.get(e.uid);if(!t)return;let n=e.removed?t.vm.statuses.filter(t=>t.id!==e.status.id):[...t.vm.statuses.filter(t=>t.id!==e.status.id),e.status];this.renderStatuses(t,n),e.removed||(z.sfx(e.status.bad?o.debuff:o.buff),this.float(t,e.status.label,e.status.bad?`debuff`:`buff`)),await M(300);return}case`focus`:{let t=this.units.get(e.uid);t&&this.setFocus(t,e.focusAfter,t.vm.focusMax??0);return}case`down`:{let t=this.units.get(e.uid);if(!t)return;this.markDown(t,!0),await M(700);return}case`say`:this.setBanner(e.text),await M(900);return;case`flee`:this.setBanner(e.success?`逃跑成功！`:`逃跑失敗……`),e.success&&this.units.forEach(e=>e.vm.side===`hero`&&A(e.el,`run-away`)),await M(800);return;case`victory`:this.units.forEach(e=>{e.vm.side===`hero`&&e.vm.heroId&&!e.vm.down&&(e.sprite.holdLast=!0,e.sprite.play(`hero:${e.vm.heroId}:win`))}),z.sfx(o.victory),await M(500),this.showResult(!0,e.rewards);return;case`defeat`:z.sfx(o.defeat),await M(500),this.showResult(!1);return;case`wait`:await M(e.ms);return}}markDown(e,t){if(e.vm={...e.vm,down:!0},e.el.classList.add(`down`),e.over.classList.add(`down`),e.plate.classList.add(`down`),e.vm.side===`hero`&&e.vm.heroId)e.sprite.holdLast=!0,e.sprite.play(`hero:${e.vm.heroId}:defeat`);else{let n=Ce(e.vm.sprite,`down`);n&&(e.sprite.holdLast=!0,e.sprite.play(n)),t&&z.sfx(o.enemyDown),e.el.classList.add(`dead`),e.over.classList.add(`dead`)}}float(e,t,n,r){let i=p(`div.float`,{class:n},r?p(`small`,null,r):null,t);i.style.setProperty(`--fx`,`${Math.round(Math.random()*30-15)}px`),e.floats.append(i),window.setTimeout(()=>i.remove(),1400)}flashScreen(){let e=p(`div.screen-flash`);this.el.append(e),window.setTimeout(()=>e.remove(),500)}showResult(e,t){if(k(this.panelEl),k(this.overlayEl),e){this.victory=new _s(t,{onChoice:(e,t)=>void this.handlers.onLoot?.(e,t),onContinue:()=>this.handlers.onContinue?.(!0)}),this.victory.setLoot(this.pendingLoot),this.overlayEl.append(this.victory.el),this.overlayEl.classList.add(`show`),this.fitVictory(),this.el.classList.add(`is-victory`),t?.xp&&this.units.forEach(e=>e.vm.side===`hero`&&!e.vm.down&&this.float(e,`+${t.xp} 經驗`,`xp`));return}let n=p(`div.result-box.panel`,{class:e?`win`:`lose`},p(`div.result-title`,null,e?`勝利！`:`戰敗……`));if(e&&t){let e=p(`b`,null,`0`),r=p(`b`,null,`0`);if(n.append(p(`div.result-row`,null,p(`span`,null,`經驗（每隻）`),e),p(`div.result-row`,null,p(`span`,null,`小魚乾（合計）`),r)),t.perHero?.length&&n.append(p(`div.result-share`,null,t.perHero.map(e=>`${e.name} +${e.gold}`).join(`　`))),Vf(e,t.xp),Vf(r,t.gold),t.loot.length){let e=p(`div.result-loot`);t.loot.forEach((t,n)=>{let r=p(`div.loot-item`,{style:`animation-delay:${300+n*180}ms`},g([t.icon],{text:t.name.slice(0,1),cls:`icon-box rarity-${t.rarity??`common`}`}),p(`span`,null,t.name));e.append(r)}),n.append(p(`div.result-sub`,null,`掉落`),e)}t.levelUps?.length&&n.append(p(`div.result-levelup`,null,`${t.levelUps.join(`、`)} 升級了！`))}n.append(p(`div.result-actions`,null,r(`繼續`,()=>this.handlers.onContinue?.(e),`primary big`))),this.overlayEl.append(n),this.overlayEl.classList.add(`show`)}rollWho(e){let t=this.units.get(e);return t?t.vm.side===`hero`&&t.vm.heroId?{name:t.vm.name,portrait:[`portrait:${t.vm.heroId}`,`hero:${t.vm.heroId}:idle`]}:{name:t.vm.name,portrait:t.vm.sprite,monster:!0}:null}setLoot(e){this.pendingLoot=e,this.victory?.setLoot(e),this.fitVictory()}clearOverlay(){k(this.overlayEl),this.overlayEl.classList.remove(`show`),this.el.classList.remove(`is-victory`),this.victory=null,this.pendingLoot=null}dispose(){this.resizeObs?.disconnect(),this.units.forEach(e=>e.sprite.dispose()),this.units.clear(),this.el.remove()}};function Bf(e){return p(`span.status`,{class:e.bad?`bad`:``,title:e.label},e.label,e.turns?p(`small`,null,String(e.turns)):null)}function Vf(e,t){let n=performance.now(),r=()=>{let i=Math.min(1,(performance.now()-n)/700);e.textContent=`+${Math.round(t*(1-(1-i)**3))}`,i<1&&requestAnimationFrame(r)};r()}function Hf(e){return[e.side,e.heroId??``,e.sprite??``,e.name,e.level??``,e.boss?`B`:``].join(`|`)}function Uf(e,t,n){let r=Rd(Fd(e.chance,e.slots)),i=e.focusCost??0;return[p(`div.cb-info-title`,null,e.name),p(`div.cb-info-perfect`,null,`完美（${r}）＝${e.perfectText??`全中，威力最大`}`),e.onHitText?p(`div.cb-info-desc.cb-info-onhit`,null,e.onHitText):null,p(`div.cb-info-nums`,null,p(`div`,null,p(`b`,null,e.power>0?String(e.power):`—`),p(`small`,null,e.power>0?e.dmgType===`magic`?`魔法傷害`:`物理傷害`:`輔助`)),p(`div`,null,p(`b`,null,`${e.chance}%`),p(`small`,null,`每格命中・${e.slots} 格`))),e.source===`weapon`&&n?.effects.length?p(`div.cb-info-weapon`,null,p(`b`,null,`${n.name}：`),n.effects.join(`、`)):e.source===`base`?p(`div.cb-info-weapon.base`,null,`招牌招式：換武器也一直都在（不吃武器效果）`):null,p(`div.cb-info-foot`,null,p(`span.cb-info-tag`,null,e.needsTarget?`單體`:`全體／自己`),i?p(`span.cb-info-tag.focus`,null,`花專注 ${i}`):null,p(`span.cb-info-hint`,null,t>0?`用專注：擲前可鎖格（目前 ${t} 點）`:`專注用完了，不能鎖格`))].filter(e=>!!e)}function Wf(){if(typeof document>`u`)return 1;let e=document.documentElement,t=parseFloat(e.style.getPropertyValue(`--ui-zoom`)||getComputedStyle(e).getPropertyValue(`--ui-zoom`));return Number.isFinite(t)&&t>0?t:1}function Gf(e){let t=e.some(e=>e.who&&!e.hero),n={left:null,right:null},r=new Map,i=new Map,a=[];return e.forEach((e,o)=>{if(!e.who){a.push({left:n.left,right:n.right,lit:null});return}r.set(e.who,e.hero);let s=n.left===e.who?`left`:n.right===e.who?`right`:null;if(!s){let a=e.hero&&t?[`left`,`right`]:[`right`,`left`];if(s=a.find(e=>n[e]===null)??null,!s){let t=a;if(e.hero){let e=a.filter(e=>r.get(n[e])===!0);e.length&&(t=e)}s=t.reduce((e,t)=>(i.get(n[t])??-1)<(i.get(n[e])??-1)?t:e)}n[s]=e.who}i.set(e.who,o),a.push({left:n.left,right:n.right,lit:s})}),a}function Kf(e,t){return e===`left`?!t:t}function qf(e,t){return Math.floor(e*1.1/Math.max(1,t||1))}var Jf=e=>`cg:${e}`,Yf=e=>`assets/story/cg/${e}.webp`;function Xf(e,t){return e.map(e=>{let n=t.keyUrl(Jf(e.id));return{from:e.from,urls:[n??t.pathUrl(Yf(e.id))]}})}function Zf(e,t){let n=e.length;for(let r=0;r<n;r++){let i=(Math.max(0,t)+r)%n;if(e[i]===`wait`)return i}return-1}function Qf(e,t){for(let n=Math.min(t,e.length-1);n>=0;n--)if(e[n]===`ok`)return n;return-1}var $f={intro_prologue:`cg_prologue_letter`,q1_1_after:`cg_ninja_chief_smoke_town`,boss_chaos_leader_intro:`cg_lamp_master`,boss_chaos_leader_defeat:`cg_lamp_master_kneels`,dungeon_dg_q1_mines_boss_intro:`cg_armadillo_king`,q1_4_after:`cg_miners_return`,q2_1_after:`cg_queen_throne_hall`,boss_mind_lord_intro:`cg_white_fox`,boss_lich_intro:`cg_empty_armor`,boss_lich_defeat:`cg_armor_kneels`,boss_acid_jelly_intro:`cg_plum_jar`,q2_5_before:`cg_queen_plum`,boss_maze_intro:`cg_stone_lion`,q2_5_after:`cg_silver_key`,q3_1_after:`cg_nekomata_well`,boss_demon_a_intro:`cg_red_oni_furnace`,boss_demon_b_intro:`cg_blue_oni_furnace`,boss_temple_intro:`cg_iron_arhat`,q3_5_before:`cg_port_farewell`,dungeon_dg_q3_final_enter:`cg_lonely_lighthouse`,boss_final_intro:`cg_mist_lord`,boss_final_defeat:`cg_lamp_relit`,ending_victory:`cg_dock_return`,ending_home_qiuqiu:`cg_home_qiuqiu`,ending_home_feifei:`cg_home_feifei`,ending_home_dangdang:`cg_home_dangdang`,ending_home_fengfeng:`cg_home_fengfeng`,ending_final:`cg_village_lights`};function ep(e){return $f[e]}var tp={intro_prologue:[[1,`cg_intro_village`],[2,`cg_intro_practice`],[3,`cg_prologue_letter`],[6,`cg_intro_window`],[8,`cg_intro_feifei_reads`],[9,`cg_intro_king_seal`],[10,`cg_intro_wisp`],[11,`cg_intro_queen_letter`],[12,`cg_intro_smoke_town_hint`],[13,`cg_intro_memory_tower`],[15,`cg_intro_hat_on`],[17,`cg_intro_purple_eyes`],[20,`cg_intro_we_go`],[21,`cg_intro_hat_back`],[23,`cg_intro_hat_peg`],[24,`cg_intro_who_stays`]],intro_stay_qiuqiu:[[1,`cg_intro_stay_qiuqiu`],[4,`cg_stay_qiuqiu_guard`]],intro_stay_feifei:[[1,`cg_intro_stay_feifei`],[4,`cg_stay_feifei_pot`]],intro_stay_dangdang:[[1,`cg_intro_stay_dangdang`],[5,`cg_stay_dangdang_pot`]],intro_stay_fengfeng:[[1,`cg_intro_stay_fengfeng`],[4,`cg_stay_fengfeng_map`]],intro_depart:[[1,`cg_intro_depart_gate`],[5,`cg_intro_depart_road`],[6,`cg_intro_depart_lookback`]],q1_1_before:[[1,`cg_q11_castle_gate`],[2,`cg_q11_guard_seal`],[6,`cg_q11_notice_board`]],q1_1_after:[[1,`cg_ninja_chief_smoke_town`],[5,`cg_ninja_clan`],[6,`cg_q11_purple_lanterns`],[10,`cg_q11_hungry_farms`]],q1_2_after:[[1,`cg_q12_lamp_out`],[2,`cg_q12_note`]],q1_3_after:[[1,`cg_q13_lanterns_down`],[2,`cg_q13_ledger`]],q1_4_before:[[1,`cg_q14_kid_waits`]],dungeon_dg_q1_mines_boss_defeat:[[1,`cg_mines_freed`]],q1_5_after:[[1,`cg_q15_cart`],[4,`cg_q15_mist_voices`],[5,`cg_q15_cart`],[7,`cg_q15_youth_cries`]],q2_1_before:[[1,`cg_q21_plains`],[3,`cg_q21_mist_village`]],q2_1_after:[[1,`cg_queen_throne_hall`],[4,`cg_q21_river_duel`],[5,`cg_queen_throne_hall`],[9,`cg_q21_key_split`],[12,`cg_q21_three_places`],[15,`cg_q21_guards_leave`],[16,`cg_queen_throne_hall`]],boss_mind_lord_defeat:[[1,`cg_q22_fox_awake`],[4,`cg_fox_last`]],boss_lich_defeat:[[1,`cg_armor_kneels`],[3,`cg_lich_queen_grave`],[4,`cg_armor_kneels`],[6,`cg_lich_rest`]],q2_5_after:[[1,`cg_silver_key`],[2,`cg_q25_red_sky`],[4,`cg_q25_sandy_letter`],[7,`cg_q25_nekomata_writes`]],q3_1_before:[[1,`cg_q31_desert`],[3,`cg_q31_camp`]],q3_1_after:[[1,`cg_nekomata_well`],[5,`cg_oni_brothers_winter`],[6,`cg_q25_red_sky`],[8,`cg_nekomata_well`],[9,`cg_q31_keeper_lamp`],[10,`cg_q31_storm`],[11,`cg_q31_lamp_dies`],[12,`cg_nekomata_well`]],boss_demon_a_defeat:[[1,`cg_red_oni_awake`],[3,`cg_red_oni_brother`],[4,`cg_red_oni_awake`]],boss_demon_b_defeat:[[1,`cg_blue_oni_awake`]],q3_4_after:[[1,`cg_q34_abbot_bows`],[3,`cg_abbot_prays`]],q3_5_before:[[1,`cg_port_farewell`],[3,`cg_nekomata_warns`],[4,`cg_port_farewell`],[9,`cg_q35_sail`]],boss_final_defeat:[[1,`cg_final_old_cat`],[3,`cg_lamp_relit`],[9,`cg_final_thanks`],[10,`cg_final_light_farewell`]],ending_victory:[[1,`cg_ending_calm_sea`],[2,`cg_dock_return`],[4,`cg_queen_dock_thanks`],[6,`cg_dock_return`]],ending_home_loss:[[1,`cg_home_loss`],[3,`cg_loss_lamp_high`]],ending_defeat:[[1,`cg_defeat_lamp`],[3,`cg_defeat_wait`]],dungeon_dg_q1_mines_enter:[[1,`cg_mines_enter`]],dungeon_dg_q2_crypt_enter:[[1,`cg_crypt_enter`]],dungeon_dg_q2_cellar_enter:[[1,`cg_cellar_enter`]],dungeon_dg_q2_maze_enter:[[1,`cg_maze_enter`]],dungeon_dg_q3_cave_a_enter:[[1,`cg_cave_a_enter`]],dungeon_dg_q3_cave_b_enter:[[1,`cg_cave_b_enter`]],dungeon_dg_q3_temple_enter:[[1,`cg_temple_enter`]],dungeon_dg_q3_final_enter:[[1,`cg_lonely_lighthouse`],[2,`cg_final_voices`],[7,`cg_lonely_lighthouse`]],q1_4_after:[[1,`cg_miners_return`],[5,`cg_q14_chimneys`],[6,`cg_q14_ninja_praise`]],q1_5_before:[[1,`cg_q15_aunt_asks`]],q2_2_after:[[1,`cg_q22_going_home`]],q2_3_after:[[1,`cg_q23_incense`]],q2_4_after:[[1,`cg_q24_crack`]],q3_2_after:[[1,`cg_q32_red_oni_waves`]],q3_3_after:[[1,`cg_q33_blue_oni_bows`]],boss_chaos_leader_intro:[[1,`cg_lamp_master`],[3,`cg_leader_memory`],[4,`cg_lamp_master`],[8,`cg_charge_lamp_master`]],boss_lich_intro:[[1,`cg_empty_armor`],[3,`cg_lich_promise`],[4,`cg_empty_armor`],[8,`cg_charge_lich`]],boss_acid_jelly_intro:[[1,`cg_plum_jar`],[3,`cg_plum_memory`],[4,`cg_plum_jar`],[8,`cg_charge_plum`]],boss_maze_intro:[[1,`cg_stone_lion`],[3,`cg_lion_memory`],[4,`cg_stone_lion`],[8,`cg_charge_lion`]],boss_final_intro:[[1,`cg_mist_lord`],[3,`cg_final_blowout`],[4,`cg_final_mist_spread`],[5,`cg_mist_lord`],[9,`cg_charge_mist_lord`]],boss_mind_lord_intro:[[1,`cg_white_fox`],[2,`cg_fox_worries`],[4,`cg_white_fox`],[8,`cg_charge_fox`]],boss_demon_a_intro:[[1,`cg_red_oni_furnace`],[3,`cg_oni_brothers_winter`],[4,`cg_red_oni_furnace`],[8,`cg_charge_red_oni`]],boss_demon_b_intro:[[1,`cg_blue_oni_furnace`],[3,`cg_oni_brothers_winter`],[4,`cg_blue_oni_furnace`],[8,`cg_charge_blue_oni`]],boss_temple_intro:[[1,`cg_iron_arhat`],[3,`cg_arhat_alone`],[4,`cg_iron_arhat`],[8,`cg_charge_arhat`]],q2_5_before:[[1,`cg_q25_shards_table`],[3,`cg_q25_queen_note`],[6,`cg_queen_plum`],[12,`cg_q25_queen_send`]],ending_home_qiuqiu:[[1,`cg_home_qiuqiu`],[4,`cg_daxia_waits_nightly`],[5,`cg_home_daxia_nod`],[9,`cg_home_qiuqiu_pat`]],ending_home_feifei:[[1,`cg_home_feifei`],[4,`cg_feifei_brews`],[5,`cg_home_daxia_nod`],[8,`cg_home_feifei_mend`]],ending_home_dangdang:[[1,`cg_home_dangdang`],[3,`cg_dangdang_roofs`],[5,`cg_home_daxia_nod`],[8,`cg_home_dangdang_soup`]],ending_home_fengfeng:[[1,`cg_home_fengfeng`],[4,`cg_daxia_reads_letters`],[5,`cg_home_daxia_nod`],[8,`cg_home_fengfeng_stories`]],ending_final:[[1,`cg_final_breakfast_table`],[5,`cg_village_lights`],[6,`cg_final_lighthouse_boats`]],boss_chaos_leader_defeat:[[1,`cg_lamp_master_kneels`],[2,`cg_leader_left_home`],[3,`cg_lamp_master_kneels`]],boss_acid_jelly_defeat:[[1,`cg_plum_note`],[4,`cg_plum_king_writes`],[5,`cg_plum_note`]],boss_maze_defeat:[[1,`cg_lion_rests`],[3,`cg_lion_sad`],[4,`cg_lion_rests`]],q3_4_before:[[1,`cg_q34_abbot_sweeps`],[4,`cg_abbot_sandstorm`],[5,`cg_q34_abbot_sweeps`]],boss_temple_defeat:[[1,`cg_arhat_rests`],[3,`cg_abbot_above`]],dungeon_dg_q1_mines_boss_intro:[[1,`cg_armadillo_king`],[3,`cg_mines_forced`],[4,`cg_armadillo_king`],[8,`cg_charge_armadillo`]],pair_qiuqiu_feifei_act1:[[1,`cg_pair_qiuqiu_feifei_act1`],[5,`cg_pair2_qiuqiu_feifei_act1`]],pair_qiuqiu_feifei_act2:[[1,`cg_pair_qiuqiu_feifei_act2`],[6,`cg_pair2_qiuqiu_feifei_act2`]],pair_qiuqiu_feifei_act3:[[1,`cg_pair_qiuqiu_feifei_act3`],[6,`cg_pair2_qiuqiu_feifei_act3`]],pair_qiuqiu_dangdang_act1:[[1,`cg_pair_qiuqiu_dangdang_act1`],[5,`cg_pair2_qiuqiu_dangdang_act1`]],pair_qiuqiu_dangdang_act2:[[1,`cg_pair_qiuqiu_dangdang_act2`],[5,`cg_pair2_qiuqiu_dangdang_act2`]],pair_qiuqiu_dangdang_act3:[[1,`cg_pair_qiuqiu_dangdang_act3`],[6,`cg_pair2_qiuqiu_dangdang_act3`]],pair_qiuqiu_fengfeng_act1:[[1,`cg_pair_qiuqiu_fengfeng_act1`],[6,`cg_pair2_qiuqiu_fengfeng_act1`]],pair_qiuqiu_fengfeng_act2:[[1,`cg_pair_qiuqiu_fengfeng_act2`],[5,`cg_pair2_qiuqiu_fengfeng_act2`]],pair_qiuqiu_fengfeng_act3:[[1,`cg_pair_qiuqiu_fengfeng_act3`],[6,`cg_pair2_qiuqiu_fengfeng_act3`]],pair_feifei_dangdang_act1:[[1,`cg_pair_feifei_dangdang_act1`],[5,`cg_pair2_feifei_dangdang_act1`]],pair_feifei_dangdang_act2:[[1,`cg_pair_feifei_dangdang_act2`],[5,`cg_pair2_feifei_dangdang_act2`]],pair_feifei_dangdang_act3:[[1,`cg_pair_feifei_dangdang_act3`],[5,`cg_pair2_feifei_dangdang_act3`]],pair_feifei_fengfeng_act1:[[1,`cg_pair_feifei_fengfeng_act1`],[5,`cg_pair2_feifei_fengfeng_act1`]],pair_feifei_fengfeng_act2:[[1,`cg_pair_feifei_fengfeng_act2`],[4,`cg_pair2_feifei_fengfeng_act2`]],pair_feifei_fengfeng_act3:[[1,`cg_pair_feifei_fengfeng_act3`],[6,`cg_pair2_feifei_fengfeng_act3`]],pair_dangdang_fengfeng_act1:[[1,`cg_pair_dangdang_fengfeng_act1`],[6,`cg_pair2_dangdang_fengfeng_act1`]],pair_dangdang_fengfeng_act2:[[1,`cg_pair_dangdang_fengfeng_act2`],[5,`cg_pair2_dangdang_fengfeng_act2`]],pair_dangdang_fengfeng_act3:[[1,`cg_pair_dangdang_fengfeng_act3`],[5,`cg_pair2_dangdang_fengfeng_act3`]],scourge_priceUp:[[1,`cg_scourge_priceUp`]],scourge_volcano:[[1,`cg_scourge_volcano`]],scourge_disguise:[[1,`cg_scourge_disguise`]],scourge_blackRain:[[1,`cg_scourge_blackRain`]],scourge_theft:[[1,`cg_scourge_theft`]],scourge_sanctumBreak:[[1,`cg_scourge_sanctumBreak`]],scourge_hangman:[[1,`cg_scourge_hangman`]],scourge_skipTurn:[[1,`cg_scourge_skipTurn`]],scourge_statJinx:[[1,`cg_scourge_statJinx`]],scourge_boatDrift:[[1,`cg_scourge_boatDrift`]],scourge_undeadInCombat:[[1,`cg_scourge_undeadInCombat`]]};function np(e,t=$f[e]){let n=tp[e];return n?n.map(([e,t])=>({from:e,id:t})):t?[{from:1,id:t}]:[]}function rp(e){let t=/_(\d+)(?:~.*)?$/.exec(e);return t?Number(t[1]):0}function ip(e,t){let n=e[0];for(let r of e)r.from<=t&&(n=r);return n}var ap=null;function op(){return ap||=fetch(P(`voice/index.json?v=c784a3ac75`)).then(e=>e.ok?e.json():{}).then(e=>{if(!e||typeof e!=`object`)return{};let t=e,n=t.lines&&typeof t.lines==`object`?t.lines:t,r={};for(let[e,t]of Object.entries(n))typeof t==`string`?r[e]=t:t&&typeof t==`object`&&typeof t.path==`string`&&(r[e]=t.path);return r}).catch(()=>({})),ap}function sp(e,t){if(e.narrator)return;let n=e.voice??t[e.id];if(n)return P(n.startsWith(`voice/`)||n.includes(`/`)?n:`voice/${n}`)}function cp(e){return Math.max(1400,600+e.length*90)}var lp=`qiuqiu-king-dialogue-auto`;function up(t){return t.narrator?null:[t.stand,t.portrait].find(t=>t&&e(t))??null}var dp=class{el;bgEl;cgEl;cgPages=[];cgShown=null;cgWant=0;cgToken=0;cgPumping=!1;cgWaitEl=null;stageEl;slots;nameEl;textEl;nextMark;autoBtn;logEl;auto=Fe(lp)===`1`;log=[];advance=null;skipped=!1;typing=!1;finishTyping=null;steps=[];heroKeys=new Set;lineNo=0;constructor(e){this.bgEl=p(`div.dlg-bg`),this.cgEl=p(`div.dlg-cg`),this.slots={left:p(`div.dlg-slot.left`),right:p(`div.dlg-slot.right`)},this.stageEl=p(`div.dlg-stage`,null,this.slots.left,this.slots.right),this.nameEl=p(`div.dlg-name`),this.textEl=p(`div.dlg-text`),this.nextMark=p(`span.dlg-next`,null,`▼`),this.autoBtn=r(`自動`,()=>this.toggleAuto(),`small ghost dlg-auto`),this.logEl=p(`div.dlg-log.hidden`);let t=p(`div.dlg-box`,null,this.nameEl,p(`div.dlg-controls`,null,this.autoBtn,r(`紀錄`,()=>this.showLog(),`small ghost`),r(`跳過`,()=>this.skip(),`small ghost`)),this.textEl,this.nextMark);this.el=p(`div.dialogue`,null,this.bgEl,this.cgEl,this.stageEl,t,this.logEl),this.el.addEventListener(`click`,()=>this.onClick()),this.el.addEventListener(`keydown`,e=>{e.key===` `||e.key===`Enter`?(e.preventDefault(),this.onClick()):e.key===`Escape`&&this.skip()}),this.el.tabIndex=0,this.updateAutoBtn(),e.append(this.el)}onClick(){this.logEl.classList.contains(`hidden`)&&(this.typing?this.finishTyping?.():this.advance?.())}toggleAuto(){this.auto=!this.auto,h(lp,this.auto?`1`:`0`),this.updateAutoBtn(),this.auto&&!this.typing&&this.advance?.()}updateAutoBtn(){this.autoBtn.classList.toggle(`on`,this.auto),this.autoBtn.textContent=this.auto?`自動 ▶`:`自動`}get wasSkipped(){return this.skipped}skip(){this.skipped=!0,z.stopVoice(),this.finishTyping?.(),this.advance?.()}showLog(){k(this.logEl);let e=p(`div.dlg-log-list`);for(let t of this.log)e.append(p(`div.dlg-log-line`,{class:t.narrator?`narrator`:``},t.narrator?null:p(`b`,null,t.speakerName),p(`span`,null,t.zh)));this.logEl.append(p(`div.panel.dlg-log-panel`,null,p(`div.panel-title`,null,`對白紀錄`,r(`關閉`,()=>this.logEl.classList.add(`hidden`),`small`)),e)),this.logEl.classList.remove(`hidden`),this.logEl.addEventListener(`click`,e=>e.stopPropagation(),{once:!0}),e.scrollTop=e.scrollHeight}async play(e){this.skipped=!1,this.el.classList.add(`open`),this.el.focus({preventScroll:!0});let t=++this.cgToken;this.cgPages=Xf(np(e.id,e.cg),{keyUrl:j,pathUrl:P}).map(e=>({...e,url:null,state:`wait`})),this.cgWant=0;let n=Ue(),r=!n&&await this.cgFirst(t,2500);n&&this.cgPages.length&&this.cgFirst(t,6e4).then(e=>{e&&t===this.cgToken&&this.el.classList.contains(`open`)&&(this.el.classList.add(`cg`),this.el.classList.remove(`scene-bg`),this.bgEl.style.backgroundImage=``,this.cgUpdate(!0),this.cgPump(t))});let i=j(ze(e.bg));this.el.classList.toggle(`cg`,r),this.el.classList.toggle(`scene-bg`,!r&&!!i),this.bgEl.style.backgroundImage=!r&&i?`url("${i}")`:``,this.cgShown=null,k(this.cgEl);let a=this.cgPages[Qf(this.cgPages.map(e=>e.state),this.cgPages.length-1)];r&&a?.url&&(this.showCg(a.url,!1),this.cgPump(t)),this.el.querySelector(`.dlg-boss`)?.remove();let o=/^boss_.*_intro$/.test(e.id)?e.lines.find(e=>!e.narrator&&e.side===`right`):void 0;o&&this.el.append(p(`div.dlg-boss`,null,p(`i`,null,`✕`),p(`b`,null,o.speakerName)));for(let e of Object.values(this.slots))k(e),e.classList.remove(`lit`,`dim`);this.heroKeys.clear();let s=e.lines.map(e=>{let t=up(e),n=e.side===`left`;return t&&n&&this.heroKeys.add(t),{who:t,hero:n}});this.steps=Gf(s),this.lineNo=0;let c=await op();z.volume(`voice`)>0&&oe(e.lines.map(e=>sp(e,c)));for(let t of e.lines){if(this.skipped)break;await this.showLine(t,c),this.lineNo+=1}z.stopVoice(),this.cgToken++,this.cgWaitEl?.classList.remove(`show`),this.el.classList.remove(`open`)}async loadCgUrl(e,t){for(let n of e)if(await Promise.race([ke(n).then(e=>!!e).catch(()=>!1),M(t).then(()=>!1)]))return n;return null}async cgFirst(e,t){if(this.cgPages.length===0)return!1;let n=window.setTimeout(()=>this.cgWaiting(e===this.cgToken),600);try{for(let n of this.cgPages){if(e!==this.cgToken)return!1;if(n.state=`loading`,n.url=await this.loadCgUrl(n.urls,t),n.state=n.url?`ok`:`fail`,n.url)return!0}return!1}finally{window.clearTimeout(n),this.cgWaiting(!1)}}async cgPump(e){if(!this.cgPumping){this.cgPumping=!0;try{for(;;){if(e!==this.cgToken)return;let t=Zf(this.cgPages.map(e=>e.state),this.cgWant);if(t<0)return;let n=this.cgPages[t];if(n.state=`loading`,n.url=await this.loadCgUrl(n.urls,6e4),e!==this.cgToken)return;n.state=n.url?`ok`:`fail`,this.cgUpdate(!0)}}finally{this.cgPumping=!1}}}cgUpdate(e){let t=this.cgPages.map(e=>e.state),n=this.cgPages[Qf(t,this.cgWant)];n?.url&&this.showCg(n.url,e);let r=t[this.cgWant];this.cgWaiting(r===`wait`||r===`loading`)}cgWaiting(e){e&&!this.cgWaitEl&&(this.cgWaitEl=p(`div.dlg-cg-wait`,null,`插圖載入中……`),this.el.append(this.cgWaitEl)),this.cgWaitEl?.classList.toggle(`show`,e)}applyStep(e){let t=!e||e.lit===null;this.stageEl.classList.toggle(`narr`,t);for(let n of[`left`,`right`]){let r=this.slots[n],i=e?.[n]??null;r.dataset.key!==(i??``)&&this.swapFigure(r,n,i),r.classList.toggle(`lit`,!t&&e.lit===n),r.classList.toggle(`dim`,!t&&!!i&&e.lit!==n)}}swapFigure(e,t,n){e.dataset.key=n??``;for(let t of Array.from(e.children))t.classList.add(`out`),window.setTimeout(()=>t.remove(),400);let r=n?j(n):null;if(!n||!r)return;let i=this.heroKeys.has(n);ke(r).then(a=>{if(!a||e.dataset.key!==n)return;let o=p(`img.dlg-fig`,{src:r,alt:``});Kf(t,i)&&o.classList.add(`flip`);let s=window.devicePixelRatio||1;o.style.setProperty(`--cap-h`,`${qf(a.naturalHeight,s)}px`),o.style.setProperty(`--cap-w`,`${qf(a.naturalWidth,s)}px`),e.append(o),requestAnimationFrame(()=>requestAnimationFrame(()=>o.classList.add(`in`)))})}showCg(e,t){if(this.cgShown===e)return;this.cgShown=e;let n=p(`div.dlg-cg-page`,null,p(`div.dlg-cg-fill`,{style:`background-image:url("${e}")`}),p(`img`,{src:e,alt:``})),r=Array.from(this.cgEl.children);if(t)n.classList.add(`enter`),this.cgEl.append(n),requestAnimationFrame(()=>requestAnimationFrame(()=>n.classList.remove(`enter`))),window.setTimeout(()=>{for(let e of r)e.remove()},450);else{for(let e of r)e.remove();this.cgEl.append(n)}}async showLine(e,t){this.log.push(e);let n=ip(this.cgPages,rp(e.id));n&&(this.cgWant=this.cgPages.indexOf(n)),this.el.classList.contains(`cg`)?n&&(this.cgUpdate(!0),this.cgPump(this.cgToken)):this.applyStep(this.steps[this.lineNo]),this.nameEl.textContent=e.narrator?``:e.speakerName,this.nameEl.classList.toggle(`hidden`,!!e.narrator),this.textEl.classList.toggle(`narrator`,!!e.narrator),this.nextMark.classList.remove(`show`);let r=z.voice(sp(e,t)),i=!!sp(e,t)&&z.volume(`voice`)>0;await this.typeText(e.zh),!this.skipped&&(this.nextMark.classList.add(`show`),await new Promise(t=>{let n=!1,a=()=>{n||(n=!0,this.advance=null,t())};this.advance=()=>{z.stopVoice(),a()},this.auto&&(i?r.then(()=>M(500)):M(cp(e.zh))).then(()=>{this.auto&&a()})}))}typeText(e){this.textEl.textContent=``;let t=Array.from(e);return this.typing=!0,new Promise(n=>{let r=0,i=0,a=()=>{window.clearInterval(i),this.textEl.textContent=e,this.typing=!1,this.finishTyping=null,n()};this.finishTyping=a,i=window.setInterval(()=>{r+=1,this.textEl.textContent=t.slice(0,r).join(``),r>=t.length&&a()},1e3/32)})}history(){return this.log}dispose(){z.stopVoice(),this.el.remove()}},fp=class{el;queue=[];showing=!1;constructor(e){this.el=p(`div.bubble-host`),e.append(this.el)}say(e){e&&(this.queue.length>=3||(this.queue.push(e),this.showing||this.next()))}async next(){let e=this.queue.shift();if(!e){this.showing=!1;return}this.showing=!0;let t=j(e.portrait),n=p(`div.bubble`,{class:e.side===`right`?`npc`:``},p(`div.bubble-face`,null,t?p(`img`,{src:t,alt:``}):e.speakerName.slice(0,1)),p(`div.bubble-body`,null,e.narrator?null:p(`b`,null,e.speakerName),p(`span`,null,e.zh)));n.addEventListener(`click`,()=>n.classList.add(`out`)),this.el.append(n);let r=await op(),i=performance.now();await Promise.race([z.voice(sp(e,r)),M(6e3)]);let a=Math.max(0,cp(e.zh)+600-(performance.now()-i));await M(a),n.classList.add(`out`),await M(350),n.remove(),this.next()}},pp=[`qiuqiu`,`feifei`,`dangdang`,`fengfeng`],mp=class{reg;byId=new Map;poolCount=new Map;playedPairs=new Set;seenRegions=new Set;constructor(e){this.reg=e;for(let t of e.story.scenes)this.byId.set(t.id,t)}has=e=>this.byId.has(e);lineVm(e){let t=this.reg.heroes.get(e.speaker),n=this.reg.story.cast.find(t=>t.id===e.speaker),r=e.speaker===`narrator`;return{id:e.id,speakerName:r?`旁白`:t?.name??n?.name??(/^[a-z0-9_]+$/.test(e.speaker)?`路人`:e.speaker),portrait:r?void 0:t?`portrait:${t.id}`:n?.portrait??`portrait:${e.speaker}`,side:t?`left`:`right`,fullBody:!t&&!r,stand:r?void 0:t?`hero:${t.id}:stand`:`portrait:${e.speaker}`,zh:e.zh,voice:e.voice,narrator:r}}sceneVm(e,t){let n=this.byId.get(e);if(!n)return null;let r;if(lr(e)===`pool`){let n=this.pickPool(e,t);r=n?[n]:[]}else r=dr(n,t),r.length&&this.onPlayed?.(e);if(!r.length)return null;let i=ep(e);return{id:e,bg:n.bg,...i?{cg:i}:{},lines:r.map(e=>this.lineVm(e))}}pickPool(e,t){let n=this.byId.get(e);if(!n)return;let r=this.poolCount.get(e)??0;this.poolCount.set(e,r+1);let i=pr(n,t,r);return i&&this.onPlayed?.(e),i}onPlayed=null;openingIds(e){let t=pp.find(t=>!e.includes(t));return[`intro_prologue`,t?`intro_stay_${t}`:``,`intro_depart`].filter(e=>e&&this.has(e))}endingTailIds(e){let t=pp.find(t=>!e.includes(t));return[t?`ending_home_${t}`:``,`ending_final`].filter(e=>e&&this.has(e))}endingTail(e){let t=e.map(e=>e.id),n=e.filter(e=>e.life!==`dead`).map(e=>e.id),r=n.length<t.length&&this.has(`ending_home_loss`);return this.endingTailIds(t).map(e=>e===`ending_final`?{id:e,party:n}:{id:r&&e.startsWith(`ending_home_`)?`ending_home_loss`:e,party:t})}banter(e,t,n){for(let r=0;r<t.length;r++){let i=this.poolCount.get(`sit:${e}`)??0;this.poolCount.set(`sit:${e}`,i+1);let a=t[(i+r)%t.length],o=fr(e,a),s=this.has(o)?this.pickPool(o,n):void 0;if(s)return this.lineVm(s)}return null}downBanter(e,t){for(let n of t){if(n===e)continue;let r=ur(n,e),i=this.has(r)?this.pickPool(r,t):void 0;if(i)return this.lineVm(i)}return null}regionBanter(e,t,n){if(this.seenRegions.has(e))return null;this.seenRegions.add(e);let r=ir(e,t),i=this.has(r)?this.pickPool(r,n):void 0;return i?this.lineVm(i):null}markRegionSeen(e){this.seenRegions.add(e)}townLine(e,t){let n=rr(e,this.has),r=n?this.pickPool(n,t):void 0;return r?this.lineVm(r):null}bossScene(e,t){let n=cr(e,t);return this.has(n)?n:null}scourgeScene(e){if(!e)return null;let t=`scourge_${e.replace(/^scourge:/,``)}`;return this.has(t)?t:null}dungeonScene(e){let t=or(e);return this.has(t)?t:null}nextPair(e,t,n){t===2&&!n.includes(`q2_1`)&&(t=1),t===3&&!n.includes(`q3_1`)&&(t=2);for(let r=t;r>=1;r--)if(r!==2||n.includes(`q2_1`)){for(let t of sr(e,r))if(this.has(t)&&!this.playedPairs.has(t))return this.playedPairs.add(t),t}return null}},hp=Array.from({length:12},(e,t)=>`bg:loading_${String(t+1).padStart(2,`0`)}`);function gp(e=Math.random,t=j){let n=hp.map(e=>t(e)).filter(e=>!!e);return n.length?n[Math.min(n.length-1,Math.floor(e()*n.length))]:null}var _p=class{reg;onRemote=null;onReset=null;constructor(e){this.reg=e}submit(e,t){let n=L(t,e,this.reg);return n.error?Promise.resolve({error:n.error}):Promise.resolve({before:t,events:n.events,state:n.state})}canAct(){return!0}waitingText(){return null}dispose(){}};function vp(e){let t=p(`div.ftk-tokens`);if(!e)return t.append(p(`span.ftk-notoken`,null,`不用擲格子`)),t;let n=j(`icon:stat_${e.stat}`);for(let r=0;r<e.slots;r++)t.append(p(`span.ftk-token`,{style:`--stat:${i[e.stat]};${n?`--stat-icon:url("${n}")`:``}`},p(`b`,null,`${e.chance}%`)));return t.append(p(`span.ftk-token-stat`,{style:`--stat:${i[e.stat]}`},p(`span.stat-chip`,{style:`--stat:${i[e.stat]}`},We[e.stat]))),t}function yp(e,t){if(!e)return[];if(t?.length)return[...t].sort((e,t)=>t.hits-e.hits).map(e=>({hits:e.hits,pct:Rd(e.odds),text:e.text,pass:e.hits>0}));let n=e.need??e.slots,r=Ld(e.chance,e.slots),i=[];for(let t=e.slots;t>=0;t--)i.push({hits:t,pct:Rd(r[t]??0),text:t>=n?`成功`:`失敗`,pass:t>=n});return i}function bp(){let e=p(`div.ftk-out-rows`);return{el:p(`div.panel.ftk-outcome`,null,p(`div.ftk-plate.small`,null,`結果機率`),e),set:(t,n,r)=>{k(e);let i=yp(t,n);i.length?i.forEach(t=>e.append(p(`div.ftk-out-row`,{class:t.pass?`pass`:`fail`},p(`span.ftk-hex-num`,null,String(t.hits)),p(`span.ftk-out-pct`,null,`（${t.pct}）`),p(`span.ftk-out-text`,null,t.text)))):e.append(p(`p.ftk-out-none`,null,r??`這個選項不用擲格子`))}}}function xp(e,t){return p(`div.ftk-art`,{class:t},p(`div.ftk-hex`),p(`div.ftk-hex-in`),e)}function Sp(e,t){let n=e.monsters[0],i=p(`div.ftk-token-host`),a=p(`p.ftk-lore`),s=bp(),c=e=>{k(i),i.append(vp(e.check?{...e.check,need:e.check.slots}:void 0)),s.set(e.check?{...e.check,need:e.check.slots}:void 0,void 0,e.kind===`fight`?`直接開打，不用擲格子`:e.kind===`retreat`?`退回前一格，不用擲格子`:void 0),a.textContent=e.desc??``,l.querySelectorAll(`.btn`).forEach(t=>t.classList.toggle(`on`,t.dataset.kind===e.kind))},l=p(`div.ftk-btns`);e.options.forEach(e=>{let n=r(e.label,()=>{z.sfx(o.click),t(e.kind)},e.kind===`fight`?`primary`:e.kind===`retreat`?`ghost`:``);n.dataset.kind=e.kind,n.addEventListener(`mouseenter`,()=>c(e)),n.addEventListener(`focus`,()=>c(e)),l.append(n)});let u=p(`div.ftk-side`);e.monsters.forEach(e=>u.append(p(`div.ftk-side-face`,{title:e.name},g([e.sprite],{text:e.name.slice(0,1),cls:`ftk-side-thumb`,face:!0}),p(`span.ftk-side-lv`,null,String(e.level)))));let d=e.monsters.length>1?`${n?.name??`怪物`} 等 ${e.monsters.length} 隻`:n?.name??`怪物`,f=p(`div.ftk-left.enc-win`,{class:e.night?`night`:``},u,xp(ne(n?.sprite,`ftk-monster`),`monster`),p(`div.ftk-stack`,null,p(`div.panel.ftk-win.enc-panel`,null,p(`div.ftk-plate`,null,d,n?p(`small`,null,` Lv ${n.level}`):null),p(`p.ftk-desc`,null,e.title,e.night?p(`span.ftk-night`,null,`　夜晚：伏擊比較容易被發現`):null),i,l,a),s.el));return c(e.options.find(e=>e.check)??e.options[0]),f}function Cp(e,t,n,i,a,o){let s=p(`div.ftk-btns`),c=t=>{k(i),i.append(vp(t.check?{...t.check,need:t.tiers?.length?0:t.check.need}:void 0)),a?.set(t.check,t.tiers),o&&(o.textContent=[t.cost?`代價：${t.cost}`:``,t.noFocus?`這個選項不能花專注鎖格`:``].filter(Boolean).join(`　`)),s.querySelectorAll(`.btn`).forEach((n,r)=>n.classList.toggle(`on`,e[r]===t))};return e.forEach((e,i)=>{let a=r(e.label,()=>{if(!e.check)return t.onChoose(i);let r=e.check,a=new Zd({title:e.label,stat:r.stat,chance:r.chance,slots:r.slots,need:e.tiers?.length?0:r.need??r.slots,maxLock:e.noFocus?0:Math.min(t.maxLock??0,r.slots,r.maxLock??r.slots)},{allowLock:!0,compact:!0,onCancel:()=>n.classList.remove(`rolling`)}),o=n.querySelector(`.choice-roll`);k(o),o.append(a.el),n.classList.add(`rolling`),a.run(e=>t.onRoll?t.onRoll(i,e):[]).then(e=>t.onRolled?.(i,e))},i===0&&e.check?`primary`:``,e.disabled);a.addEventListener(`mouseenter`,()=>c(e)),a.addEventListener(`focus`,()=>c(e)),e.cost&&a.append(p(`small.ftk-btn-cost`,null,e.cost)),s.append(a)}),c(e.find(e=>e.check)??e[0]),s}function wp(e,t){let n=j(e.art),r=p(`div.ftk-token-host`),i=p(`p.ftk-lore`),a=bp(),o=p(`div.panel.ftk-win.event-panel`),s=e.text.split(`
`).filter(Boolean);return o.append(p(`div.ftk-plate`,null,e.title),p(`div.ftk-desc`,null,...s.map(e=>p(`p`,null,re(e)))),r,p(`div.choice-roll`)),o.append(Cp(e.options,t,o,r,a,i),i),p(`div.ftk-left.event-win`,null,xp(n?p(`img.ftk-scene`,{src:n,alt:``}):p(`span.ftk-noart`,null,`？`),`scene`),p(`div.ftk-stack`,null,o,a.el))}function Tp(e,t,n){return p(`div.ftk-left.event-win.result`,null,p(`div.ftk-stack`,null,p(`div.panel.ftk-win.event-panel.result`,null,p(`div.ftk-plate`,null,`結果`),p(`div.ftk-desc`,null,p(`p`,null,re(e))),t.length?p(`ul.result-lines`,null,...t.map(e=>p(`li`,null,e))):null,p(`div.ftk-btns`,null,r(`好`,n,`primary`)))))}var Ep={fight:`icon:node_fight`,chest:`icon:node_chest`,boss:`icon:node_boss`,healPool:`icon:node_rest`,merchant:`icon:node_shop`,trap:`icon:node_event`,vault:`icon:node_chest`},Dp={fight:`⚔`,chest:`🎁`,trap:`⚠`,healPool:`💧`,merchant:`🛒`,stairs:`⇩`,door:`🚪`,boss:`👑`,vault:`💰`,chaosGenerator:`🌀`};function Op(e,t){let n=p(`div.dungeon-track`);e.rooms.forEach((t,r)=>{r>0&&n.append(p(`span.dt-link`,{class:r<=e.current?`done`:``}));let i=r<e.current,a=(i?j(`icon:room_cleared`):null)??j(`icon:room_${t.kind}`)??(Ep[t.kind]?j(Ep[t.kind]):null);n.append(p(`span.dt-room`,{class:`${i?`done`:r===e.current?`now`:``} ${t.kind}`,title:t.label},a?p(`img`,{src:a,alt:t.label}):Dp[t.kind]??`·`,i?p(`i.dt-check`,null,`✔`):null))}),n.append(p(`span.dt-count`,null,`${e.current+1}-${e.rooms.length}`));let i=j(e.bg)??j(`bg:battle_cave`),a=/^bg:room_(.+)_[^_]+$/.exec(e.bg??``)?.[1],o=(a?j(`bg:battle_${a}`):null)??j(`bg:battle_cave`),s=p(`div.ftk-token-host`),c=p(`div.panel.ftk-win.dungeon-box`);c.append(p(`p.ftk-desc`,null,re(e.roomText)),s,p(`div.choice-roll`)),c.append(Cp(e.options,t,c,s,null,null)),t.onLeave&&c.append(p(`div.dungeon-leave`,null,r(`離開地城`,t.onLeave,`ghost small`)));let l=p(`div.dungeon-party`);(e.party??[]).forEach((e,t)=>l.append(p(`div.dp-hero`,{style:`--i:${t}`},ne(`hero:${e}:idle`,`dp-sprite`),p(`i.dp-ring`))));let u=p(`div.dlg-cg-wait.room-wait`,null,`載入中……`),d=p(`div.dungeon-scene`,{style:o&&o!==i?`--room-bg:url("${o}")`:i?`--room-bg:url("${i}")`:``},p(`div.dungeon-top`,null,p(`div.dungeon-name`,null,e.name),n,p(`div.ftk-plate.dungeon-room-name`,null,e.roomTitle)),l,c);if(i&&o&&o!==i){let e=window.setTimeout(()=>(d.append(u),u.classList.add(`show`)),300);ke(i).then(t=>{window.clearTimeout(e),u.remove(),t&&d.style.setProperty(`--room-bg`,`url("${i}")`)})}return d}var kp=[`weapon`,`offhand`,`head`,`body`,`feet`,`trinket`],Ap=[`str`,`vit`,`int`,`awa`,`tal`,`spd`,`lck`];function jp(e,t){let n=null,a=p(`div.ftk-float.equip-float`),o=n=>{if(k(a),a.classList.toggle(`on`,!!n),!n)return;let i=n.item,o=i.slot&&!n.equipped?e.equipped[i.slot]:void 0,s=p(`div.ftk-card-acts`),c=i.uid??i.id;if(n.equipped&&i.slot?s.append(r(`卸下`,()=>t.onUnequip(i.slot),`small`)):i.slot?s.append(r(`裝備`,()=>t.onEquip(c),`small primary`,!!i.usableBy&&!i.usableBy.includes(e.hero.id))):t.onUse&&(i.usable||i.kind===`consumable`||i.kind===`herb`)&&(s.append(r(`使用`,()=>t.onUse(c),`small primary`,!!i.useWhy)),i.useWhy&&s.prepend(p(`div.warn`,null,i.useWhy))),!n.equipped){for(let e of t.giveTargets??[])s.append(r(`給${e.name}`,()=>t.onGive?.(c,e.id),`small`));t.onDiscard&&s.append(r(`丟掉`,()=>t.onDiscard(c),`small ghost`))}i.usableBy&&!i.usableBy.includes(e.hero.id)&&s.prepend(p(`div.warn`,null,`這位主角不能裝備`)),o&&a.append(Se(o,{equipped:!0})),a.append(Se(i,{current:i.slot&&!n.equipped?o:void 0,equipped:n.equipped,foot:s}))},s=(e,t,r)=>{n={item:e,equipped:t},S.querySelectorAll(`.eq-row.selected, .bag-row.selected`).forEach(e=>e.classList.remove(`selected`)),r.classList.add(`selected`),o(n)},c=p(`div.equip-top`,null,f(`close`,`關閉`,t.onClose,`small danger equip-close`,!1,`✕`),t.onSwitchHero?f(`left`,`上一位主角`,()=>t.onSwitchHero(-1),`small equip-arrow`,!1,`◀`):p(`span`),p(`div.ftk-plate.equip-name`,null,e.hero.name,p(`small`,null,` Lv ${e.hero.level}`)),t.onSwitchHero?f(`right`,`下一位主角`,()=>t.onSwitchHero(1),`small equip-arrow`,!1,`▶`):p(`span`)),l=p(`div.equip-stat-row`);Ap.forEach(t=>{e.stats[t]!==void 0&&l.append(p(`span.eq-stat`,{title:We[t],style:`--stat:${i[t]}`},g([`icon:stat_${t}`],{text:We[t].slice(0,1),cls:`eq-stat-icon`}),p(`b`,null,String(e.stats[t]))))});let u=p(`div.equip-list`);kp.forEach(t=>{let n=e.equipped[t],r=p(`div.eq-row`,{class:n?`filled`:`empty`,title:O[t]},n?g([n.icon],{text:n.name.slice(0,1),cls:`icon-box rarity-${n.rarity??`common`}`}):p(`span.icon-box.empty-slot`,null,O[t].slice(0,1)),p(`span.eq-name`,null,n?.name??p(`small`,null,O[t])));n&&(r.addEventListener(`mouseenter`,()=>s(n,!0,r)),r.addEventListener(`click`,()=>s(n,!0,r))),u.append(r)});let d=p(`div.equip-figure`,null,e.hero.gold===void 0?null:p(`div.equip-gold`,null,p(`span.gold-text`,null,String(e.hero.gold))),ne(e.hero.portrait&&e.hero.portrait.startsWith(`hero:`)?e.hero.portrait:`hero:${e.hero.id}:idle`,`equip-body-art`)),m=p(`div.equip-sub`,null,p(`span.eq-sub`,{title:`護甲`},`🛡`,p(`b`,null,String(e.armor))),p(`span.eq-sub`,{title:`魔抗`},`✦`,p(`b`,null,String(e.resist))),p(`span.eq-sub`,{title:`生命`},`❤`,p(`b`,null,`${e.hero.hp}/${e.hero.hpMax}`)),p(`span.eq-sub`,{title:`專注`},`◆`,p(`b`,null,`${e.hero.focus}/${e.hero.focusMax}`)),e.hero.xpNext?p(`span.eq-sub`,{title:`經驗`},`XP`,p(`b`,null,`${e.hero.xp??0}/${e.hero.xpNext}`)):null),h=p(`div.equip-sig`,null,p(`div.sub-title`,null,`招牌技能`)),_=p(`div.sig-row`),v=e.signature??(e.skills??[]).map(e=>({name:e.name,desc:`${e.trigger}（${e.chance}）：${e.desc}`})),y=p(`div.sig-desc`,null,v[0]?`${v[0].name}｜${v[0].desc??``}`:``);for(let e=0;e<4;e++){let t=v[e],n=t?p(`span.sig`,{class:`${t.locked?`locked`:``}${e===0?` on`:``}`,title:t.desc??t.name},t.icon?g([t.icon],{text:t.name.slice(0,1),cls:`sig-icon`}):p(`span.sig-icon`,null,t.name.slice(0,1)),p(`small`,null,t.name)):p(`span.sig.empty`,{title:`還沒有招牌技能`},p(`span.sig-icon`,null,`？`));if(t){let e=()=>{y.textContent=`${t.name}｜${t.desc??``}`,_.querySelectorAll(`.sig`).forEach(e=>e.classList.toggle(`on`,e===n))};n.addEventListener(`mouseenter`,e),n.addEventListener(`click`,e)}_.append(n)}h.append(_),v.length&&h.append(y);let b=p(`div.bag-list`);e.bag.forEach(e=>{let t=p(`div.bag-row`,{title:e.name},g([e.icon],{text:e.name.slice(0,1),cls:`icon-box rarity-${e.rarity??`common`}`}),p(`span.bag-name`,{class:`rarity-text ${e.rarity??``}`},e.name),p(`span.bag-n`,null,`（${e.count??1}）`));t.addEventListener(`mouseenter`,()=>s(e,!1,t)),t.addEventListener(`click`,()=>s(e,!1,t)),b.append(t)}),e.bag.length||b.append(p(`div.empty`,null,`背包是空的`));let x=p(`div.panel.equip-panel.ftk-right`,null,c,l,p(`div.equip-mid`,null,u,d),m,h,p(`div.sub-title`,null,`背包（${e.bag.length}）`),b),S=p(`div.equip-wrap`,null,a,x);return x.addEventListener(`mouseleave`,()=>o(n)),Mp(S,x,a,e.hero.id),S}function Mp(e,t,n,r){if(typeof window>`u`||window.innerWidth<=700)return;let i=()=>{if(!e.isConnected)return;let i=document.querySelector(`.party .pcard[data-hero="${r}"]`);if(!i)return;let a=t.currentCSSZoom||1,o=e.getBoundingClientRect(),s=i.getBoundingClientRect(),c=t.getBoundingClientRect().width,l=12*a,u=Math.max(l,Math.min(o.width-c-l,s.left+s.width/2-o.left-c/2));t.style.left=`${u/a}px`,t.style.right=`auto`,t.classList.add(`over-card`),u>=o.width-u-c?(n.style.left=`auto`,n.style.right=`${(o.width-u+l)/a}px`,n.style.flexDirection=`row-reverse`):(n.style.right=`auto`,n.style.left=`${(u+c+l)/a}px`,n.style.flexDirection=`row`)},a=()=>{if(!e.isConnected)return window.removeEventListener(`resize`,a);i()};requestAnimationFrame(i),window.addEventListener(`resize`,a)}var Np=`qiuqiu-king-moveroll-folded-v1`;function Pp(e){let t=e.turnsPerDay>8,n=e.nightFrom??e.turnsPerDay-1,r=Math.floor(e.turnsPerDay/2),i=p(`div.time-turns`,{class:t?`many`:``,style:`--nl:${r};--nr:${e.turnsPerDay-r}`});for(let a=1;a<=e.turnsPerDay;a++){let o=a>=n,s=o?`☾`:`☀`;i.append(p(`span.time-seg`,{class:`${o?`night`:`day`}${a===e.turn?` now`:``}${a<e.turn?` past`:``}`},!t||a===e.turn?s:``)),a===r&&i.append(p(`span.time-gap`))}let a=p(`div.chaos-meter`,{title:`紫霧 ${e.chaos} 級`});for(let t=1;t<=3;t++)a.append(p(`span.chaos-seg`,{class:t<=e.chaos?`on`:``}));let o=p(`div.lives`,{title:`共用命數`},p(`span.lives-icon`,null,`♥`),p(`b`,null,String(e.lives)));return p(`div.time-bar`,{class:e.night?`is-night`:`is-day`},p(`div.time-day`,null,p(`b`,null,`第 ${e.day} 天`),p(`small`,null,e.night?`夜晚`:`白天`)),i,p(`div.chaos-box`,null,p(`small`,null,e.chaos>=3?`紫霧籠罩全國`:`紫霧（${e.chaosIn} 回合後變濃）`),a),o)}function Fp(e,t,n,r){return!t||!n||!r||(e.classList.add(n===`go`?`guide-go`:`guide-locked`),e.title=n===`go`?`點一下：鏡頭移到這個地點、看怎麼走過去`:`還不知道在哪裡`,e.setAttribute(`role`,`button`),n===`go`&&e.append(p(`span.qg-look`,null,p(`i.qg-pin`),`看位置`)),e.addEventListener(`click`,e=>{e.stopPropagation(),r(t)})),e}function Ip(e,t){let n=p(`div.quest-track`,null,p(`div.quest-head`,null,`主線`),Fp(p(`b.quest-title`,null,e.title),e.id,e.guide,t),p(`div.quest-desc`,null,e.desc));if(e.steps?.length){let r=p(`ul.quest-steps`);e.steps.forEach(e=>r.append(Fp(p(`li`,{class:`${e.done?`done`:``}${e.optional?` optional`:``}`},e.title),e.id,e.guide,t))),n.append(r)}return n}var Lp=class{el;handlers;heroesEl;facesEl;whoEl;dayEl;subEl;timeEl;dungeon=null;questEl;bottomEl;toastEl;modalEl;vm=null;questOpen=!0;actions=[];rolling=!1;gearPop;anchorFn=null;anchorRaf=0;anchorOn=!1;anchorXY=``;disposed=!1;inviteBtn;guideBackBtn;constructor(e,t={}){this.handlers=t,this.heroesEl=p(`div.party.hud-party`),this.facesEl=p(`div.st-faces`),this.whoEl=p(`div.st-who`),this.dayEl=p(`div.st-day`),this.subEl=p(`div.skel-sub`),this.timeEl=p(`div.hud-time`),this.questEl=p(`div.hud-quest`),this.bottomEl=p(`div.hud-bottom`),this.toastEl=p(`div.toast-host`),this.modalEl=p(`div.hud-modal`),this.guideBackBtn=r(`回到`,()=>(z.sfx(o.click),this.handlers.onGuideBack?.()),`small qg-back`),this.guideBackBtn.hidden=!0,this.inviteBtn=r(`邀請`,()=>this.menu(`invite`),`small gold hidden`),this.inviteBtn.title=`邀請朋友加入這一局`;let n=e=>()=>{this.toggleGear(!1),e()};this.gearPop=p(`div.gear-pop`,{hidden:!0},r(`總覽地圖`,n(()=>this.menu(`overview`)),`small`,!1),r(`背包`,n(()=>this.menu(`bag`)),`small`),r(`任務清單`,n(()=>this.toggleQuest()),`small`),r(`存檔`,n(()=>this.menu(`save`)),`small`),r(`設定`,n(()=>this.menu(`settings`)),`small`));for(let[e,t]of[...this.gearPop.children].map((e,t)=>[e,[`overview`,`bag`,`quest`,`save`,`settings`][t]]))e.dataset.menu=t;let i=f(`gear`,`選單`,()=>(z.sfx(o.click),this.toggleGear()),`small gear`,!1,`⚙`);i.title=`選單（地圖、背包、任務、存檔、設定）`;let a=p(`div.hud-menu`,null,this.inviteBtn,i,this.gearPop);this.el=p(`div.world-hud`,null,p(`div.hud-top.skel-top`,null,p(`div.st-left`,null,a,this.whoEl),this.facesEl,this.timeEl,this.dayEl,r(`⌛`,()=>this.menu(`endTurn`),`small round hud-end st-end`)),this.subEl,this.questEl,this.guideBackBtn,this.heroesEl,this.bottomEl,p(`div.end-tip`,null,`按上方 ⌛ 結束回合`),this.toastEl,this.modalEl),e.append(this.el),document.addEventListener(`pointerdown`,this.outsideGear,!0)}setDungeon(e){this.dungeon=e}setGuideBack(e){this.guideBackBtn.hidden=e===null,e!==null&&(this.guideBackBtn.textContent=`回到${e}`),this.el.classList.toggle(`guiding`,e!==null)}setInvite(e){this.inviteBtn.classList.toggle(`hidden`,!e)}menu(e){z.sfx(o.click),this.handlers.onMenu?.(e)}toggleGear(e){let t=e??this.gearPop.hidden===!0;this.gearPop.hidden=!t,this.el.classList.toggle(`gear-open`,t)}setActionAnchor(e){this.anchorFn=e,this.tickAnchor()}tickAnchor=()=>{this.anchorRaf&&cancelAnimationFrame(this.anchorRaf),this.anchorRaf=0;let e=this.bottomEl,t=!this.rolling&&this.anchorFn&&e.querySelector(`.hud-bottom-row`)?this.anchorFn():null,n=window.innerWidth,r=window.innerHeight,i=!!t&&t.y>120&&t.y<r-230&&t.x>80&&t.x<n-80;if(i!==this.anchorOn&&(this.anchorOn=i,e.classList.toggle(`anchored`,i),i||(e.style.left=``,e.style.top=``,this.anchorXY=``)),i&&t){let n=Number(document.documentElement.style.getPropertyValue(`--ui-zoom`))||1,r=`${Math.round(t.x/n)},${Math.round(t.y/n)}`;if(r!==this.anchorXY){this.anchorXY=r;let[t,n]=r.split(`,`);e.style.left=`${t}px`,e.style.top=`${n}px`}}this.anchorFn&&!this.disposed&&(this.anchorRaf=requestAnimationFrame(this.tickAnchor))};toggleQuest(){this.questOpen=!this.questOpen,this.questEl.classList.toggle(`collapsed`,!this.questOpen)}drawn=new Map;changed(e,t){let n=JSON.stringify(t)??``;return this.drawn.get(e)!==n&&(this.drawn.set(e,n),!0)}setState(e){this.vm=e,this.paintTop(e),this.el.classList.toggle(`night`,e.time.night),this.rolling||this.renderBottom()}paintTop(e){let t=this.dungeon?JSON.stringify(this.dungeon):``;this.changed(`party`,[e.heroes,e.activeHero])&&(k(this.heroesEl),this.heroesEl.dataset.n=String(e.heroes.length),e.heroes.forEach(t=>this.heroesEl.append(Sf({...t,active:t.id===e.activeHero},{onClick:()=>this.handlers.onHeroClick?.(t.id),onFace:()=>(z.sfx(o.click),this.handlers.onHeroFocus?.(t.id)),onBag:()=>(z.sfx(o.click),this.handlers.onHeroClick?.(t.id))}).el)));let n=e.heroes.find(t=>t.id===e.activeHero);if(this.changed(`top`,[e.heroes.map(e=>[e.id,e.name,e.down,e.portrait]),e.activeHero,e.time,t,e.where])){k(this.whoEl),n&&this.whoEl.append(p(`b`,null,n.name),p(`small`,null,`的回合`)),k(this.facesEl),(n?[n,...e.heroes.filter(e=>e!==n)]:e.heroes).forEach((e,t)=>{let r=p(`div.st-face`,{class:`${t===0&&n?`now`:``}${e.down?` down`:``}`,title:`${e.name}（點一下看他在哪）`,"data-hero":e.id},g(m(e.id,e.portrait),{text:e.name.slice(0,1),face:!0}));r.addEventListener(`click`,()=>(z.sfx(o.click),this.handlers.onHeroFocus?.(e.id))),this.facesEl.append(r)}),k(this.dayEl),this.dayEl.append(g([e.time.night?`icon:night`:`icon:day`],{text:e.time.night?`夜`:`日`}),p(`span`,null,`第 ${e.time.day} 天`)),k(this.timeEl),this.timeEl.append(this.dungeon?Rp(this.dungeon):Pp(e.time)),this.el.classList.toggle(`in-dungeon`,!!this.dungeon),k(this.subEl);let t=p(`div.cb-chaos`,{title:e.time.chaos>=3?`紫霧籠罩全國`:`紫霧 ${e.time.chaos} 級（${e.time.chaosIn} 回合後變濃）`});for(let n=1;n<=3;n++)t.append(p(`span.cb-seal`,{class:n<=e.time.chaos?`on`:``}));let r=p(`div.cb-lives`,{title:`共用命數`});for(let t=0;t<Math.min(5,e.time.lives);t++)r.append(p(`span.cb-heart`));e.time.lives>5&&r.append(p(`b`,null,`×${e.time.lives}`));let i=this.dungeon?.name??((e.where??``).split(`・`)[0]||`　`);this.subEl.append(t,p(`div.cb-place`,null,i),r)}this.changed(`quest`,e.quest??null)&&(k(this.questEl),e.quest&&this.questEl.append(Ip(e.quest,this.handlers.onQuestGuide))),this.questEl.classList.toggle(`collapsed`,!this.questOpen)}renderBottom(){k(this.bottomEl);let e=this.vm;if(!e)return;let t=e.heroes.find(t=>t.id===e.activeHero),n=p(`div.hud-bottom-row`);if(this.el.classList.toggle(`end-ready`,!this.waiting&&!e.canRollMove&&e.stepsLeft===0),this.waiting){n.append(p(`div.hud-who`,null,p(`b`,null,t?.name??``),` 行動中・${this.waiting}（你只能看）`)),this.bottomEl.append(n);return}e.canRollMove?n.append(r(e.moveCheck?.title===`開船`?`擲開船`:e.moveCheck?.title===`熱氣球`?`擲飛行`:`擲移動`,()=>void this.startMoveRoll(),`primary big`)):e.rollBlocked?n.append(p(`div.steps-left.blocked`,null,e.rollBlocked)):e.stepsLeft===0?n.append(p(`div.steps-left.done`,null,`步數用完了，按上方 `,p(`b`,null,`⌛`),` 結束回合`)):e.stepsLeft!==void 0&&n.append(p(`div.steps-left`,null,`剩 `,p(`b`,null,String(e.stepsLeft)),` 步`,p(`small`,null,`　點地圖移動`)));let i=[];for(let e of this.actions)if(e.disabled){let t=r(e.label,()=>void 0,`small`,!0);t.title=e.disabled,n.append(t),i.push(`${e.label}：${e.disabled}`)}else{let t=r(e.label,()=>(z.sfx(o.click),this.handlers.onAction?.(e.id)),e.primary?`gold`:`small`);t.dataset.action=e.id,n.append(t)}i.length&&this.bottomEl.append(p(`div.hud-why`,null,i.join(`　・　`))),n.childElementCount&&this.bottomEl.append(n)}waiting=null;setWaiting(e){e!==this.waiting&&(this.waiting=e,this.rolling||this.renderBottom())}setActions(e){this.actions=e,this.rolling||this.renderBottom()}moveCheck(e){return{title:e.title??`移動`,stat:e.stat??`spd`,chance:e.chance,slots:e.slots,need:0,maxLock:e.focusBonus?e.maxLock:Math.min(e.maxLock,e.slots),focusBonus:e.focusBonus,unit:`步`,describe:(t,n,r,i=0)=>`可以走 ${Math.min(e.maxSteps??99,e.base+t+i)} 步`}}async startMoveRoll(){let e=this.vm?.moveCheck??{chance:50,slots:4,base:0,maxLock:0},t=await this.roll(this.moveCheck(e),e=>this.handlers.onRollMove?this.handlers.onRollMove(e):[],{rollLabel:`GO`,foldable:!0});return this.handlers.onMoveRolled?.(t),t}async roll(e,t,n={}){this.rolling=!0,this.el.classList.add(`rolling`);let r=!1;k(this.bottomEl);let i=()=>void 0,a=new Promise(e=>{i=()=>{r=!0,e(null)}}),o=new Zd(e,{allowLock:!0,compact:!0,onCancel:()=>i(),rollLabel:n.rollLabel}),s=p(`div.hud-roller`,null,o.el);n.foldable&&this.makeFoldable(s,o.el),this.bottomEl.append(s);let c=!1;this.cancelPending=()=>{c||i()};let l=await Promise.race([o.run(e=>(c=!0,s.classList.remove(`folded`),t(e))),a]);return this.cancelPending=null,r||await new Promise(e=>setTimeout(e,500)),this.rolling=!1,this.el.classList.remove(`rolling`),this.renderBottom(),l}makeFoldable(e,t){let n=(t,n)=>{e.classList.toggle(`folded`,t),n&&h(Np,t?`1`:`0`),window.dispatchEvent(new Event(`qk-safe-area`))},r=f(`fold`,`縮起來`,()=>(z.sfx(o.click),n(!0,!0)),`small roll-fold`);t.querySelector(`.roller-head`)?.append(r);let i=()=>(z.sfx(o.click),n(!1,!0)),a=p(`div.roll-tab`,{role:`button`,tabindex:0,title:`展開擲骰子移動`,onclick:i},p(`span.roll-tab-text`,null,`擲骰子移動`),f(`unfold`,`展開`,i,`small`));a.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&i()}),e.prepend(a),n(Fe(Np)===`1`,!1)}cancelPending=null;get rollWaiting(){return!!this.cancelPending}cancelRoll(){this.cancelPending?.()}encounterResolve=null;closeEncounter(){k(this.modalEl),this.modalEl.classList.remove(`open`);let e=this.encounterResolve;this.encounterResolve=null,e?.(null)}chooseEncounter(e){return k(this.modalEl),this.encounterResolve?.(null),new Promise(t=>{this.encounterResolve=t,this.modalEl.append(Sp(e,e=>{k(this.modalEl),this.modalEl.classList.remove(`open`),this.encounterResolve=null,t(e)})),this.modalEl.classList.add(`open`)})}toastQueue=[];toast(e){if(this.toastEl.childElementCount>=4){this.toastQueue.push(e),this.toastQueue.length>6&&this.toastQueue.shift();return}let t=p(`div.toast`,null,e);this.toastEl.append(t),window.setTimeout(()=>{t.remove();let e=this.toastQueue.shift();e!==void 0&&this.toast(e)},2700)}dispose(){this.disposed=!0,this.anchorRaf&&cancelAnimationFrame(this.anchorRaf),document.removeEventListener(`pointerdown`,this.outsideGear,!0),this.el.remove()}outsideGear=e=>{!this.gearPop.hidden&&!(e.target instanceof Node&&this.gearPop.parentElement?.contains(e.target))&&this.toggleGear(!1)}};function Rp(e){let t=p(`div.room-track`);return e.rooms.forEach((n,r)=>{let i=r<e.current,a=(i?j(`icon:room_cleared`):null)??j(`icon:room_${n.kind}`);t.append(p(`span.rt-room`,{class:i?`done`:r===e.current?`now`:``,title:n.label},a?p(`img`,{src:a,alt:n.label}):n.label.slice(0,1),i?p(`i`,null,`✔`):null))}),t.append(p(`span.rt-count`,null,`${e.current+1}-${e.rooms.length}`)),t}var zp=(e,t)=>Math.max(Math.abs(e.q-t.q),Math.abs(e.r-t.r),Math.abs(e.q+e.r-t.q-t.r));function Bp(e){return e.heroes.find(t=>t.id===e.turn.hero)??e.heroes[0]}function Vp(e,t,n){if(!t.questById.get(n))return{state:`none`,targets:[]};if(e.quest.done.includes(n))return{state:`done`,targets:[]};let r=e.map.locations.filter(t=>t.quest===n&&!e.locs[t.id]?.done&&!e.locs[t.id]?.cleared);if(!r.length)return{state:`none`,targets:[]};let i=[];try{i=te(e,t).active.map(e=>e.id)}catch{i=[]}if(!i.includes(n))return{state:`locked`,targets:[]};let a=Bp(e),o=r.map(e=>({q:e.q,r:e.r,loc:e.id,name:Dr(t,e)}));return a&&o.sort((e,t)=>zp(e,a)-zp(t,a)||(e.loc<t.loc?-1:1)),{state:`go`,targets:o}}function Hp(e,t,n){if(!e)return e;let r=e=>{if(!e)return;let r=Vp(t,n,e).state;return r===`go`||r===`locked`?r:void 0};return{...e,guide:r(e.id),steps:e.steps?.map(e=>({...e,guide:r(e.id)}))}}function Up(e,t,n){return e<=0?-1:!n||n.step!==t?0:(n.index+1)%e}function Wp(e,t){let n=_e(e);return t.map(e=>({q:n.qs[e],r:n.rs[e]}))}function Gp(e,t,n,r){if(n.q===r.q&&n.r===r.r)return _e(t).index(n.q,n.r)>=0?[_e(t).index(n.q,n.r)]:null;try{let i={...n,aboard:!1,vehicle:void 0};return ie(e,t,i,r.q,r.r)?.path??null}catch{return null}}function Kp(e,t,n){let r=Bp(e);if(!r)return{path:[]};if(r.q===n.q&&r.r===n.r)return{path:[{q:r.q,r:r.r}]};if(r.aboard&&r.vehicle===`balloon`)try{let i=ie(t,e,r,n.q,n.r);if(i)return{path:Wp(e,i.path)}}catch{}let i=Gp(t,e,r,n);if(i)return{path:Wp(e,i)};let a=e.map.locations.filter(t=>t.kind===`portal`&&e.locs[t.id]?.lit),o=n=>{let i=null;for(let a of n){let n=Gp(t,e,r,a);n&&(!i||n.length<i.length)&&(i=n)}return i};if(a.length>=2){let i=a.filter(i=>Gp(t,e,{...r,q:i.q,r:i.r},n)),s=a.filter(e=>!i.includes(e)),c=i.length?o(s):null;if(c)return{path:Wp(e,c),note:`可用傳送石`}}let s=o(e.map.locations.filter(e=>Je(t,e)));return s?{path:Wp(e,s),note:`要搭船`}:{path:[],note:r.aboard?`要搭船`:`走路到不了`}}var qp=1,Jp=class{host;last=null;on=!1;hero=null;plate;plateName;plateNote;target=null;raf=0;plateXY=``;retry=0;safe={l:0,r:0,t:0,b:0};avoid=[];plateWH=null;constructor(e){this.host=e,this.plateName=p(`b.qg-name`),this.plateNote=p(`small.qg-note`),this.plate=p(`div.qg-plate`,{hidden:!0},p(`i.qg-pin`),this.plateName,this.plateNote),e.layer.append(this.plate)}get active(){return this.on}go(e){let t=this.host.view(),n=this.host.state();if(!t||n.mode.kind!==`overworld`)return;let r=Vp(n,this.host.reg,e);if(r.state===`locked`){this.host.toast(`還不知道在哪裡`);return}if(r.state!==`go`||!r.targets.length)return;if(t.isOverview()){t.setOverview(!1),window.clearTimeout(this.retry),this.retry=window.setTimeout(()=>this.go(e),950);return}z.sfx(o.click);let i=Up(r.targets.length,e,this.last),a=r.targets[i];this.last={step:e,index:i};let s=Kp(n,this.host.reg,a);t.guideShow(s.path,a,qp),this.on=!0,this.hero=n.turn.hero,this.host.hud.setGuideBack(this.host.heroName(n.turn.hero)),this.target=a,this.plateName.textContent=r.targets.length>1?`${a.name}（${i+1}／${r.targets.length}）`:a.name,this.plateNote.textContent=s.note??``,this.plateNote.hidden=!s.note,this.plate.hidden=!1,this.plate.classList.remove(`out`),this.plateXY=``;let c=this.host.layer.closest(`.game-root`)??document,l=w(c),u=c.querySelector(`.world-hud .hud-quest .quest-track`)?.getBoundingClientRect(),d=c.querySelector(`.world-hud .qg-back`)?.getBoundingClientRect();this.safe={l:l.left,r:l.right,t:l.topCenter,b:l.bottom},this.avoid=[u,d].filter(e=>!!e&&e.width>1).map(e=>({l:e.left-4,r:e.right+4,t:e.top-4,b:e.bottom+4})),this.plateWH=null,this.raf||=requestAnimationFrame(this.tick)}back(){if(!this.on)return;let e=this.host.state(),t=e.heroes.find(t=>t.id===e.turn.hero);this.stop(),this.host.view()?.guideEnd(t?{q:t.q,r:t.r}:void 0)}release(){return this.on?(this.stop(),this.host.view()?.guideEnd(),!0):!1}stop(){this.on=!1,this.hero=null,window.clearTimeout(this.retry),this.host.hud.setGuideBack(null),this.hidePlate()}hidePlate(){this.plate.hidden=!0,this.target=null}tick=()=>{this.raf=0;let e=this.host.view(),t=this.host.state();if(this.on&&(!e||t.mode.kind!==`overworld`||e.isOverview()||t.turn.hero!==this.hero))this.release();else{if(this.target&&e){let t=e.guideMarkAlpha();if(t<=0)this.hidePlate();else{t<.99&&this.plate.classList.add(`out`);let n=e.isPaused()?null:e.screenPosition(this.target,1.1);if(n){this.plateWH??={w:this.plate.offsetWidth,h:this.plate.offsetHeight};let{w:e,h:t}=this.plateWH,r={l:n.x-e/2,r:n.x+e/2,t:n.y-t,b:n.y},i=this.safe;(r.l<i.l||r.r>i.r||r.t<i.t||r.b>i.b||this.avoid.some(e=>r.r>e.l&&r.l<e.r&&r.b>e.t&&r.t<e.b))&&(n=null)}let r=n?`${Math.round(n.x)},${Math.round(n.y)}`:``;r!==this.plateXY&&(this.plateXY=r,this.plate.style.visibility=n?``:`hidden`,n&&(this.plate.style.transform=`translate(${Math.round(n.x)}px, ${Math.round(n.y)}px) translate(-50%, -100%)`))}}(this.on||this.target)&&(this.raf=requestAnimationFrame(this.tick))}};dispose(){cancelAnimationFrame(this.raf),this.raf=0,window.clearTimeout(this.retry),this.plate.remove()}};function Yp(e,t,n){return e===`pool`?`泉水苦苦的……${t}扣 ${n} 點生命`:`${t}扣 ${n} 點生命`}function Xp(e,t,n){let r=n;for(let n=0;n<t;n++){let t=e[n].t;t===`combatStart`?r=!0:t===`combatEnd`&&(r=!1)}return r}function Zp(e,n){let{kind:r,heroId:i,name:a,amount:s}=n;z.sfx(r===`pool`?o.poison:o.debuff);let c=r===`pool`?Array.from({length:9},(e,t)=>p(`span.wh-bubble`,{style:`--i:${t}; left:${8+t*37%84}%; animation-delay:${t%5*.12}s`})):[],l=p(`div.world-hurt`,{class:`wh-${r}`},c.length?p(`div.wh-bubbles`,null,...c):null,p(`div.wh-line`,null,Yp(r,a,s)));e.append(l);let u=()=>n.box?.()??I(),d=()=>{let e=u();if(!e)return!1;l.classList.add(`at-actor`);let n=!!document.querySelector(`.xt-hint-host.xt-anchored .xt-hint`);return t(l,e,n?[`right`,`left`,`above`]:[`above`,`right`,`left`]),!0};if(d()){let e=()=>{l.isConnected&&!l.classList.contains(`out`)&&(d(),requestAnimationFrame(e))};requestAnimationFrame(e)}let f=e.querySelector(`.g-hud [data-hero="${i}"]`);return f?.classList.remove(`wh-card-pool`,`wh-card-event`),f&&(f.offsetWidth,f.classList.add(`wh-card-${r}`)),new Promise(e=>{let t=!1,n=()=>{t||(t=!0,l.classList.add(`out`),window.setTimeout(()=>l.remove(),300),window.setTimeout(()=>f?.classList.remove(`wh-card-${r}`),600),e())};l.addEventListener(`pointerdown`,n),window.setTimeout(n,1500)})}var Qp=Br({Game:()=>am,combatSliceStart:()=>lm,hexLine:()=>sm,isCombatRoll:()=>cm,readSaveSlot:()=>E,shoutKeys:()=>mm}),$p=`qiuqiu-king-regions-seen-v1`,em=[`cultDevice`,`chaosGenerator`,`statue`,`sanctum`,`shrine`],tm=[`dungeon`,`cave`,`scourgeLair`,`camp`],nm=`[data-panel^="town"],[data-panel^="event"],[data-panel="dungeon"],[data-panel="device"]`,rm=[`town`,`capital`,`port`],im={town:`進城`,capital:`進城`,port:`進城`,dungeon:`進地城`,cave:`進洞穴`,eventSite:`調查`,camp:`突襲營地`,chaosGenerator:`看看紫霧爐`,scourgeLair:`挑戰災禍`,cultDevice:`看看紫燈籠`,shrine:`參拜`,statue:`看看石像`,sanctum:`看看聖壇`,portal:`看看傳送石`},am=class{reg;st;opts;root;worldEl;hudEl;combatEl;modalEl;dlgEl;view=null;guide=null;hud;combat=null;dialogue;bubbles;unSafe=()=>void 0;director;combatBoss=null;sprites={};manifest={};busy=!1;driver;remoteChain=Promise.resolve();combatContinue=null;lootRemote=null;remoteVictory=null;applyLootRemote(e){this.lootRemote=null,this.st=e.state,x.onEvents(e.events,e.state),this.lootFeedback(e.events),this.combat?.setLoot(wr(this.st,this.reg,e=>this.mine(e))),this.syncLootPanel()}lootPanel=null;openLootPanel(){if(this.lootPanel&&this.modalEl.querySelector(`[data-panel="loot"]`)){this.syncLootPanel();return}let e=new _s(void 0,{onChoice:(e,t)=>{this.exec({type:`lootChoice`,hero:e,choice:t}).then(e=>{e&&this.lootFeedback(e.events)}).finally(()=>this.syncLootPanel())},onContinue:()=>{this.lootPanel=null,this.lootFit?.disconnect(),this.lootFit=null,this.closeModal(),this.refresh()}});this.lootPanel=e,this.showModal(e.el,`loot`),this.lootFit?.disconnect(),this.lootFit=null;let t=e.el.parentElement;t&&typeof ResizeObserver<`u`&&(this.lootFit=new ResizeObserver(()=>this.fitLootPanel()),this.lootFit.observe(t)),this.syncLootPanel()}lootFit=null;fitLootPanel(){let e=this.lootPanel?.el.parentElement;this.lootPanel&&e?.isConnected&&this.lootPanel.fit(0,e.clientHeight)}syncLootPanel(){this.lootPanel&&(this.modalEl.querySelector(`[data-panel="loot"]`)?(this.lootPanel.setLoot(wr(this.st,this.reg,e=>this.mine(e))),this.fitLootPanel()):(this.lootPanel=null,this.lootFit?.disconnect(),this.lootFit=null))}lootFeedback(e){let t=e.find(e=>e.t===`lootChoice`&&e.choice===`use`);if(!t)return;let n=e.filter(e=>e.t===`heal`&&e.unit===t.hero),r=n.reduce((e,t)=>e+t.amount,0),i=e.filter(e=>e.t===`focus`&&e.hero===t.hero).reduce((e,t)=>e+t.amount,0),a=this.reg.items.get(t.item),o=[r>0?`${r} 點生命`:``,i>0?`${i} 點專注`:``].filter(Boolean).join(`、`),s=`${Pr(this.reg,t.hero)}${a?.kind===`herb`?`抽了`:`用了`}${a?.name??`道具`}${o?`，回復 ${o}`:``}`;this.combat?.lootUsed(t.hero,s,r,n.length?n[n.length-1].hp:null),this.lootPanel?.note(s)}encounterOpen=!1;hoverKey=``;tokenPos=new Map;locSig=new Map;disposed=!1;actShown;regionCardSeen=new Set;lowHpSaid=new Set;hungryDay=new Map;shoutCount=0;constructor(e,t){this.opts=t,this.reg=t.reg,this.st=t.state,this.actShown=t.newRun?0:this.st.quest.act,this.regionCardSeen=new Set(hm(this.st.seed)),this.worldEl=p(`div.g-world`),this.hudEl=p(`div.g-hud`),this.combatEl=p(`div.g-combat.hidden`),this.modalEl=p(`div.g-modal`),this.dlgEl=p(`div.g-dialogue`),this.root=p(`div.game-root`,null,this.worldEl,this.hudEl,this.combatEl,this.modalEl,this.dlgEl),e.append(this.root),this.hud=new Lp(this.hudEl,{onRollMove:e=>this.rollResolver({type:`rollMove`,hero:this.st.turn.hero,focus:e},`move`),onMoveRolled:e=>{e?this.flushPending(`move`).then(()=>this.zoomToReach()):this.pending=null},onMenu:e=>this.onMenu(e),onHeroClick:e=>this.openEquip(e),onHeroFocus:e=>this.safe3d(`鏡頭`,()=>this.flyToHero(e)),onAction:e=>void this.onAction(e),onQuestGuide:e=>this.safe3d(`主線導引`,()=>this.guide?.go(e)),onGuideBack:()=>this.safe3d(`主線導引`,()=>this.guide?.back())}),this.hud.setActionAnchor(()=>{let e=this.actor(),t=e?this.st.heroes.find(t=>t.id===e):void 0;return t&&this.view?this.view.screenPosition({q:t.q,r:t.r},0):null}),new MutationObserver(()=>{let e=!!this.modalEl.querySelector(nm);this.setPause(`panel`,e),this.root.classList.toggle(`panel-open`,e)}).observe(this.modalEl,{childList:!0}),this.dialogue=new dp(this.dlgEl),this.bubbles=new fp(this.root),this.skillHost=p(`div.skill-pop-host`),this.root.append(this.skillHost),this.director=new mp(this.reg),this.director.onPlayed=e=>x.noteScene(e),x.init({reg:this.reg,host:this.root}),this.unSafe=_(this.root),u(()=>{if(!this.view||this.view.isPaused())return null;let e=this.actor(),t=e?this.st.heroes.find(t=>t.id===e):void 0,n=t?this.view.screenPosition({q:t.q,r:t.r},0):null,r=t?this.view.screenPosition({q:t.q,r:t.r},1.4):null;return n&&r?we(n,r):null}),x.setHintAnchor(()=>this.st.mode.kind!==`overworld`||window.innerWidth<=700||this.modalEl.querySelector(`.panel, .modal-back`)?null:I()),this.driver=t.driver??new _p(this.reg),Ud(()=>this.rollWho(this.actor()??this.st.combat?.turn??null)),this.driver.onRemote=e=>{if(e.events.some(e=>e.t===`lootChoice`))return!this.combatContinue&&!this.lootPanel?(this.lootRemote=e,Promise.resolve()):(this.applyLootRemote(e),Promise.resolve());let t,n=new Promise(e=>t=e);return this.remoteChain=this.remoteChain.then(async()=>{for(;this.busy;)await M(120);this.busy=!0,this.remoteVictory=t;try{this.st=e.state,x.onEvents(e.events,e.state),await this.playWorld(e.events,e.before)}finally{this.remoteVictory=null,this.busy=!1,this.refresh()}}),Promise.race([this.remoteChain,n])},this.driver.onReset=(e,t)=>{this.st=e,this.toast(`重新同步：${t}`),this.closeModal(),this.syncWorld(!1),this.refresh()}}mine(e){return!!e&&this.driver.canAct(e)}async start(){this.manifest=await Le();let e=gp(),t=p(`div.g-loading`,null,e?p(`img.g-loading-art`,{src:e,alt:``}):null,p(`div.g-loading-text`,null,`大地圖準備中……`),x.tipElement());this.root.append(t);try{this.view=new kd(this.worldEl,{keyboard:!0,quality:ye()});let e=Pe(this.st);this.view.setMap(e.tiles,this.worldLocations()),this.view.onTileClick=(e,t)=>void this.onTileClick(this.markerTile(t)??e),this.view.onThunder=e=>z.sfx(`sfx:bossdoor`,.2+.25*e),this.view.onTokenClick=(e,t)=>{let n=t===`hero`?this.st.heroes.find(t=>t.id===e):this.st.tokens.find(t=>t.id===e),r=n?this.st.map.tiles.find(e=>e.q===n.q&&e.r===n.r):void 0;if(!r)return;let i=this.st.heroes.find(e=>e.id===this.actor());t===`hero`&&i&&i.q===r.q&&i.r===r.r?this.st.mode.kind===`overworld`&&this.st.turn.rolled&&this.toast(`點地上的格子走過去`):this.onTileClick(r)},this.worldEl.addEventListener(`pointermove`,e=>this.lastPointer=e),this.view.onTileHover=e=>this.onTileHover(e&&(this.markerTile(this.lastPointer??void 0)??e));let t=new URL(P(``),location.href).href;this.sprites=await vd(t,this.st.heroes.map(e=>e.id),this.manifest)}catch(e){console.error(`3D 大地圖建不起來`,e),this.toast(`3D 大地圖載入失敗（介面照常）`)}this.syncWorld(!0),await this.view?.warmup().catch(e=>console.warn(`3D 暖機失敗`,e)),t.classList.add(`out`),window.setTimeout(()=>t.remove(),500),this.startQuestMarker(),this.guide=new Jp({view:()=>this.view,state:()=>this.st,reg:this.reg,hud:this.hud,layer:this.hudEl,heroName:e=>Pr(this.reg,e),toast:e=>this.toast(e)}),this.refresh();for(let e of this.st.heroes){let t=this.st.map.tiles.find(t=>t.q===e.q&&t.r===e.r);t&&(this.director.markRegionSeen(t.region),this.markRegionCard(t.region))}if(this.opts.newRun){this.busy=!0;try{for(let e of this.director.openingIds(this.st.heroes.map(e=>e.id)))if(await this.playScene(e,this.st.heroes.map(e=>e.id)),this.dialogue.wasSkipped)break}finally{this.busy=!1}}if(this.opts.newRun&&this.actShown<this.st.quest.act&&await this.showActCard(this.st.quest.act),this.opts.openingEvents?.length){x.onEvents(this.opts.openingEvents,this.st),this.busy=!0;try{await this.playWorld(this.opts.openingEvents,this.st)}finally{this.busy=!1}}this.refresh()}actor(){return Te(this.st)}async exec(e){let t=await this.driver.submit(e,this.st);return this.onCommand?.(e,`error`in t?{error:t.error}:{events:t.events,state:t.state}),`error`in t?(this.toast(t.error),null):(this.st=t.state,x.onEvents(t.events,t.state),{before:t.before,events:t.events})}onCommand=null;onScene=null;get idle(){return!this.busy&&!this.pending&&!this.disposed}get closed(){return this.disposed}autoTile(e,t){let n=this.st.map.tiles.find(n=>n.q===e&&n.r===t);return n?this.onTileClick(n):Promise.resolve()}sendCommand(e){return this.send(e)}tileScreen(e,t){return this.view?.screenPosition({q:e,r:t},0)??null}syncWorldForTest(){this.syncWorld(!1),this.focusHero(this.st.turn.hero)}reach(){let e=this.actor();return e?a(this.st,e,this.reg):[]}legal(){let e=this.actor();return e?v(this.st,{hero:e},this.reg):[]}async send(e){if(this.busy)return!1;this.busy=!0;try{let t=await this.exec(e);return t?(await this.playWorld(t.events,t.before),!0):!1}finally{this.busy=!1,this.refresh()}}pending=null;async rollResolver(e,t){let n=await this.exec(e);if(!n)return[];this.pending=n;let r=n.events.find(e=>e.t===`roll`&&(e.purpose===t||e.purpose.startsWith(t)));return r?mr(r.roll):[]}async flushPending(e){let t=this.pending;if(this.pending=null,!t)return this.refresh();let n=!1,r=t.events.filter(t=>!n&&e&&t.t===`roll`&&t.purpose.startsWith(e)?(n=!0,!1):!0);this.busy=!0;try{await this.playWorld(r,t.before)}finally{this.busy=!1,this.refresh()}}async playWorld(e,t){if(e.some(e=>e.t===`lootChoice`)){this.combat?.setLoot(wr(this.st,this.reg,e=>this.mine(e)));return}let n=e.find(e=>e.t===`weaponSwap`);if(n&&this.st.combat){let e=jr(this.st,this.reg,this.mine(this.actor())?this.actor():null,this.combatBg());e&&this.combat?.setState({...e,banner:`${Pr(this.reg,n.hero)} 換上 ${this.reg.items.get(n.item)?.name??`武器`}`})}else{for(let n=0;n<e.length;n++){let r=e[n];if(this.disposed)return;if(r.t===`roll`&&cm(r.purpose)&&(t.combat||this.st.combat)){let r=n;for(;r<e.length&&e[r].t!==`combatEnd`;)r++;let i=Math.min(e.length,r+1);await this.playCombat(e.slice(n,i),t),n=i-1}else if(r.t===`damage`&&!Xp(e,n,!!t.combat)){let t=e.slice(0,n).some(e=>e.t===`message`&&e.text===om);r.amount>0&&await Zp(this.root,{kind:t?`pool`:`event`,heroId:r.unit,name:Pr(this.reg,r.unit),amount:r.amount,box:()=>this.hurtBox(r.unit)})}else if(r.t===`skill`&&t.combat){let r=n;for(;r<e.length&&e[r].t!==`combatEnd`;)r++;let i=Math.min(e.length,r+1);await this.playCombat(e.slice(n,i),t),n=i-1}else switch(r.t){case`skill`:await M(le(this.skillHost,{heroId:r.hero,name:r.name,text:r.text}));break;case`combatStart`:case`combatTurn`:case`attack`:case`damage`:case`unitDown`:case`flee`:{let r=n;for(;r<e.length&&e[r].t!==`combatEnd`;)r++;let i=Math.min(e.length,r+1);await this.playCombat(e.slice(n,i),t),n=i-1;break}case`roll`:r.purpose===`move`&&!this.mine(r.who)?await this.showRoll(r):r.purpose===`move`?this.toast(`擲出 ${r.roll.hits} 格`):r.purpose.startsWith(`attack`)||await this.showRoll(r);break;case`move`:{let e=r.path.map(([e,t])=>({q:e,r:t})),t=r.boat&&r.heroes?.length?r.heroes:[r.hero];r.boat?z.sfx(o.boat):z.sfx(o.step),this.guide?.release();let n=t.some(e=>this.st.heroes.find(t=>t.id===e)?.vehicle===`balloon`),i=e.length===2&&Math.max(Math.abs(e[0].q-e[1].q),Math.abs(e[0].r-e[1].r),Math.abs(e[0].q+e[0].r-e[1].q-e[1].r))>1;if(this.view&&!this.view.isPaused()){let a=Promise.resolve();try{a=(i?Promise.all(t.map(t=>this.view.playTeleport(t,e[1]))):Promise.all(t.map((t,i)=>this.view.playMove(t,e,{boat:r.boat&&!n,fly:n,follow:i===0})))).catch(e=>console.error(`3D 走路動畫出錯，遊戲照常往下`,e))}catch(e){console.error(`3D 走路動畫出錯，遊戲照常往下`,e)}i&&z.sfx(o.teleport),await Promise.race([a,M(2500+e.length*700)])}this.syncWorld(!1);let a=r.path[r.path.length-1],s=a?this.st.map.tiles.find(e=>e.q===a[0]&&e.r===a[1]):void 0;s&&(this.regionCardSeen.has(s.region)||(this.markRegionCard(s.region),await this.showRegionCard(s.region)),this.bubbles.say(this.director.regionBanter(s.region,r.hero,this.awake())));break}case`reveal`:this.syncFog();break;case`turnStart`:{this.syncWorld(!1),this.guide?.release(),this.focusHero(r.hero),this.toast(`${Pr(this.reg,r.hero)} 的回合`),this.autosave();let e=this.st.heroes.find(e=>e.id===r.hero),t=l(this.st).day;e&&e.life===`ok`&&e.focus<=0&&this.hungryDay.get(r.hero)!==t&&(this.hungryDay.set(r.hero,t),this.shout(r.hero,`hungry`));break}case`night`:this.safe3d(`晝夜`,()=>this.view?.setTimeOfDay(r.night?`night`:`day`)),this.toast(r.night?`天黑了：怪物變多，小心伏擊`:`天亮了`),r.night&&this.bubbles.say(this.director.banter(`night`,this.awake(),this.awake()));break;case`newDay`:this.toast(`第 ${r.day} 天`);break;case`chaos`:r.delta&&this.toast(r.delta>0?`紫霧變濃了（${r.level} 級）`:`紫霧變淡了（${r.level} 級）`),r.delta>0&&this.bubbles.say(this.director.banter(`chaos`,this.awake(),this.awake()));break;case`totalChaos`:this.toast(`紫霧籠罩全國！大地被詛咒了`),this.safe3d(`詛咒格`,()=>this.view?.setCursed(this.st.chaos.cursed.map(e=>this.st.map.tiles[e]).filter(Boolean))),this.bubbles.say(this.director.banter(`chaosfull`,this.awake(),this.awake())),this.syncWorld(!1);break;case`scourge`:{let e=t.scourges?.find(e=>e.id===r.id);if(r.awake&&!r.defeated&&!r.sealed&&e&&!e.awake){let e=this.director.scourgeScene(this.reg.scourges.get(r.id)?.effect?.key);e&&await this.playScene(e,this.awake())}break}case`boatBought`:this.syncWorld(!1),this.modalEl.querySelector(`[data-panel="town-port"]`)&&this.st.mode.kind===`town`&&this.openService(`port`);break;case`restHeal`:r.amount>0&&this.toast(`${Pr(this.reg,r.hero)} 休息補了 ${r.amount} 血`);break;case`sneak`:this.toast(r.ok?`偷偷溜過去了`:`被發現了！`),r.ok&&z.sfx(o.stealth);break;case`retreat`:this.toast(`撤退了`),this.syncWorld(!1);break;case`levelUp`:z.sfx(o.upgrade),this.toast(`${Pr(this.reg,r.hero)} 升到 ${r.level} 級！`),this.bubbles.say(this.director.banter(`levelup`,[r.hero],this.party()));break;case`item`:r.delta>0&&this.toast(`得到 ${this.reg.items.get(r.item)?.name??`道具`}`);break;case`heroDown`:this.toast(r.savedBySanctum?`${Pr(this.reg,r.hero)} 被聖壇救了一命！`:`${Pr(this.reg,r.hero)} ${r.permanent?`永遠倒下了……`:`倒下了`}`),r.savedBySanctum||this.bubbles.say(this.director.downBanter(r.hero,this.party())),this.syncWorld(!1);break;case`revive`:this.toast(`${Pr(this.reg,r.hero)} 站起來了！`),this.bubbles.say(this.director.banter(`revived`,[r.hero],this.party())??this.director.banter(`reviver`,[r.by],this.party())),this.syncWorld(!1);break;case`lives`:this.toast(`剩下命數 ${r.lives}`);break;case`teleport`:{z.sfx(o.teleport);let e=se(this.st,r.to);if(e&&this.view&&!this.view.isPaused())try{await Promise.race([this.view.playTeleport(r.hero,{q:e.q,r:e.r}).catch(e=>console.error(`3D 傳送動畫出錯`,e)),M(3e3)])}catch(e){console.error(`3D 傳送動畫出錯`,e)}this.bubbles.say(this.director.banter(`teleport`,[r.hero],this.party())),this.syncWorld(!1);break}case`sail`:z.sfx(o.boat),this.toast(`開船到 ${Lr(Ee(this.reg,r.to),`別的港口`,r.to)}`),this.bubbles.say(this.director.banter(`boat`,r.heroes,this.party())),this.syncWorld(!1);break;case`kraken`:z.sfx(o.hitHeavy),this.toast(`大海怪從海底冒出來了！`);break;case`gate`:z.sfx(o.teleport),this.toast(`傳送門打開了（站在門口按「穿過傳送門」）`),this.syncWorld(!1);break;case`balloon`:this.toast(`熱氣球就停在古井鎮，可以飛越大海與高山了`),this.syncWorld(!1);break;case`pray`:this.toast(r.hits>=2?`小祠的老貓幫你修好菸斗，專注也補滿了`:r.hits===1?`拜了一拜，精神好一點`:`靜靜拜了一拜`);break;case`pipe`:z.sfx(o.upgrade),this.toast(`菸斗升到 ${r.level} 級，草藥更有效了`);break;case`boat`:z.sfx(o.boat),r.aboard&&r.vehicle!==`balloon`&&this.bubbles.say(this.director.banter(`boat`,r.heroes,this.party())),this.syncWorld(!1);break;case`portalLit`:this.toast(`傳送石亮起來了`),this.bubbles.say(this.director.banter(`portal`,[this.st.turn.hero],this.party())),this.syncWorld(!1);break;case`locationDone`:case`tokenAdd`:case`tokenRemove`:this.syncWorld(!1);break;case`devote`:this.toast(`供奉了聖壇，生命補滿`),this.bubbles.say(this.director.banter(`sanctum`,[r.hero],this.party()));break;case`quest`:r.status===`done`?(z.sfx(o.reward),this.toast(`主線完成：${this.reg.questById.get(r.step)?.title??`主線`}`)):(await this.maybeActCard(r.step),this.toast(`新的主線：${this.reg.questById.get(r.step)?.title??`主線`}`));break;case`job`:{this.toast(r.status===`done`?`支線完成！`:r.status===`failed`?`支線過期了`:`接下支線`);let e=this.st.jobs.find(e=>e.id===r.job);r.status===`done`&&e?this.bubbles.say(this.director.townLine([`board_${e.kind}_done`],this.awake())):r.status===`failed`&&this.bubbles.say(this.director.townLine([`board_expired`],this.awake()));break}case`lore`:r.amount>0&&this.toast(`傳說點＋${r.amount}`);break;case`scene`:if(await this.maybeActCard(r.step),await this.playScene(r.id,r.id.startsWith(`ending_`)?this.party():this.speakers()),r.id===`ending_victory`&&!this.dialogue.wasSkipped){for(let e of this.director.endingTail(this.st.heroes))if(await this.playScene(e.id,e.party),this.dialogue.wasSkipped)break}break;case`enterTown`:{let e=this.st.map.tiles.find(e=>this.st.heroes.some(t=>t.id===r.hero&&t.q===e.q&&t.r===e.r));this.bubbles.say(this.director.townLine([`town_${r.town}_chat`,e?`town_${e.region}_chat`:``],this.party()));break}case`dungeonLeave`:x.dismissTip();break;case`dungeonEnter`:{x.dismissTip();let e=this.director.dungeonScene(r.dungeon);e&&await this.playScene(e,r.heroes);break}case`gameOver`:r.result===`defeat`&&await this.playScene(`ending_defeat`,this.party());break;case`message`:if(/^全面(混沌|魔氣|紫霧)/.test(r.text)||r.text===om)break;this.toast(r.text)}}!this.disposed&&this.st.mode.kind!==`combat`&&this.lowHpBanter()}}lowHpBanter(){for(let e of this.st.heroes){if(e.life!==`ok`)continue;let t=Oe(this.st,e.id,this.reg).hpMax;if(e.hp>t*.3){this.lowHpSaid.delete(e.id);continue}if(this.lowHpSaid.has(e.id))continue;this.lowHpSaid.add(e.id);let n=this.director.banter(`lowhp`,[e.id],this.awake());if(n){this.bubbles.say(n);return}}}async showRoll(e){let t=new Zd(yr(e,this.reg),{allowLock:!1,hideRollButton:!0,who:this.rollWho(e.who)}),n=p(`div.g-roll-pop`,null,t.el);this.root.append(n),await t.reveal(mr(e.roll)),await M(200),n.remove()}rollWho(e){if(!e)return null;let t=this.st.heroes.find(t=>t.id===e);if(t)return{name:Pr(this.reg,t.id),portrait:m(t.id)};let n=this.st.combat?.units.find(t=>t.id===e);if(n?.monster){let e=this.reg.monsters.get(n.monster);return{name:Lr(n.name||e?.name,`怪物`,n.monster),portrait:e?.sprite??`monster:${n.monster}`,monster:!0}}return null}ensureCombat(){return this.combat||=new zf(this.combatEl,{onMove:async({moveId:e,target:t,locked:n})=>{let r=this.actor();r&&await this.combatCmd({type:`attack`,hero:r,move:e,target:t,focus:n})},onItem:async({itemId:e,target:t})=>{let n=this.actor();n&&await this.combatCmd({type:`useItem`,hero:n,item:e,target:t})},onFlee:async({locked:e})=>{let t=this.actor();t&&await this.combatCmd({type:`flee`,hero:t,focus:e})},onSwap:async({itemId:e})=>{let t=this.actor();t&&await this.combatCmd({type:`swapWeapon`,hero:t,item:e})},onSkill:async({skillId:e})=>{let t=this.actor();t&&await this.combatCmd({type:`skill`,hero:t,skill:e})},onLoot:async(e,t)=>{try{let n=await this.exec({type:`lootChoice`,hero:e,choice:t});n&&this.lootFeedback(n.events)}finally{this.combat?.setLoot(wr(this.st,this.reg,e=>this.mine(e)))}},onContinue:()=>{let e=this.combatContinue;this.combatContinue=null,e?.()}}),this.combat}async combatCmd(e){if(!this.busy){this.busy=!0;try{let t=await this.exec(e);if(!t){let e=jr(this.st,this.reg,this.mine(this.actor())?this.actor():null,this.combatBg());e&&this.combat?.setState(e),this.combat?.resetPanel();return}if(e.type===`swapWeapon`){z.sfx(o.upgrade);let t=jr(this.st,this.reg,this.mine(this.actor())?this.actor():null,this.combatBg());t&&this.combat?.setState({...t,banner:`換上 ${this.reg.items.get(e.item)?.name??`武器`}`});return}await this.playWorld(t.events,t.before)}finally{this.busy=!1,this.refresh()}}}bgCache=``;skillHost;combatBg(){return this.bgCache?this.bgCache:(this.bgCache=Nr(this.st,e=>!!ae(e))??``,this.bgCache||void 0)}async playCombat(e,t){let n=this.ensureCombat(),r=e.some(e=>e.t===`combatStart`);if(r){this.bgCache=``,n.clearOverlay(),n.newBattle();let e=this.st.combat?.units.some(e=>e.monster&&this.reg.monsters.get(e.monster)?.boss);z.playBgm(e?c.boss:c.battle),await new Promise(e=>requestAnimationFrame(()=>window.setTimeout(e,0)))}um(e)&&await this.bossIntro(um(e));let i=um(e);if(i){let e=i.heroes.find(e=>this.st.heroes.find(t=>t.id===e)?.life===`ok`);e&&this.shout(e,`battleStart`)}let a=Or(e,this.reg,t,this.st),o=t.combat?jr(t,this.reg,null,this.combatBg()):jr(this.st,this.reg,null,this.combatBg());this.showCombatLayer(!0),o&&n.setState(r||!t.combat?Rr(o,a):o);let s=e.find(e=>e.t===`combatStart`);s?.ambush===`heroes`&&a.unshift({type:`say`,text:`伏擊成功！先手攻擊`}),s?.ambush===`enemies`&&a.unshift({type:`say`,text:`被伏擊了！`}),n.setLoot(vm(e)?.result===`win`?wr(this.st,this.reg,e=>this.mine(e)):null),await n.play(a);let l=e.find(e=>e.t===`combatEnd`);if(l?.result!==`win`)for(let e of Cr(t,this.st,this.reg))this.lowHpSaid.add(e),this.shout(e,`lowHp`);if(!l){let e=jr(this.st,this.reg,this.actor(),this.combatBg());e&&n.setState(e);return}if(l.result===`win`){let e=(t.combat?.units??this.st.combat?.units??[]).filter(e=>e.side===`hero`).map(e=>e.id).filter(e=>this.st.heroes.find(t=>t.id===e)?.life===`ok`),n=e[this.shoutCount%Math.max(1,e.length)];n&&window.setTimeout(()=>!this.disposed&&this.shout(n,`battleWin`),450)}if(l.result===`fled`)await M(600);else{let e=new Promise(e=>this.combatContinue=e);this.lootRemote&&this.applyLootRemote(this.lootRemote),this.remoteVictory?.(),this.remoteVictory=null,await e}n.clearOverlay(),this.showCombatLayer(!1),this.bgCache=``,this.releaseCombatArt(),this.playAreaBgm();let u=this.combatBoss;if(this.combatBoss=null,u&&l.result===`win`){let e=this.bossSceneFor(u.id,`defeat`);e&&await this.playScene(e,u.heroes.filter(e=>this.awake().includes(e)))}}bossSceneFor(e,t){let n=this.st.dungeon??null,r=n?`dungeon_${n.id}_boss_${t}`:``;return r&&this.director.has(r)?r:this.director.bossScene(e,t)}async bossIntro(e){let t=e.enemies.find(e=>this.reg.monsters.get(e.monster)?.boss);if(!t)return;this.combatBoss={id:t.monster,heroes:e.heroes};let n=this.bossSceneFor(t.monster,`intro`);n&&await this.playScene(n,e.heroes)}showCombatLayer(e){this.combatEl.classList.contains(`hidden`)===e&&x.dismissTip(),this.combatEl.classList.toggle(`hidden`,!e),this.hudEl.classList.toggle(`hidden`,e),document.body.classList.toggle(`in-combat`,e),this.setPause(`combat`,e)}pauseReasons=new Set;setPause(e,t){t?this.pauseReasons.add(e):this.pauseReasons.delete(e),this.view?.setPaused(this.pauseReasons.size>0)}async playScene(e,t=this.party()){let n=this.director.sceneVm(e,t);if(!n)return;if(this.onScene?.(e),lr(e)===`pool`){this.bubbles.say(n.lines[0]);return}x.dismissTip();let r=!!(n.bg&&j(n.bg));r&&this.setPause(`scene`,!0);try{await this.dialogue.play(n)}finally{r&&this.setPause(`scene`,!1)}}party(){return this.st.heroes.filter(e=>e.life!==`dead`).map(e=>e.id)}speakers(){let e=this.awake();return e.length?e:this.party()}awake(){return this.st.heroes.filter(e=>e.life===`ok`).map(e=>e.id)}shout(e,t){let n=mm(this.manifest,e,t);if(!n.length)return;let r=n[this.shoutCount++%n.length];z.shout(r)}async maybeActCard(e){let t=/^q(\d)_/.exec(e??``),n=t?Number(t[1]):0;n>=1&&n<=3&&n>this.actShown&&await this.showActCard(n)}async showActCard(e){this.actShown=Math.max(this.actShown,e);let t=ar[e];if(!t)return;let[n,r]=t.zh.split(/\s+|　/).filter(Boolean);await this.showCard(`bg:act${e}`,n??t.zh,r??``,`act`)}async showRegionCard(e){let t=Lr(S(this.reg,e),`新的地區`,e);await this.showCard(`bg:region_${e}`,t,``,`region`)}markRegionCard(e){this.regionCardSeen.has(e)||(this.regionCardSeen.add(e),gm(this.st.seed,[...this.regionCardSeen]))}showCard(e,t,n,r){let i=j(e);x.dismissTip();let a=p(`div.g-card.g-card-${r}`,{role:`dialog`,"aria-label":t},p(`div.g-card-art`,i?{style:`background-image:url("${i}")`}:null),p(`div.g-card-text`,null,p(`div.g-card-title`,null,t),n?p(`div.g-card-sub`,null,n):null),p(`div.g-card-hint`,null,`點一下繼續`));return this.root.append(a),this.setPause(`card`,!0),r===`act`&&z.sfx(o.reward),new Promise(e=>{let t=!1,n=()=>{t||(t=!0,window.clearTimeout(i),a.classList.add(`out`),this.setPause(`card`,!1),window.setTimeout(()=>a.remove(),400),e())},i=window.setTimeout(n,r===`act`?3600:2800);a.addEventListener(`pointerdown`,n)})}releaseCombatArt(){of(this.st.heroes.map(e=>`hero:${e.id}:idle`)),Me()}worldLocations(){return Pe(this.st).locations.map(e=>{let t=this.st.locs[e.id]??{},n;return e.kind===`portal`?n=!!t.lit:e.kind===`chaosGenerator`||e.kind===`cultDevice`?n=!t.done:(e.kind===`dungeon`||e.kind===`cave`||e.kind===`camp`)&&(n=!t.cleared&&!t.used),{id:e.id,kind:e.kind,q:e.q,r:e.r,name:Dr(this.reg,e),region:e.region,active:n}})}safe3d(e,t){try{t()}catch(t){console.error(`3D 畫面同步出錯（${e}），遊戲照常往下`,t)}}syncWorld(e){this.safe3d(`同步地圖`,()=>this.syncWorldInner(e))}syncWorldInner(e){let t=this.view;if(!t)return;let n=this.st.heroes.filter(e=>e.life!==`dead`||!0).filter(e=>this.sprites[e.id]).map(e=>({id:e.id,q:e.q,r:e.r,sprite:this.sprites[e.id],dead:e.life!==`ok`,boat:e.aboard&&e.vehicle!==`balloon`,balloon:e.aboard&&e.vehicle===`balloon`,vessel:this.st.boatType??void 0}));t.setHeroes(n);let r=[];this.st.boat&&this.st.boat.heroes.length===0&&r.push({id:`boat`,kind:this.st.boatType??`fishing`,q:this.st.boat.q,r:this.st.boat.r}),this.st.balloon&&this.st.balloon.heroes.length===0&&r.push({id:`balloon`,kind:`balloon`,q:this.st.balloon.q,r:this.st.balloon.r}),t.setVehicles(r);let i=new URL(P(``),location.href).href,a=this.st.tokens.map(e=>{let t=e.monsters[0]??``,n=this.reg.monsters.get(t)?.sprite??`monster:${t}`,r=yd(this.manifest,n.replace(/^monster:/,``),i),a=e.kind===`quest`||e.kind===`chaosBeast`;return{id:e.id,q:e.q,r:e.r,kind:`monster`,...r,height:a?1.5:1.15}}),o=this.tokenPos,s=e?[]:this.st.tokens.filter(e=>{let t=o.get(e.id);return t&&(t.q!==e.q||t.r!==e.r)});this.tokenPos=new Map(this.st.tokens.map(e=>[e.id,{q:e.q,r:e.r}])),s.length&&!t.isPaused()?Promise.all(s.map(e=>t.moveToken(e.id,sm(o.get(e.id)??e,e)).catch(()=>void 0))).then(()=>{this.disposed||t.setTokens(a)}):t.setTokens(a);let c=this.worldLocations(),u=e=>`${e.kind}|${e.q},${e.r}|${e.name}|${e.active??``}`;e||t.updateLocations(c.filter(e=>this.locSig.get(e.id)!==u(e))),this.locSig=new Map(c.map(e=>[e.id,u(e)])),t.clearHighlight(`info`);let d=this.st.gate;if(d&&d.until>=this.st.turn.round&&t.highlight([{q:d.a[0],r:d.a[1]},{q:d.b[0],r:d.b[1]}],`info`),this.syncFog(),t.setWeather(l(this.st).day),e){let e=this.st.heroes.find(e=>e.id===this.st.turn.hero);e&&t.focusOn({q:e.q,r:e.r},{instant:!0,distance:13}),t.setTimeOfDay(l(this.st).night?`night`:`day`,!0)}}syncFog(){this.safe3d(`霧`,()=>this.syncFogInner())}syncFogInner(){let e=this.view;if(!e)return;let t=this.st.map.tiles,n=C(this.st,this.reg).map(e=>t[e]).filter(Boolean),r=ve(this.st).map(e=>t[e]).filter(Boolean);e.setFog(n,r)}zoomToReach(){let e=this.view,t=this.actor();if(!e||!t||this.disposed||this.st.mode.kind!==`overworld`||!this.st.turn.rolled)return;let n=this.st.heroes.find(e=>e.id===t);if(!n)return;let r=a(this.st,t,this.reg).reduce((e,t)=>Math.max(e,Math.max(Math.abs(t.q-n.q),Math.abs(t.r-n.r),Math.abs(t.q+t.r-n.q-n.r))),0);r<=0||e.focusOn({q:n.q,r:n.r},{distance:Math.max(13,Math.min(24,9+r*2.2))})}questMarkEl=null;questTimer=0;startQuestMarker(){let e=p(`span.qm-arrow`,null,`➤`),t=p(`span.qm-label`);this.questMarkEl=p(`div.g-quest-mark.hidden`,null,p(`span.qm-pin`,null,`！`),e,t),this.hudEl.append(this.questMarkEl),this.questTimer=window.setInterval(()=>this.updateQuestMarker(e,t),120)}questTarget(){let e;try{let t=te(this.st,this.reg);e=_r(t.active,t.act)}catch{return null}if(!e)return null;let t=this.st.heroes.find(e=>e.id===this.st.turn.hero)??this.st.heroes[0],n=this.st.map.locations.filter(t=>t.quest===e.id&&!this.st.locs[t.id]?.done&&!this.st.locs[t.id]?.cleared);if(!n.length||!t)return null;let r=e=>Math.max(Math.abs(e.q-t.q),Math.abs(e.r-t.r),Math.abs(e.q+e.r-t.q-t.r)),i=n.sort((e,t)=>r(e)-r(t))[0];return{q:i.q,r:i.r,name:Dr(this.reg,i)}}updateQuestMarker(e,t){let n=this.questMarkEl,r=this.view;if(!n||!r||this.disposed)return;if(r.isPaused()||this.st.mode.kind!==`overworld`){n.classList.add(`hidden`);return}let i=this.questTarget(),a=this.st.heroes.find(e=>e.id===this.st.turn.hero);if(!i||a&&a.q===i.q&&a.r===i.r){n.classList.add(`hidden`);return}let o=r.screenPosition(i,1.2);t.textContent!==i.name&&(t.textContent=i.name),n.classList.remove(`hidden`);let s=y(this.root),c=this.root.querySelector(`.world-hud .hud-quest .quest-track`)?.getBoundingClientRect(),l=c&&c.width>1?c:null,u=(e,t,n,r)=>!!l&&n>l.left-4&&e<l.right+4&&r>l.top-4&&t<l.bottom+4;if(o){n.classList.add(`on-map`);let t=n.getBoundingClientRect(),r=o.x-t.width/2,i=o.y-t.height;if(r>s.left&&r+t.width<s.right&&i>s.topCenter&&o.y<s.bottom&&!u(r,i,r+t.width,o.y)){n.style.left=`${o.x}px`,n.style.top=`${o.y}px`,e.style.transform=``;return}}n.classList.remove(`on-map`);let d=n.getBoundingClientRect(),f=d.width/2+4,p=d.height/2+4,m={l:s.left+f,r:s.right-f,t:s.topCenter+p,b:s.bottom-p},h=(m.l+m.r)/2,g=(m.t+m.b)/2,_,v;if(o)_=o.x-h,v=o.y-g;else{let e=a?r.screenPosition(a,0):null,t=r.screenPosition(i,0);if(!e||!t){n.classList.add(`hidden`);return}_=t.x-e.x,v=t.y-e.y}let b=Math.min((m.r-h)/Math.max(1e-6,Math.abs(_)),(m.b-g)/Math.max(1e-6,Math.abs(v))),x=h+_*b,S=g+v*b;l&&u(x-f,S-p,x+f,S+p)&&(S=Math.min(m.b,l.bottom+4+p)),n.style.left=`${x}px`,n.style.top=`${S}px`,e.style.transform=`rotate(${Math.atan2(v,_)}rad)`}focusHero(e){this.safe3d(`鏡頭`,()=>this.focusHeroInner(e))}flyRetry=0;flyToHero(e){let t=this.view,n=this.st.heroes.find(t=>t.id===e);!t||!n||t.isPaused()||this.st.mode.kind!==`overworld`&&this.st.mode.kind!==`encounter`||(window.clearTimeout(this.flyRetry),t.isOverview()?(t.setOverview(!1),this.flyRetry=window.setTimeout(()=>this.safe3d(`鏡頭`,()=>this.flyToHero(e)),950)):(this.guide?.release(),t.flyTo({q:n.q,r:n.r})))}focusHeroInner(e){let t=this.st.heroes.find(t=>t.id===e);t&&this.view&&this.view.focusOn({q:t.q,r:t.r}),this.view?.selectHero(e)}syncPiecePicking(){let e=this.view;if(!e)return;let t=this.actor(),n=!!this.tilePick||this.st.mode.kind===`overworld`&&!!t&&this.mine(t)&&this.st.turn.rolled&&this.st.turn.steps>0;this.safe3d(`點選棋子`,()=>e.setPiecePicking(!n))}highlightReach(){let e=this.view;if(!e)return;e.clearHighlight(`reach`),e.clearHighlight(`danger`);let t=this.st.mode;if(t.kind===`encounter`){let n=this.st.tokens.find(e=>e.id===t.token);n&&e.highlight(this.st.map.tiles.filter(e=>_m(e.q,e.r,n.q,n.r)<=2).map(e=>({q:e.q,r:e.r})),`danger`)}let n=this.actor();this.st.mode.kind!==`overworld`||!n||!this.st.turn.rolled||this.pending||this.st.turn.steps<=0||e.highlight(a(this.st,n,this.reg).map(e=>({q:e.q,r:e.r})),`reach`)}async onTileClick(e){if(this.busy||this.pending||this.st.mode.kind!==`overworld`)return;let t=this.actor();if(this.guide?.release()&&t&&this.focusHero(t),!t||!this.mine(t))return;if(this.tilePick){let t=this.tilePick;this.endTilePick(),await this.send({type:`useItem`,hero:t.hero,item:t.item,q:e.q,r:e.r});return}let n=this.st.heroes.find(e=>e.id===t);if(!this.st.turn.rolled){this.toast(`先擲移動`);return}if(n.q===e.q&&n.r===e.r)return;if(this.st.turn.steps<=0&&!n.aboard){this.toast(`這回合沒有步數了，按「結束回合」`);return}if(!n.aboard){let n=Ke(this.st,t,e.q,e.r,this.reg);if(!n||n.path.length<2){this.toast(e.terrain===`water`||e.terrain===`deepWater`?`那裡是水，要搭船`:e.terrain===`mountain`||e.terrain===`lava`?`那裡過不去`:`走不到那裡`);return}n.within<n.path.length-1&&this.toast(`太遠了，先走 ${n.within} 步`)}let r=n.aboard&&n.vehicle===`balloon`;if(n.aboard&&!r&&e.terrain!==`water`&&e.terrain!==`deepWater`){let n=this.st.boat;if(n&&Math.max(Math.abs(n.q-e.q),Math.abs(n.r-e.r),Math.abs(n.q+n.r-e.q-e.r))>1){this.toast(`船要先開到岸邊，再點旁邊的陸地上岸`);return}await this.send({type:`disembark`,hero:t,q:e.q,r:e.r})}else this.view?.showPath(null),await this.send({type:`moveTo`,hero:t,q:e.q,r:e.r})}tilePick=null;startTilePick(e,t,n){this.closeModal(),this.tilePick={hero:e,item:t,key:n};let r=this.view,i=this.st.heroes.find(t=>t.id===e);if(r){if(r.clearHighlight(`target`),n===`teleportScroll`){let e=pe(this.reg,this.st,i),t=this.st.map.tiles.filter(t=>{let n=Math.max(Math.abs(t.q-i.q),Math.abs(t.r-i.r),Math.abs(t.q+t.r-i.q-i.r));return n>0&&n<=e&&![`water`,`deepWater`,`mountain`,`lava`].includes(t.terrain)&&!this.st.tokens.some(e=>e.q===t.q&&e.r===t.r)});r.highlight(t,`target`),this.toast(`點 ${e} 格內的空地瞬間過去`)}else this.toast(`點一格去過的地方，開一道雙向傳送門`)}this.hud.setActions([{id:`cancelPick`,label:`取消選格`}]),this.syncPiecePicking()}endTilePick(){this.tilePick=null,this.view?.clearHighlight(`target`),this.refresh()}openHomeStone(e,t){let n=(e,t)=>this.st.map.tiles.findIndex(n=>n.q===e&&n.r===t),r=this.st.map.locations.filter(e=>(e.kind===`town`||e.kind===`capital`||e.kind===`port`)&&this.st.explored.charCodeAt(n(e.q,e.r))===49),i=this.st.heroes.find(t=>t.id===e);this.showModal(R(`安全石`,`把自己送回一座去過的城鎮。代價：全能力 −1（每用一次多扣 1）。`,r.map(e=>({id:e.id,to:Dr(this.reg,e),price:0})),i.gold,{onPick:n=>{this.closeModal(),this.send({type:`useItem`,hero:e,item:t,target:n})},onClose:()=>this.closeModal()},`回去`),`homestone`)}onTileHover(e){let t=this.view;if(!t)return;let n=this.actor();if(!e||this.busy||this.pending||this.st.mode.kind!==`overworld`||!n||!this.st.turn.rolled){this.hoverKey&&t.showPath(null),this.hoverKey=``;return}let r=`${e.q},${e.r}`;if(r===this.hoverKey)return;this.hoverKey=r;let i=Ke(this.st,n,e.q,e.r,this.reg);t.showPath(i?i.path.slice(0,i.within+1).map(([e,t])=>({q:e,r:t})):null)}refresh(){if(this.disposed)return;let e=this.st,t=this.actor(),n=this.mine(t),r=null;if(e.mode.kind===`dungeon`&&t)try{r=kr(e,this.reg,t)?.vm??null}catch{r=null}this.hud.setDungeon(r),this.dropStaleMoveRoll();let i=Sr(e,this.reg,n?t:null,ee);this.hud.setState({...i,quest:Hp(i.quest,e,this.reg)}),this.hud.setActions(this.tilePick?[{id:`cancelPick`,label:`取消選格`}]:e.mode.kind===`overworld`&&!this.busy&&n?this.locationActions():[]);let a=this.driver.waitingText();if(this.root.classList.toggle(`not-mine`,!n),this.hud.setInvite(!!this.opts.online?.canInvite()),!n&&a&&e.mode.kind!==`over`?this.hud.setWaiting(a):this.hud.setWaiting(null),this.safe3d(`可走範圍`,()=>this.highlightReach()),this.syncPiecePicking(),!this.busy){if(b(e)&&!this.combatContinue)this.openLootPanel();else switch(this.closeEncounterIfStale(),e.mode.kind){case`over`:this.autosave(!0),this.opts.onGameOver(e);return;case`combat`:{this.showCombatLayer(!0);let r=jr(e,this.reg,n?t:null,this.combatBg());r&&this.ensureCombat().setState(r);return}case`encounter`:!this.encounterOpen&&n&&this.openEncounter();return;case`town`:if(!n)return;this.modalEl.querySelector(`[data-panel^="town"]`)||this.openTown();return;case`event`:if(!n)return;this.modalEl.querySelector(`[data-panel="event"]`)||this.openEvent();return;case`dungeon`:n&&this.openDungeon();return;case`device`:n&&!this.modalEl.querySelector(`[data-panel="device"]`)&&this.openDevice();return;default:if(this.modalEl.querySelector(`[data-panel^="town"],[data-panel="event"],[data-panel="dungeon"],[data-panel="device"]`)&&this.closeModal(),this.closeEncounterIfStale(),this.showCombatLayer(!1),n&&this.autoEnterTown(t))return;n&&this.autoMoveRoll(t)}}}autoTownKey=``;autoEnterTown(e){let t=this.st;if(!e||t.mode.kind!==`overworld`||this.tilePick||this.busy||this.modalEl.querySelector(`.modal-back, .panel`)||this.root.querySelector(`.dialogue.open, .g-card:not(.out)`))return!1;let r=t.heroes.find(t=>t.id===e);if(!r||r.aboard)return!1;let i=be(t,r.q,r.r);if(!i||!rm.includes(i.kind)||t.tokens.some(e=>e.q===r.q&&e.r===r.r))return!1;let a=`${t.turn.round}:${e}:${r.q},${r.r}`;if(a===this.autoTownKey)return!1;let o={type:`interact`,hero:e};return n(t,o,this.reg)===null&&(this.autoTownKey=a,this.autoMoveRolling&&this.hud.rollWaiting&&(this.autoMoveRolling=!1,this.hud.cancelRoll()),this.send(o),!0)}lastPointer=null;markerTile(e){let t=this.view;if(!t||!e)return null;let n=null;for(let r of this.st.map.locations){if(r.kind!==`eventSite`||this.st.locs[r.id]?.done)continue;let i=t.screenPosition(r,.6),a=t.screenPosition(r,1);if(!i||!a)continue;let o=Math.max(12,Math.abs(i.y-a.y)*.75),s=Math.hypot(e.clientX-(i.x+a.x)/2,e.clientY-(i.y+a.y)/2);if(s>o||n&&n.d<=s)continue;let c=this.st.map.tiles.find(e=>e.q===r.q&&e.r===r.r);c&&(n={tile:c,d:s})}return n?.tile??null}hurtBox(e){if(!this.view||this.root.querySelector(`.dungeon-scene`))return null;let t=this.st.heroes.find(t=>t.id===e);if(!t)return null;let n=this.view.screenPosition({q:t.q,r:t.r},0),r=this.view.screenPosition({q:t.q,r:t.r},1.4);return n&&r?we(n,r):null}townAutoUsed(e,t,n){return this.autoTownKey===`${this.st.turn.round}:${e}:${t},${n}`}dropStaleMoveRoll(){this.autoMoveRolling&&this.hud.rollWaiting&&(this.st.mode.kind!==`overworld`||this.st.turn.rolled||this.autoRollKey!==`${this.st.turn.round}:${this.actor()}`)&&(this.autoMoveRolling=!1,this.hud.cancelRoll())}autoMoveRolling=!1;autoRollKey=``;autoMoveRoll(e){let t=this.st;if(!e||t.mode.kind!==`overworld`||t.turn.rolled||this.tilePick||this.busy||this.modalEl.querySelector(`.modal-back, .panel`)||this.root.querySelector(`.dialogue.open, .g-card:not(.out)`))return;let n=`${t.turn.round}:${e}`;n!==this.autoRollKey&&Sr(t,this.reg,e,ee).canRollMove&&(this.autoRollKey=n,this.autoMoveRolling=!0,this.hud.startMoveRoll().finally(()=>this.autoMoveRolling=!1))}locationActions(){let e=this.actor();if(!e)return[];let t=v(this.st,{hero:e},this.reg),r=this.st.heroes.find(t=>t.id===e),i=be(this.st,r.q,r.r),a=[],o=e=>t.some(t=>t.type===e),s=i?.kind??``,c=e=>n(this.st,e,this.reg);o(`respawn`)&&a.push({id:`respawn`,label:`回城鎮重生（扣一條命）`,primary:!0});let l=em.includes(s),u=rm.includes(s)&&!this.st.tokens.some(e=>e.q===r.q&&e.r===r.r);if(o(`interact`)&&!l&&(!u||this.townAutoUsed(e,r.q,r.r)))a.push({id:`interact`,label:im[s]??`調查`,primary:!0});else if(!o(`interact`)&&!l&&i&&tm.includes(s)){let t=c({type:`interact`,hero:e});t&&!/已經|清空|沒有/.test(t)&&a.push({id:`interact`,label:im[s]??`進去`,disabled:t})}for(let e of t)e.type===`embark`&&a.push({id:`embark:${e.vehicle??`boat`}`,label:e.vehicle===`balloon`?`搭熱氣球`:`上船`});if(r.aboard&&r.vehicle===`balloon`&&a.push(this.balloonLanding(e)?{id:`land`,label:`降落`}:{id:`land`,label:`降落`,disabled:`下面跟旁邊都沒有能站的陸地`}),s===`shrine`){let t=o(`pray`)?null:c({type:`pray`,hero:e});a.push({id:`pray`,label:`參拜小祠`,disabled:t??void 0})}if(o(`useGate`)&&a.push({id:`useGate`,label:`穿過傳送門`,primary:!0}),o(`seal`)&&a.push({id:`seal`,label:`封印災禍`,primary:!0}),s===`sanctum`&&i&&a.push({id:`siteSanctum`,label:`看看聖壇`,primary:o(`devote`)}),s===`statue`&&i&&a.push({id:`siteStatue`,label:`看看石像`,primary:o(`statueOffer`)}),(s===`cultDevice`||s===`chaosGenerator`)&&i&&!this.st.locs[i.id]?.done){let t=s===`chaosGenerator`?`關掉紫霧爐`:`解開紫燈籠`,n=o(`solveDevice`)?null:c({type:`solveDevice`,hero:e,focus:0});a.push({id:`solveDevice`,label:t,primary:!n,disabled:n??void 0})}o(`teleport`)&&de(this.st,e).length&&a.push({id:`teleport`,label:`傳送`});for(let e of t)e.type===`revive`&&a.push({id:`revive:${e.target}`,label:`救起${Pr(this.reg,e.target)}`});return a}balloonLanding(e){let t=this.st.balloon,r=v(this.st,{hero:e},this.reg).filter(e=>e.type===`disembark`&&n(this.st,e,this.reg)===null),i=(t?r.find(e=>e.q===t.q&&e.r===t.r):void 0)??r[0];return i?{q:i.q,r:i.r}:null}async onAction(e){let t=this.actor();if(t&&!this.busy){if(e===`land`){let e=this.balloonLanding(t);e&&await this.send({type:`disembark`,hero:t,q:e.q,r:e.r})}else if(e===`solveDevice`||e===`seal`){let n=Oe(this.st,t,this.reg),r=this.st.heroes.find(e=>e.id===t),i=be(this.st,r.q,r.r),a,o;if(e===`seal`)a={title:`封印災禍`,stat:`int`,chance:dm(n.stats.int+xr(this.st,this.reg,t)),slots:4,need:3,maxLock:Math.min(r.focus,4),note:`中 3 格就把災禍封印起來（不會再醒）；沒中災禍會長兩級。`},o=`seal`;else{let e=ce(this.st,i?.id??``,i?.kind??``),s=F(i?.kind??``),c=i?.kind===`chaosGenerator`;a={title:c?`關掉紫霧爐`:`解開紫燈籠`,stat:e,chance:dm(n.stats[e]+xr(this.st,this.reg,t)),slots:s.slots,need:s.need,maxLock:Math.min(r.focus,s.slots),note:c?`中 ${s.need} 格就關掉：紫霧退兩級。沒中：被火花燙傷 5 血。每回合試一次，試了這回合就不能再走。`:`中 ${s.need} 格就解開，三選一：紫霧退一級／命數＋1／消滅一隻災禍。沒中：一半機率紫霧濃一級、一半機率受傷 5 血。每回合試一次。`},o=c?`generator`:`device`}let s=n=>e===`seal`?{type:`seal`,hero:t,focus:n}:{type:`solveDevice`,hero:t,focus:n};await this.hud.roll(a,e=>this.rollResolver(s(e),o))?await this.flushPending(o):this.pending=null}else if(e.startsWith(`embark:`))await this.send({type:`embark`,hero:t,vehicle:e.slice(7)});else{if(e===`teleport`)return this.openPortal(t);if(e===`cancelPick`)return this.endTilePick();if(e===`siteStatue`)return this.openStatue(t);if(e===`siteSanctum`)return this.openSanctum(t);e.startsWith(`revive:`)?await this.send({type:`revive`,hero:t,target:e.slice(7)}):await this.send({type:e,hero:t})}}}sitePanel(e,t,n,i){let a=p(`div.site-info`,null,...t.map(e=>p(`p`,null,e))),o=p(`div.panel-actions`,null,r(`先不要`,()=>this.closeModal(),`small ghost`));n&&(i&&o.append(p(`span.site-why`,null,i)),o.append(r(n.label,()=>{this.closeModal(),this.send(n.cmd)},`primary`,!!i))),this.showModal(p(`div.panel.small-panel.site-panel`,null,p(`div.panel-title`,null,p(`span`,null,e),r(`關閉`,()=>this.closeModal(),`small`)),a,o),`site`)}openStatue(e){let t=this.st.heroes.find(t=>t.id===e),r={type:`statueOffer`,hero:e},i=n(this.st,r,this.reg),a=je(this.st),o=10*this.st.quest.act,s=Math.round(20*this.st.quest.act*[1,1.5,2,2.5][a]);if(!i){let t=L(this.st,r,this.reg),n=t.events.find(t=>t.t===`gold`&&t.hero===e),i=t.events.find(t=>t.t===`xp`&&t.hero===e);n&&(o=-n.amount),i&&(s=i.amount)}let c=[0,30,50,100][a],l=be(this.st,t.q,t.r);this.sitePanel(l?Dr(this.reg,l):`石像`,[`獻 ${o} 條小魚乾（你有 ${t.gold} 條），換經驗 ${s}、專注補滿${c?`、補 ${c===100?`滿`:`${c}%`} 生命`:``}${a===3?`；同一格的隊友一起拿`:``}。`,`每隻主角在每座石像只能獻一次。`],{label:`獻 ${o} 條`,cmd:r},i)}openSanctum(e){let t=this.st.heroes.find(t=>t.id===e),r=be(this.st,t.q,t.r),i=r?.ref?this.reg.sanctums.get(r.ref):void 0,a={type:`devote`,hero:e},o=n(this.st,a,this.reg);this.sitePanel(i?.name??`聖壇`,[i?.desc??`供奉之後會得到這座聖壇的加成。`,`供奉時生命補滿；之後受到致命一擊時，聖壇會碎掉救你一命（不用扣命數）。`,`⚠ 每隻主角只能供奉一座聖壇，供奉了就不能換（聖壇碎了才能再供奉別座）。`],{label:`讓${Pr(this.reg,e)}供奉`,cmd:a},o)}useFromBag(e,t,n){let r=this.reg.items.get(t)?.use?.key;if(r===`teleportScroll`||r===`portalScroll`)return this.startTilePick(e,t,r);if(r===`homeStone`)return this.openHomeStone(e,t);this.send({type:`useItem`,hero:e,item:t}).then(n)}onMenu(e){if(this.busy&&e===`endTurn`)return;let t=this.actor();if(e===`endTurn`&&t){let e=this.st.mode;e.kind===`town`&&e.hero===t?this.send({type:`leave`,hero:t}).then(e=>{if(e)return this.playAreaBgm(),this.send({type:`endTurn`,hero:t})}):this.send({type:`endTurn`,hero:t})}else if(e===`bag`)this.openEquip(t??this.st.heroes[0].id);else if(e===`save`)this.openSave();else if(e===`overview`&&this.view)this.view.setOverview(!this.view.isOverview());else if(e===`invite`)this.opts.online?.invite();else if(e===`settings`){let e=De({onClose:()=>this.closeModal(),onQuality:e=>this.view?.setQuality(e)}),t=this.opts.online;e.append(p(`div.panel-actions`,null,t?.canInvite()?r(`邀請朋友`,()=>{this.closeModal(),t.invite()},`small`):null,t?r(`離開連線局`,()=>this.confirmLeave(),`small`):r(`存檔並回主選單`,()=>{this.autosave(),this.opts.onExit()},`small`))),this.showModal(e,`settings`)}}confirmLeave(){let e=p(`div.panel.small-panel`,null,p(`div.panel-title`,null,`離開連線局`),p(`p`,null,this.opts.online?.canInvite()?`你是主機：離開之後朋友們就沒辦法接著玩這一局（連線局的存檔還在，之後可以從存檔接著開）。確定要離開嗎？`:`離開之後，你的主角會交給主機暫時接手，朋友可以繼續玩。確定要離開嗎？`),p(`div.panel-actions`,null,r(`留下來`,()=>this.closeModal(),`small ghost`),r(`離開`,()=>{this.closeModal(),this.leaveOnline(),this.opts.onExit()},`small primary`)));this.showModal(e,`leave`)}leftOnline=!1;leaveOnline(){if(!this.leftOnline&&this.opts.online){this.leftOnline=!0;try{this.opts.online.leave()}catch(e){console.warn(`離開連線失敗`,e)}}}closeEncounterIfStale(){this.st.mode.kind!==`encounter`&&(this.encounterOpen&&=(this.hud.closeEncounter(),!1))}async openEncounter(){let e=this.st.mode;if(e.kind!==`encounter`)return;this.encounterOpen=!0;let t=this.st.tokens.find(t=>t.id===e.token),n=Mr(this.st,this.reg,e.hero,t?.monsters??[],t),r=await this.hud.chooseEncounter(n);if(this.encounterOpen=!1,!r||this.st.mode.kind!==`encounter`||this.st.mode.token!==e.token)return this.refresh();if(r===`ambush`||r===`sneak`){let t=n.options.find(e=>e.kind===r),i=this.st.heroes.find(t=>t.id===e.hero),a={title:t.label,stat:t.check.stat,chance:t.check.chance,slots:t.check.slots,need:t.check.slots,maxLock:i.focus};await this.hud.roll(a,t=>this.rollResolver({type:`encounter`,hero:e.hero,choice:r,focus:t},r))?await this.flushPending(r):(this.pending=null,this.refresh())}else await this.send({type:`encounter`,hero:e.hero,choice:r})}openTown(){let e=this.st.mode;if(e.kind!==`town`)return;z.playBgm(`bgm:shop`);let t={};for(let n of[`inn`,`meditate`,`bless`,`pipe`,`healer`,`carnival`]){let r=this.serviceBlocked(n,e.hero);r&&(t[n]=r)}let n=Ir(this.st,this.reg,e.hero,e.town,[`meditate`,`bless`,`pipe`],t);this.showModal(ge(n,{onService:e=>this.openService(e),onLeave:()=>void this.send({type:`leave`,hero:e.hero}).then(()=>this.playAreaBgm())}),`town`)}serviceBlocked(e,t){let r={type:e===`pipe`?`pipeUpgrade`:e,hero:t,...e===`carnival`?{focus:0}:{}},i=n(this.st,r,this.reg);if(i)return i;if(e===`healer`){let e=this.st.heroes.find(e=>e.id===t);if(e&&e.hp>=Oe(this.st,t,this.reg).hpMax)return`生命已經是滿的`}return null}townCmd(e,t,n){this.send(e).then(e=>{n?.(e),e&&this.st.mode.kind===`town`&&t()})}townSay(e,t){let n=this.st.mode,r=n.kind===`town`?n.town:``,i=e===`shop`?[`shop_${r}_${t}`,`shop_${t}`]:[`${e}_${t}`];this.bubbles.say(this.director.townLine(i,this.party()))}openService(e){let t=this.st.mode;if(t.kind!==`town`)return;let n=t.hero,r=()=>this.openTown(),i=this.st.heroes.find(e=>e.id===n);if(e===`shop`){this.townSay(`shop`,`greet`);let e=()=>this.showModal(He(hr(this.st,this.reg,n,t.town),{onBuy:t=>this.townCmd({type:`buy`,hero:n,item:t},e,e=>this.townSay(`shop`,e?`buy`:`poor`)),onSell:t=>this.townCmd({type:`sell`,hero:n,item:t},e),onClose:()=>{this.townSay(`shop`,`leave`),r()}}),`town-shop`);e()}else if(e===`inn`){this.townSay(`inn`,`greet`);let e=s(this.st,n,this.reg);this.showModal(Ie({price:e.inn,gold:i.gold,art:`bg:svc_inn`},{onRest:()=>this.townCmd({type:`inn`,hero:n},r,e=>{if(this.townSay(`inn`,e?`rest`:`poor`),e){let e=this.director.nextPair(this.party(),this.st.quest.act,this.st.quest.done);e&&M(1200).then(()=>this.playScene(e))}}),onClose:r}),`town-inn`)}else if(e===`healer`){this.townSay(`healer`,`greet`);let e=s(this.st,n,this.reg);this.showModal(Ie({price:e.healer,gold:i.gold,text:`藥鋪大夫：花錢把生命補滿。`,blocked:this.serviceBlocked(`healer`,n)??void 0,art:`bg:svc_healer`},{onRest:()=>this.townCmd({type:`healer`,hero:n},r,e=>this.townSay(`healer`,e?`done`:`poor`)),onClose:r},`治療`,`治好`),`town-inn`)}else if(e===`meditate`||e===`bless`||e===`pipe`){let t=s(this.st,n,this.reg),a={meditate:[`冥想`,`靜坐一會兒，專注補滿。`,t.meditate],bless:[`祈福`,`請廟裡的老貓唸經，解除身上的詛咒。`,t.bless],pipe:[`菸斗匠`,`把菸斗升一級：草藥（貓草、金根、跳跳草、書蟲草）效果變強。`,t.pipe]}[e],o=e===`pipe`?{type:`pipeUpgrade`,hero:n}:{type:e,hero:n};this.showModal(Ie({price:Number(a[2]??0),gold:i.gold,text:String(a[1]),blocked:this.serviceBlocked(e,n)??void 0,art:`bg:svc_${e}`},{onRest:()=>this.townCmd(o,r),onClose:r},String(a[0]),e===`pipe`?`升級`:String(a[0])),`town-inn`)}else if(e===`jobBoard`){let{jobs:e,offerKind:i}=Ar(this.st,this.reg,t.town);i&&this.townSay(`board`,`${i}_offer`),this.showModal(N(e,{onTake:()=>this.townCmd({type:`takeJob`,hero:n},()=>this.openService(`jobBoard`),e=>e&&this.townSay(`board`,`accept`)),onClose:r}),`town-board`)}else if(e===`trainer`){this.townSay(`trainer`,`greet`);let e=()=>this.showModal(Ne(gr(this.st,this.reg,n),{onTrain:t=>this.townCmd({type:`train`,hero:n,stat:t},e,e=>{let r=this.st.heroes.find(e=>e.id===n)?.stats[t]??0;this.townSay(`trainer`,e?`train_${t}`:r>=95?`max`:`poor`)}),onClose:()=>{this.townSay(`trainer`,`leave`),r()}}),`town-trainer`);e()}else if(e===`port`){let e=s(this.st,n,this.reg),t=e.sail.map(e=>({id:e.to,to:Lr(Ee(this.reg,e.to),`港口`,e.to),price:e.price})),a=(e.boats??[]).map(e=>({id:e.boat,name:ue[e.boat]?.name??e.boat,slots:ue[e.boat]?.slots??4,price:e.price}));this.showModal(Re(t,i.gold,{onPick:e=>void this.send({type:`sail`,hero:n,to:e}),onBuyBoat:a.length?e=>this.townCmd({type:`buyBoat`,hero:n,boat:e},()=>this.openService(`port`)):void 0,boats:a,owned:this.st.boatType,onClose:r}),`town-port`)}else e===`carnival`&&this.openCarnival(n)}async openCarnival(e){let t=Oe(this.st,e,this.reg),n=this.st.heroes.find(t=>t.id===e);this.townSay(`carnival`,`greet`);let i=this.serviceBlocked(`carnival`,e);if(i){let t=s(this.st,e,this.reg).carnival??0;this.showModal(p(`div.panel.small-panel`,null,p(`div.panel-title`,null,`嘉年華・旋轉木馬`),me(`bg:svc_carnival`),p(`p.muted`,null,`玩一次 ${t} 條小魚乾（你有 ${n.gold} 條）。`),p(`p.ts-why`,null,i),p(`div.panel-actions`,null,r(`回去`,()=>this.openTown(),`small`))),`town-carnival`);return}let a=new Zd({title:`嘉年華`,stat:`lck`,chance:dm(t.stats.lck+xr(this.st,this.reg,e)),slots:3,need:0,maxLock:n.focus,describe:e=>[`紫霧漲滿了……`,`紫霧濃了一級`,`紫霧退了一級`,`紫霧退了兩級！`][e]??``},{allowLock:!0,onCancel:()=>(this.townSay(`carnival`,`leave`),this.openTown())});this.showModal(p(`div.panel.small-panel`,null,p(`div.panel-title`,null,`嘉年華・旋轉木馬`),me(`bg:svc_carnival`),p(`p.muted`,null,`擲運氣 3 格：全中紫霧退兩級、中 2 格退一級、中 1 格濃一級、全沒中紫霧直接漲滿。`),a.el),`town-carnival`);let o=await a.run(t=>this.rollResolver({type:`carnival`,hero:e,focus:t},`carnival`));this.pending?this.townSay(`carnival`,`hit${o.hits}`):this.townSay(`carnival`,n.gold<(s(this.st,e,this.reg).carnival??0)?`poor`:`done`),await M(700),await this.flushPending(`carnival`),this.st.mode.kind===`town`&&this.openTown()}openPortal(e){let t=de(this.st,e),n=this.st.heroes.find(t=>t.id===e),r=t.map(e=>{let t=se(this.st,e);return{id:e,to:t?Dr(this.reg,t):`傳送石`,price:1,note:`1 點專注（或 15 條小魚乾）`}});this.showModal(fe(r,n.gold,{onPick:t=>{this.closeModal(),this.send({type:`teleport`,hero:e,to:t,pay:n.focus>0?`focus`:`gold`})},onClose:()=>this.closeModal()}),`portal`)}openEvent(){let e=this.st.mode;if(e.kind!==`event`)return;let t=Er(this.st,this.reg,e.hero,e.event);if(!t)return;let n=this.st.heroes.find(t=>t.id===e.hero),r=()=>{let e=this.pending,t=e?.events.find(e=>e.t===`eventResult`),n=(e?.events??[]).flatMap(e=>e.t===`gold`?[`小魚乾 ${e.amount>0?`+`:``}${e.amount}`]:e.t===`xp`?[`經驗 +${e.amount}`]:e.t===`item`&&e.delta>0?[`得到 ${this.reg.items.get(e.item)?.name??`道具`}`]:e.t===`damage`?[`受傷 ${e.amount}`]:e.t===`heal`?[`補血 ${e.amount}`]:e.t===`chaos`&&e.delta?[`紫霧 ${e.delta>0?`+`:``}${e.delta}`]:[]);this.showModal(Tp(Fr(t?.text??`……`),n,()=>{this.closeModal(),this.flushPending(`event`)}),`event-result`)};this.showModal(wp(t,{maxLock:n.focus,onChoose:t=>{this.rollResolver({type:`eventChoose`,hero:e.hero,option:t},`event`).then(()=>{this.pending&&r()})},onRoll:(t,n)=>this.rollResolver({type:`eventChoose`,hero:e.hero,option:t,focus:n},`event`),onRolled:()=>void M(500).then(()=>this.pending?r():this.openEvent())}),`event`)}openDevice(){let e=this.st.mode;if(e.kind!==`device`)return;let t=e.hero,n=v(this.st,{hero:t},this.reg),r=e=>n.some(t=>t.type===`deviceChoice`&&t.choice===e),i=[{choice:`chaos`,label:`驅散紫霧`,desc:`紫霧退一級`},{choice:`life`,label:`多一條命`,desc:`共用命數＋1`},{choice:`scourge`,label:`消滅一隻災禍`,desc:`巢穴裡最強的那隻災禍直接消失`}],a=p(`div.choice-list`);for(let e of i)a.append(p(`button.choice`,{type:`button`,disabled:!r(e.choice),onclick:()=>{this.closeModal(),this.send({type:`deviceChoice`,hero:t,choice:e.choice})}},p(`span.choice-label`,null,e.label),p(`span.opt-check`,null,e.desc)));this.showModal(p(`div.panel.event-panel`,null,p(`div.panel-title`,null,`紫燈籠熄掉了！`),p(`p`,null,`紫燈會的燈籠停下來了，裡面封著的力量可以拿來用。選一個：`),a),`device`)}dungeonKey=``;openDungeon(){let e=this.actor();if(!e||this.modalEl.querySelector(`[data-panel="dungeon-shop"]`)&&this.st.dungeon?.pending?.kind===`merchant`)return;let t=kr(this.st,this.reg,e);if(!t)return;let n=`${this.st.seq}`;if(n===this.dungeonKey&&this.modalEl.querySelector(`[data-panel="dungeon"]`))return;this.dungeonKey=n;let i=this.st.heroes.find(t=>t.id===e),a=n=>{let r=t.choices[n];return r?r.kind===`next`?{type:`dungeonNext`,hero:e}:r.kind===`leave`?{type:`leaveDungeon`,hero:e}:{type:`dungeonAct`,hero:e,action:r.action}:null},o={disarm:`trap`,evade:`trap`,bash:`door`,drink:`pool`,shut:`generator`};if(this.showModal(Op({...t.vm,bg:Tr(this.st,t.vm.rooms[t.vm.current]?.kind,e=>!!ae(e)),party:this.st.dungeon?.heroes.filter(e=>this.st.heroes.find(t=>t.id===e)?.life===`ok`)},{maxLock:i.focus,onChoose:e=>{let t=a(e);t&&(this.closeModal(),this.send(t))},onRoll:(e,n)=>{let r=t.choices[e],i=a(e);return!i||r?.kind!==`act`?[]:this.rollResolver({...i,focus:n},o[r.action]??``)},onRolled:e=>{let n=t.choices[e];M(500).then(()=>(this.closeModal(),this.dungeonKey=``,this.flushPending(n?.kind===`act`?o[n.action]:void 0)))}}),`dungeon`),this.st.dungeon?.pending?.kind===`merchant`&&vr(this.st,this.reg,e)){let t=this.modalEl.querySelector(`[data-panel="dungeon"] .ftk-btns`),n=r(`看看商品`,()=>this.openDungeonShop(e),`gold dungeon-shop-btn`);n.dataset.action=`dungeonShop`,t?.before(n)}}openDungeonShop(e){let t=()=>{let n=vr(this.st,this.reg,e);n?this.showModal(He(n,{onBuy:n=>void this.send({type:`buy`,hero:e,item:n}).then(t),onClose:()=>{this.closeModal(),this.dungeonKey=``,this.openDungeon()}}),`dungeon-shop`):(this.dungeonKey=``,this.openDungeon())};t()}openEquip(e){let t=this.st.heroes.map(e=>e.id),n=e=>{let r=this.st.mode.kind!==`combat`,i=this.st.heroes.find(t=>t.id===e);this.showModal(jp(br(this.st,this.reg,e,ee),{onEquip:t=>r&&void this.send({type:`equip`,hero:e,item:t}).then(()=>n(e)),onUnequip:t=>r&&void this.send({type:`unequip`,hero:e,slot:t}).then(()=>n(e)),onUse:t=>this.useFromBag(e,t,()=>n(e)),onClose:()=>this.closeModal(),onSwitchHero:r=>n(t[(t.indexOf(e)+r+t.length)%t.length]),onDiscard:r?t=>void this.send({type:`discard`,hero:e,item:t}).then(()=>n(e)):void 0,onGive:(t,r)=>void this.send({type:`give`,hero:e,item:t,to:r}).then(()=>n(e)),giveTargets:r?this.st.heroes.filter(t=>t.id!==e&&t.life===`ok`&&t.q===i.q&&t.r===i.r).map(e=>({id:e.id,name:Pr(this.reg,e.id)})):[]}),`equip`)};n(e)}openSave(){let e=[`s1`,`s2`,`s3`].map((e,t)=>{let n=null;try{n=localStorage.getItem(`${d}-${e}`)}catch{n=null}let r=n?pm(n):null;return{id:e,label:`存檔${[`一`,`二`,`三`][t]}`,empty:!n,summary:r?.summary,when:r?.when}});this.showModal(xe(`save`,e,{onPick:e=>{h(`${d}-${e}`,JSON.stringify({when:fm(),summary:this.summary(),save:D(this.st)})),this.toast(`存好了`),this.openSave()},onExport:()=>this.exportSave(),onClose:()=>this.closeModal()}),`save`)}exportSave(){let e=new Blob([D(this.st)],{type:`application/json`}),t=p(`a`,{href:URL.createObjectURL(e),download:`qiuqiu-king-${Date.now()}.json`});t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),2e3)}summary(){return`第 ${this.st.quest.act} 幕・第 ${l(this.st).day} 天・紫霧 ${this.st.chaos.level}`}autosave(e=!1){if(!this.opts.online){if(e)try{localStorage.removeItem(d)}catch{}else h(d,D(this.st)),h(`${d}-meta`,JSON.stringify({when:fm(),summary:this.summary()}))}}playAreaBgm(){let e=this.st.heroes.find(e=>e.id===this.st.turn.hero),t=e?this.st.map.tiles.find(t=>t.q===e.q&&t.r===e.r):void 0,n=t?this.reg.regions.get(t.region)?.music:void 0;z.playBgm(n&&ae(n)?n:`bgm:act1`)}showModal(e,t){k(this.modalEl);let n=Ae(e);n.dataset.panel=t,this.modalEl.append(n)}closeModal(){this.modalEl.childElementCount&&x.dismissTip(),k(this.modalEl)}toast(e){this.hud.toast(Fr(e))}dispose(){this.disposed=!0,Ud(null),this.unSafe(),u(null),window.clearInterval(this.questTimer),this.guide?.dispose(),this.driver.dispose(),x.dismissTip(!0),x.init({reg:this.reg}),document.body.classList.remove(`in-combat`),this.view?.dispose(),this.combat?.dispose(),this.dialogue.dispose(),this.hud.dispose(),this.root.remove()}},om=`池水有毒！`;function sm(e,t){let n=Math.max(Math.abs(e.q-t.q),Math.abs(e.r-t.r),Math.abs(e.q+e.r-t.q-t.r));if(n===0)return[{q:t.q,r:t.r}];let r=[];for(let i=1;i<=n;i++){let a=i/n,o=e.q+(t.q-e.q)*a,s=e.r+(t.r-e.r)*a,c=-o-s,l=Math.round(o),u=Math.round(s),d=Math.round(c),f=Math.abs(l-o),p=Math.abs(u-s),m=Math.abs(d-c);f>p&&f>m?l=-u-d:p>m&&(u=-l-d),r.push({q:l,r:u})}return r}function cm(e){return e.startsWith(`attack`)||e===`flee`}function lm(e,t){return e.findIndex(e=>[`combatStart`,`combatTurn`,`attack`,`damage`,`unitDown`,`flee`].includes(e.t)||t&&e.t===`roll`&&cm(e.purpose))}function um(e){return e.find(e=>e.t===`combatStart`)}function dm(e){return Math.max(5,Math.min(95,e))}function fm(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getMonth()+1}/${e.getDate()} ${t(e.getHours())}:${t(e.getMinutes())}`}function pm(e){try{return JSON.parse(e)}catch{return null}}function mm(e,t,n){let r=`shout:${t}:`;return Object.keys(e).filter(t=>t.startsWith(r)&&e[t]?.category===n).sort()}function hm(e){try{let t=JSON.parse(Fe($p)??`{}`);return Array.isArray(t[String(e)])?t[String(e)]:[]}catch{return[]}}function gm(e,t){try{let n=JSON.parse(Fe($p)??`{}`);n[String(e)]=t;let r=Object.keys(n);for(let e of r.slice(0,Math.max(0,r.length-8)))delete n[e];h($p,JSON.stringify(n))}catch{}}function _m(e,t,n,r){return(Math.abs(e-n)+Math.abs(t-r)+Math.abs(e+t-n-r))/2}function vm(e){return e.find(e=>e.t===`combatEnd`)}export{am as Game,lm as combatSliceStart,sm as hexLine,cm as isCombatRoll,pu as n,gs as r,E as readSaveSlot,mm as shoutKeys,Qp as t};