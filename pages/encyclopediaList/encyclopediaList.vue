<template>
	<view>
		<view class="title-box">
			{{title}}
		</view>
		<view class="item-box" v-for="item in list">
			<view class="left">
				<view class="description-box">
					{{item.description}}
				</view>
				<view class="time-box">
					{{item.time}}
				</view>
			</view>
			<view class="right">
				<view class="arrow-right">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from '../../utils/api.js'
	export default {
		data() {
			return {
				title: '校园网',
				list: [
					{
						time: '2017-09-02',
						description: '学校的DNS是什么'
					},
					{
						time: '2017-09-02',
						description: '华南理工大学入网指南'
					}
				]
			}
		},
		onLoad(options) {
			this.getCategoriesItem(options.categoryID)
		},
		methods: {
			getCategoriesItem (id) {
				uni.request({
					url:Api.getCategoryByID()(id),
					method:'GET',
					success: (res) => {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
.title-box {
	font-size: 47rpx;
	font-weight: 550;
	padding: 10rpx 20rpx;
}
.item-box {
	border-top: 4.7rpx solid #f7f7f7;
	padding: 10rpx 15rpx;
	margin: 0 30rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.time-box {
	color: #a1d1fa;
	font-size: 24rpx;
}
.arrow-right {
    width: 18rpx;
    height: 18rpx;
    border-top: 5rpx solid #a1d1fa;
    border-right: 5rpx solid #a1d1fa;
    transform: rotate(45deg);
}
</style>
