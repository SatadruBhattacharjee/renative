//
//  AppDelegate.swift
//  RNVApp
//
//  Created by Pavel Jacko on 02/01/2019.
//
//

import UIKit
import CoreData
import React
import UserNotifications
{{APPDELEGATE_IMPORTS}}

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

    var window: UIWindow?
    let moduleName = "App"

    var uiView: RCTRootView!
    let bundleUrl = {{BUNDLE}}

    {{APPDELEGATE_METHODS}}
}
